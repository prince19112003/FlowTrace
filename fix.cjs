const fs = require('fs');
const path = require('path');
const dir = 'src/lessons/python/variables';
const files = fs.readdirSync(dir);
for (const file of files) {
  if (file.endsWith('.ts') && file !== 'index.ts') {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/from '\.\.\/\.\.\/\.\.\/types'/g, "from '../../types'");
    fs.writeFileSync(p, content);
  }
}
