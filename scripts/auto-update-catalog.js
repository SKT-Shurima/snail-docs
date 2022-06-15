"use strict";
const fs = require("fs");
const path = require("path");

// 需要更新 md 文档根目录路径
const docsRootPath = path.join("./docs");

// 暂存文件目录结构，用于后续插入到README当中
let catalog = "";

/**
 * @description: 获取 docsRootPath 根目录下的所有文件
 * TODO: 目前暂时不考虑目录结构多层嵌套问题
 * @param {string} dir 目标目录根路径
 * @return {array} name: 文件名  isDir 是否为目录
 */
const gatherCatalog = (dir = docsRootPath, level = 0) => {
  const subCatalog = []
  fs.readdirSync(dir).forEach(item => {
    const fullPath = path.join(dir, item);
    const isDir = fs.lstatSync(fullPath).isDirectory();
    if (item.startsWith('.') || (!isDir && !item.endsWith('.md'))) return;
    if (isDir || level === 0) {
      catalog += `### [${item.replace(/\.md$/g, '')}](${fullPath.replace(/\s+/g, '')})\n`
      if (isDir) gatherCatalog(fullPath, level + 1);
    } else {
      const subCatalogTitle = `- [${item.replace(/\.md$/g, '')}](${fullPath.replace(/\s+/g, '')})\n`;
      item === 'README.md' ? subCatalog.unshift(subCatalogTitle) : subCatalog.push(subCatalogTitle);
    }
  });
  const [README, ...restSub] = subCatalog;
  catalog += [...restSub.sort(), README].join('')
};


/**
 * @description: 将每个md 文件及其内部的目录组装成一棵目录树插入到 README.md 文件指定位置
 * <!-- API-toc -->
 * // 文件结构目录树
 * <!-- API-tocstop -->
 */
const updateReadmeCatalog = () => {
  const readmePath = path.join("./docs/README.md");
  return new Promise(resolve => {
    fs.readFile(readmePath, "utf-8", (error, content) => {
      const [preCont, , endCont] = content.trim().split(/(?:<!-- API-toc(?:\s*stop)? -->)/g);
      fs.writeFileSync(readmePath, `${preCont}\n<!-- API-toc -->\n${catalog}<!-- API-tocstop -->\n${endCont}`);
      resolve();
    });
  });
};

gatherCatalog();
updateReadmeCatalog();
