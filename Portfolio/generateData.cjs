const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'PORTFOLIO-CONTENT');
const data = {};

function scanDir(dirPath, relativeDir) {
  const items = fs.readdirSync(dirPath);
  const result = {
    files: [],
    subfolders: {}
  };

  for (const item of items) {
    if (item === '.DS_Store' || item === 'COVER PHOTOS') continue;
    
    const fullPath = path.join(dirPath, item);
    const relPath = path.join(relativeDir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      result.subfolders[item] = scanDir(fullPath, relPath);
    } else if (stat.isFile() && /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(item)) {
      result.files.push(`../../PORTFOLIO-CONTENT/${relPath}`);
    }
  }
  return result;
}

try {
  const folders = fs.readdirSync(contentDir);
  const topLevel = {};

  for (const f of folders) {
    if (f === '.DS_Store' || f === 'COVER PHOTOS' || f === 'About-me') continue;
    
    const fullPath = path.join(contentDir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      topLevel[f] = scanDir(fullPath, f);
    }
  }

  fs.mkdirSync(path.join(__dirname, 'src', 'data'), { recursive: true });
  fs.writeFileSync(path.join(__dirname, 'src', 'data', 'projectsData.json'), JSON.stringify(topLevel, null, 2));
  console.log('Successfully generated src/data/projectsData.json');
} catch (e) {
  console.error(e);
}
