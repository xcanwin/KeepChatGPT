#!/usr/bin/env node
// 本地开发 HTTP 服务，供 Tampermonkey @require 加载脚本使用
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8888;
const ROOT = path.resolve(__dirname, '..');

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0]; // 去掉 cache-bust 参数
  const filePath = path.join(ROOT, urlPath);

  // 安全检查：禁止目录穿越
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end('Not found: ' + urlPath);
    }
    res.writeHead(200, {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    });
    res.end(data);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[dev-server] http://localhost:${PORT}`);
  console.log(`[dev-server] Tampermonkey 加载地址: http://localhost:${PORT}/KeepChatGPT.user.js`);
  console.log('[dev-server] 修改脚本后刷新浏览器页面即可生效');
});
