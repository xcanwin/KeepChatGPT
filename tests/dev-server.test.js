const http = require('http');
const { createDevServer, SCRIPT_PATH } = require('../tools/dev-server');

const request = (server, requestPath, method = 'GET', headers = {}) => new Promise((resolve, reject) => {
  const address = server.address();
  const req = http.request({
    host: '127.0.0.1',
    port: address.port,
    path: requestPath,
    method,
    headers,
  }, (res) => {
    const chunks = [];
    res.on('data', chunk => chunks.push(chunk));
    res.on('end', () => {
      resolve({
        statusCode: res.statusCode,
        headers: res.headers,
        body: Buffer.concat(chunks).toString('utf8'),
      });
    });
  });
  req.on('error', reject);
  req.end();
});

describe('dev-server', () => {
  let server;

  beforeEach(async () => {
    server = createDevServer();
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  });

  afterEach(async () => {
    await new Promise((resolve, reject) => server.close(err => (err ? reject(err) : resolve())));
  });

  test('仅允许读取 KeepChatGPT.user.js，且不开放跨源读取', async () => {
    const response = await request(server, `${SCRIPT_PATH}?t=123`);

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toContain('application/javascript');
    expect(response.headers['cache-control']).toContain('no-store');
    expect(response.headers['access-control-allow-origin']).toBeUndefined();
    expect(response.body).toContain('// ==UserScript==');
  });

  test('拒绝读取其他仓库文件', async () => {
    const response = await request(server, '/README.md');

    expect(response.statusCode).toBe(404);
    expect(response.body).toContain('/README.md');
  });

  test('拒绝来自其他站点的 Origin/Referer', async () => {
    const originResponse = await request(server, SCRIPT_PATH, 'GET', {
      Origin: 'https://example.com',
    });
    const refererResponse = await request(server, SCRIPT_PATH, 'GET', {
      Referer: 'https://example.com/page',
    });

    expect(originResponse.statusCode).toBe(403);
    expect(refererResponse.statusCode).toBe(403);
  });

  test('允许 chatgpt.com 的 Referer', async () => {
    const response = await request(server, SCRIPT_PATH, 'GET', {
      Referer: 'https://chatgpt.com/c/test',
    });

    expect(response.statusCode).toBe(200);
  });

  test('拒绝非 GET/HEAD 请求', async () => {
    const response = await request(server, SCRIPT_PATH, 'POST');

    expect(response.statusCode).toBe(405);
    expect(response.headers.allow).toBe('GET, HEAD');
  });
});
