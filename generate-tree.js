const fs = require('fs');
const path = require('path');

function getTree(dirPath, relativeRoot = '') {
  const items = fs.readdirSync(dirPath);
  const result = [];
  
  for (const item of items) {
    if (item === 'node_modules' || item === '.git' || item === 'dist' || item === '.next' || item === '.github') continue;
    
    const fullPath = path.join(dirPath, item);
    const relPath = path.relative(relativeRoot, fullPath).replace(/\\/g, '/');
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const children = getTree(fullPath, relativeRoot);
      result.push({
        name: item,
        path: relPath,
        type: 'directory',
        children: children
      });
    } else {
      result.push({
        name: item,
        path: relPath,
        type: 'file'
      });
    }
  }
  
  // Sort directories first, then files alphabetically
  return result.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === 'directory' ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });
}

const targetDir = path.resolve(__dirname, 'src');
const rootDir = __dirname;
const tree = getTree(targetDir, rootDir);
console.log(JSON.stringify(tree, null, 2));
