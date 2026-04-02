# 仓库协作指引

本指引面向 KeepChatGPT 仓库协作，强调最小改动、可验证和多语言文档一致性。涉及功能改动时，先明确影响范围，再执行代码变更。

## 协作偏好
- 主要使用中文沟通。
- 回复保持简洁，优先给出可执行结论。
- 代码改动遵循最小必要原则，避免无关重构。
- 不提供时间预估或时间承诺。
- 存在多种可行方案时，直接说明取舍并给出建议。
- 未被明确要求时，不自动提交 `git commit`。
- 文档变更保持简洁、可导航，并尽量保留现有链接结构。

## 项目结构与模块组织
- `KeepChatGPT.user.js`：主 Userscript 文件，包含核心功能、菜单交互、样式注入与多语言文本。
- `README.md`：中文主文档。
- `docs/README_EN.md`：英文文档。
- `docs/README_ES.md`：西班牙文文档。
- `tools/kcg_i18n.py`：多语言词条维护脚本，运行后写出 `temp/lang.txt`。
- `tools/kcg_doc_cdn.py`：README 图片 CDN 链接生成脚本，运行后写出 `temp/README_CDN.md`。
- `tests/`：Jest 自动化测试套件（`tests/setup.js` mock GM_* API，`tests/KeepChatGPT.test.js` 测试纯逻辑）。
- `temp/`：工具脚本产物与临时验证文件目录，默认被 `.gitignore` 忽略。
- `assets/`：README 与文档使用的图片资源。

## 构建、测试与开发命令
- `python3 tools/kcg_i18n.py`：更新/生成语言包文本输出（`temp/lang.txt`）。
- `python3 tools/kcg_doc_cdn.py`：生成 CDN 图片链接版 README（`temp/README_CDN.md`）。
- `rg "^// @version" KeepChatGPT.user.js`：快速检查当前脚本版本号。
- `git log --oneline -n 20`：查看近期提交风格，保持提交信息一致性。

## 编码风格与命名约定
- JavaScript 以现有 Userscript 风格为准：4 空格缩进、保留分号、避免引入新构建链。
- Python 工具脚本保持标准 `python3` 可执行方式，避免不必要依赖。
- 命名遵循“贴近现有代码”原则：仓库内已有 `camelCase` 与 `snake_case` 并存，新增代码按邻近上下文保持一致。
- 优先小步改动，避免大规模重命名或跨文件重排。

## TDD 模式
- 默认适用：新增功能、行为变更、bug 修复。
- 推荐流程：先在 `tests/KeepChatGPT.test.js` 补充或更新测试用例，再修改 `KeepChatGPT.user.js`，运行 `npm test` 验证；脚本产物核对在 `temp/` 完成。
- 纯文档改动（如 `README.md` 与 `docs/` 同步）可不新增测试文件，但需完成一致性检查。

## 测试指引
- 自动化测试：`npm test`（Jest，单次）或 `npm run dev`（HTTP 服务 + Jest watch 同时运行）。测试覆盖纯逻辑（正则、数据安全规则、GM mock），DOM/网络相关功能仍以手工回归为主。
- 功能改动后至少验证：菜单可打开、开关可切换、目标功能行为符合预期、无明显控制台报错。
- i18n 相关改动后：运行 `python3 tools/kcg_i18n.py`，检查 `temp/lang.txt` 结构与新增词条映射。
- 文档或资源链接改动后：运行 `python3 tools/kcg_doc_cdn.py`，检查 `temp/README_CDN.md` 图片链接与版本参数。
- 多语言文档变更时：同步核对 `README.md`、`docs/README_EN.md`、`docs/README_ES.md` 的功能描述与目录结构一致性。

## 提交与 PR 指引
- 近期提交以简短中文动词短语为主（如”修复… / 更新… / 优化…”），也存在少量英文提交（如 `fix:`、`feat:` 或英文短句）。
- 提交信息不得包含 `Co-Authored-By` 或任何 AI 署名行。
- 建议单一改动单一提交，提交标题聚焦一个目的，避免将无关修改混入同一提交。
- PR 描述应至少包含：变更背景、改动范围、验证步骤、影响面；涉及界面变化时附截图。
- 若变更影响用户文档或多语言文案，请在 PR 中明确列出已同步的文档文件。

## 变更执行检查清单
- 仅做最小且有针对性的改动。
- 已评估并标注影响范围（功能、脚本、文档、资源）。
- 已按改动类型完成必要验证（手工回归或脚本产物核对）。
- 多语言文档与文案已同步检查，无明显不一致。
- 未引入无关重构、无效依赖或无用文件。
