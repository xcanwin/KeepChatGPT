# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 协作偏好

- 主要使用中文沟通，回复保持简洁，优先给出可执行结论。
- 代码改动遵循最小必要原则，不做无关重构。
- 存在多种方案时，说明取舍并给出建议。
- 未被明确要求时，不自动执行 `git commit`。

## 常用命令

```bash
# 开发模式：HTTP 服务(8888) + Jest watch 同时运行
npm run dev

# 单次运行测试（CI / 快速验证）
npm test

# 检查当前脚本版本号
rg "^// @version" KeepChatGPT.user.js

# 更新多语言文本输出（产物写入 temp/lang.txt）
python3 tools/kcg_i18n.py

# 生成 CDN 图片链接版 README（产物写入 temp/README_CDN.md）
python3 tools/kcg_doc_cdn.py
```

## 项目架构

### 核心文件

**`KeepChatGPT.user.js`** — 唯一的业务逻辑文件，单文件 Userscript，整体包裹在一个 IIFE `(function(){ ... })()` 中。内部结构按顺序：
1. GM_* API 封装（`sv`/`gv` 包装 `GM_setValue`/`GM_getValue`）
2. 多语言系统（`getLang` → `tl()`，支持 30+ 语言，语言包内联为 JSON 字符串）
3. `IndexedDB` 工具类（对话克隆持久化）
4. 各功能模块函数（`hookFetch`、`hookXHR`、`loadKCG`、`dataSec` 等）
5. 入口：`MutationObserver` 监听 DOM 节点出现后调用 `loadKCG()`，启动轮询和 hook

关键常量：`u`（session API 路径，从 `GM_info.script.namespace` 派生）、`trackingBlockRegex`（拦截跟踪域名的正则）。

**`KeepChatGPT.dev.user.js`** — 开发用 Tampermonkey 加载器。通过 `GM_addElement('script', {src: 'http://localhost:8888/KeepChatGPT.user.js?t=时间戳'})` 每次加载最新代码，绕过 chatgpt.com 的 CSP（`eval()` 被 CSP 阻止，不能用 eval 方式）。加载前将所有 GM_* API 和 `unsafeWindow` 挂到页面全局，使动态加载的脚本可以访问。

**`tools/dev-server.js`** — 本地 HTTP 服务，绑定 `127.0.0.1:8888`，`?t=` 参数自动忽略，响应头 `Cache-Control: no-store`。

**`tests/`** — Jest 测试套件，`tests/setup.js` mock 全部 GM_* API，测试纯逻辑（正则、数据安全规则、GM mock）。

### TDD 开发流程

```
修改 KeepChatGPT.user.js
    → Jest watch 自动重跑测试
    → 刷新浏览器（Tampermonkey dev loader 每次拉取最新代码）
```

### 注意事项

- 主脚本内所有函数和变量均为 IIFE 私有，不导出任何模块。新增可测试逻辑时，在 `tests/KeepChatGPT.test.js` 中通过复制常量/正则的方式测试，或扩展 GM mock。
- 多语言文案修改后需同步 `README.md`、`docs/README_EN.md`、`docs/README_ES.md`，并运行 `python3 tools/kcg_i18n.py` 验证词条结构。
- JS 风格：4 空格缩进，保留分号，不引入构建链或打包工具。
- 提交信息风格：简短中文动词短语（如"修复…/新增…/优化…"）。
- 提交信息不得包含 `Co-Authored-By` 或任何 AI 署名行。
