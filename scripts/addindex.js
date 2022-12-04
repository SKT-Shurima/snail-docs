// 将docs文件夹下所有的 README.md 文件 改名为 index.md，如果没有index.md文件，则创建 index.md 文件
// 以便于 vuepress 自动生成侧边栏
// 该脚本需要在 vuepress 项目根目录下执行
const fs = require('fs');
const path = require('path');
const docsPath = path.resolve(__dirname, '../docs');
const files = fs.readdirSync(docsPath);
const ignoreDir = ['.vuepress', '.vitepress'];
files.forEach(file => {
  if (ignoreDir.includes(file)) return;
  const filePath = path.resolve(docsPath, file);
  const stats = fs.statSync(filePath);
  if (stats.isDirectory()) {
    const readmeFile = path.resolve(filePath, 'README.md');
    const indexFile = path.resolve(filePath, 'index.md');
    if(fs.existsSync(indexFile)) {
      return;
    }if (fs.existsSync(readmeFile)) {
      fs.renameSync(readmeFile, path.resolve(filePath, 'index.md'));
    } else {
      // 创建 index.md 文件
      fs.writeFileSync(indexFile, '');
    }
  }
});
