#!/usr/bin/env node
// 本地开发 HTTP 服务，供 Tampermonkey @require 加载脚本使用
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8888;
const ROOT = path.resolve(__dirname, '..');
const SCRIPT_PATH = '/KeepChatGPT.user.js';
const ALLOWED_HOSTS = new Set([
  'chatgpt.com',
  'chat.openai.com',
  'localhost',
  '127.0.0.1',
]);

const isAllowedSource = (headerValue) => {
  if (!headerValue) {
    return true;
  }
  try {
    const { hostname } = new URL(headerValue);
    return ALLOWED_HOSTS.has(hostname);
  } catch {
    return false;
  }
};

const requestListener = (req, res) => {
  const urlPath = (req.url || '').split('?')[0]; // 去掉 cache-bust 参数
  const origin = req.headers.origin || '';
  const referer = req.headers.referer || '';

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, {
      'Allow': 'GET, HEAD',
    });
    return res.end('Method Not Allowed');
  }

  if (urlPath !== SCRIPT_PATH) {
    res.writeHead(404);
    return res.end('Not found: ' + urlPath);
  }

  if (!isAllowedSource(origin) || !isAllowedSource(referer)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  const filePath = path.join(ROOT, SCRIPT_PATH.slice(1));
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end('Not found: ' + urlPath);
    }
    res.writeHead(200, {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'X-Content-Type-Options': 'nosniff',
    });
    if (req.method === 'HEAD') {
      return res.end();
    }
    return res.end(data);
  });
};

const createDevServer = () => http.createServer(requestListener);

if (require.main === module) {
  const server = createDevServer();
  server.listen(PORT, '127.0.0.1', () => {
    console.log(`[dev-server] http://localhost:${PORT}`);
    console.log(`[dev-server] Tampermonkey 加载地址: http://localhost:${PORT}${SCRIPT_PATH}`);
    console.log('[dev-server] 修改脚本后刷新浏览器页面即可生效');
  });
}

module.exports = {
  createDevServer,
  requestListener,
  SCRIPT_PATH,
};
