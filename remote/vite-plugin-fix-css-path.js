import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

/**
 * 修复 Module Federation 中 CSS 路径的插件
 * 确保 CSS 文件路径包含 'assets' 目录，并添加 crossOrigin 属性
 */
export function fixCssPathPlugin() {
  return {
    name: 'fix-css-path',
    writeBundle(options, bundle) {
      // 查找 remoteEntry.js
      const remoteEntryFile = Object.keys(bundle).find(
        (file) => file.includes('remoteEntry.js')
      );
      
      if (remoteEntryFile) {
        const filePath = join(options.dir, remoteEntryFile);
        let content = readFileSync(filePath, 'utf-8');
        
        // 修复 CSS 路径：在绝对 URL 的 base 和 CSS 路径之间添加 'assets'
        content = content.replace(
          /href = \[cleanBaseUrl, cleanCssPath\]\.filter\(Boolean\)\.join\('\/'\);/g,
          "href = [cleanBaseUrl, 'assets', cleanCssPath].filter(Boolean).join('/');"
        );
        
        // 添加 crossOrigin 属性以支持跨域加载 CSS，并防止重复加载
        const patterns = [
          {
            // 格式1: 已有 crossOrigin
            pattern: /element\.href = href;\s+element\.crossOrigin = 'anonymous';\s+document\.head\.appendChild\(element\);/g,
            replacement: `element.href = href;
          element.crossOrigin = 'anonymous';
          if (!document.querySelector(\`link[href="\${href}"]\`)) {
            document.head.appendChild(element);
          }`
          },
          {
            // 格式2: 没有 crossOrigin
            pattern: /element\.href = href;\s+document\.head\.appendChild\(element\);/g,
            replacement: `element.href = href;
          element.crossOrigin = 'anonymous';
          if (!document.querySelector(\`link[href="\${href}"]\`)) {
            document.head.appendChild(element);
          }`
          }
        ];
        
        patterns.forEach(({ pattern, replacement }) => {
          content = content.replace(pattern, replacement);
        });
        
        writeFileSync(filePath, content, 'utf-8');
      }
    },
  };
}
