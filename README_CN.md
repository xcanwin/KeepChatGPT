<p align="center"><img src="./assets/KeepChatGPT.png" width="600"></img></p>

<br>

[中文文档](https://github.com/xcanwin/KeepChatGPT/blob/main/README.md) | [English README](https://github.com/xcanwin/KeepChatGPT/blob/main/README_EN.md)

<br>

## ⚠️安全告警

- 请认准本文中官方的[安装渠道](#安装渠道)
- 目前发现[Chrome 应用商店](https://chrome.google.com/webstore/category/extensions)上有非官方的同名拓展

<br>

## 项目简介

- 这是一款高效的```ChatGPT```畅聊插件，它可以让你的聊天无比丝滑，一劳永逸摆脱各种```报错```和```警告```，释放双手不再刷新网页，同时还在持续增加更多增强功能
- 非盈利开源项目依靠大家无价的支持，欢迎各位伙伴在 [GitHub](https://github.com/xcanwin/KeepChatGPT/) 和 [GreasyFork](https://greasyfork.org/zh-CN/scripts/462804-keepchatgpt) 留下微微的⭐️star和👍🏻正面的体验反馈
- 谢谢[赞赏猫粮](#赞赏)

## 功能简介

1. 解决了报错：```NetworkError when attempting to fetch resource.```
2. 解决了报错：```Something went wrong. If this issue persists please contact us through our help center at help.openai.com.```
3. 解决了报错：```Conversation not found```
4. 解决了报错：```This content may violate our content policy. If you believe this to be in error, please submit your feedback — your input will aid our research in this area.```
5. 解决了聊天中断
6. 解决了频繁刷新
7. 支持多国语言
8. 解决了对话里的用户名会被手误复制的官方BUG
9. 支持自由地[取消后台监管审计](#关于-取消审计-功能)
10. 支持移动端([鸿蒙](#用法-鸿蒙系统)、[Android](#用法-鸿蒙系统)、[iOS](#用法-苹果系统))
11. 支持自由地[调整时间间隔](#关于-调整间隔-功能)
12. 支持[便捷地克隆并且无损地编辑指定对话](#关于-克隆对话-功能)
13. 本文底部的[其他说明](#其他说明)，作者浅析了[为何会出现大规模地网络错误](#关于-为何会出现大规模地网络错误)、常见错误信息解决方案，以及功能详情

| 序号 | 使用```KeepChatGPT```插件以后再也不会出现以下场面 |
| --- | --- |
| 1 | <img src="./assets/error_network.png" width="750"></img> |
| 2 | <img src="./assets/wrong_somthing.png" width="750"></img> |
| 3 | <img src="./assets/error_conversation_not_found.png" width="750"></img> |
| 4 | <img src="./assets/wrong_audit.png" width="750"></img> |

## 用户反馈

- 有好有坏
- 对于好的谢谢大家点赞
- 对于坏的会持续更新

<img src="./assets/user_feedback_1.png" width="750"></img>

## 对比

| 实验环境 |                    不使用KeepChatGPT插件                     |          使用KeepChatGPT插件           |
| :------: | :----------------------------------------------------------: | :------------------------------------: |
|   现象   | 聊天频频红框警告```NetworkError```，<br>每隔十几分钟出现一次，必须刷新网页。 | 再也不会出现网络报错，<br>再也不用刷新网页。 |
|  步骤1   |                           下发指令                           |                下发指令                |
|  步骤2   |                           等待结果                           |                等待结果                |
|  步骤3   |                         遇到网络报错                         |                得到结果                |
|  步骤4   |                       尝试点击重新下发                       |                                        |
|  步骤5   |                       再次遇到网络报错                       |                                        |
|  步骤6   |                        复制刚刚的指令                        |                                        |
|  步骤7   |                           刷新页面                           |                                        |
|  步骤8   |                        等待网页加载完                        |                                        |
|  步骤9   |                      打开刚刚的聊天会话                      |                                        |
|  步骤10  |                        粘贴刚刚的指令                        |                                        |
|  步骤11  |                         再次下发指令                         |                                        |
|  步骤12  |                         再次等待结果                         |                                        |
|  步骤13  |                           得到结果                           |                                        |

- 通过对比可知，足足省去10个多余的步骤，顺畅地聊天

## 展示

- 享受免费的```KeepChatGPT畅聊用户专属金标```，它代表着你的AI体验发生了骤变：

  <img src="./assets/index_light.png" width="750"></img>

- 喜欢暗调的朋友可以鼠标移到```专属金标```选择```主题```修改为```专属蓝标```：

  <img src="./assets/index_dark.png" width="750"></img>

- 移动端：

  <img src="./assets/index_mobile.png" width="280"></img>

## 原理

- 利用Headless绕过打开页面时的Cloudflare爬虫验证
- 利用non-click绕过不定时的Cloudflare机器人验证
- 保持流量最小化原则
- 鼠标移到```专属金标```选择```显示调试```可以查阅绕过过程

## 用法 电脑系统

1. 浏览器首选```Chrome```、```Firefox```、```Edge```，其他主流浏览器都是主动兼容这3个浏览器的；
2. 安装```Tampermonkey```浏览器拓展，可以从 [Tampermonkey官网](https://www.tampermonkey.net/) 安装；
3. 安装```KeepChatGPT```插件，可以从 [安装渠道](#安装渠道) 选一个渠道安装；
4. 打开 [ChatGPT](https://chat.openai.com/chat) 尽情享用吧；
5. 另外，还有一个更巧妙的方法就是问ChatGPT：```如何安装tampermonkey拓展和greasyfork上的插件```

## 用法 鸿蒙系统

1. 浏览器首选```Firefox```；
2. 安装```Firefox```浏览器App，可以从 [华为应用市场](https://appgallery.huawei.com/app/C31765)、[Firefox官网](https://www.mozilla.org/firefox/browsers/mobile/android/) 安装；
3. 打开```Firefox```浏览器App > 右下角```...``` > 附加组件 > 附加组件管理器 > ```Tampermonkey```右边的```+```；
4. 安装```KeepChatGPT```插件，可以从 [安装渠道](#安装渠道) 选一个渠道安装；

## 用法 苹果系统

1. 浏览器首选```Safari```，其他浏览器受限于苹果的政策少有支持JS插件的；
2. 安装```Stay```浏览器拓展App，可以从 [App Store](https://apps.apple.com/app/id1591620171) 安装；
3. 使用说明参考[Stay官网](https://github.com/shenruisi/Stay)；
4. 安装```KeepChatGPT```插件，可以从 [安装渠道](#安装渠道) 选一个渠道安装；

## 安装渠道

| 序号 | UserScript源 |
| --- | --- |
| 1 | [Github](https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js) |
| 2 | [GreasyFork](https://greasyfork.org/zh-CN/scripts/462804-keepchatgpt) |

- 作者只提供插件的安装方式，官方来源只有以上两个。
- 作者觉得插件比拓展好，大家随时可以审计安全性，有没有偷偷上传数据大家都可以随时发现。
- ⚠️[Chrome 应用商店](https://chrome.google.com/webstore/category/extensions) 上的同名拓展不是作者提供的。

## 其他说明

### 关于 为何会出现大规模地网络错误

1. 全球已出现算力荒，openai同样存在。
2. openai大火，用户量、用户在线时长、用户使用频率同时激增，导致加剧资源紧张。
3. 衍生出大量AI产品、AI机器人，都在私下调用ChatGPT的API和网页版ChatGPT，甚至调用频率远超所有真实用户的总和。
4. openai接入```Cloudflare```，开启```强力保护规则```，拦截私下接入openai的AI产品、AI机器人。
5. 就像图形验证码一样，本意是拦截机器人，可是一旦出现验证码被识别的风险，网站管理员就会把图形验证码开发得更复杂，影响了真实用户，但又确实拦截了机器人。
6. ```Cloudflare```是公共服务，它服务于所有网站，它的保护规则和风控策略是通用的。很多不希望被爬虫、被机器人访问、被黑客攻击、被大流量访问的网站都会接入Cloudflare，所以Cloudflare有丰富的风控策略。
7. 大量国外用户是家庭网络，Cloudflare判断他们的网络没有风险，所以他们几乎没报错。
8. 大量国内用户使用各种```位移魔法```(下面简称```666```)，然而很多```666```的ip曾经或者正在被Cloudflare列入了```强力保护规则```的重点关照名单里。不一定是用户本人导致的，可能是前人乘凉 后人遭殃，也可能是同C段的很多ip此时此刻还在频繁地触发风控，也可能用户本人都不知道自己使用的是共享```666```，触发了风控，Cloudflare判断他们的网络存在风险，于是出现报错，需要验证真实用户。
9. 原因不仅限以上内容，这里仅仅是抛砖引玉。

### 关于 取消审计 功能

1. 默认情况下，你所有的对话都会被openai官方自动化[审计](https://platform.openai.com/docs/guides/moderation/overview)，如果openai审计发现你有过多的违规、违反 [openai政策](https://openai.com/policies/usage-policies) 的对话，你的账号就存在被限制甚至被封号的风险。
2. 通过```勾选```本插件的```取消审计```功能加上你巧妙的提示词，可以最大程度地免受影响。

### 关于 调整间隔 功能

1. 那个值指的是```keep```(保活)的时间间隔，单位是```秒```。
2. 时间间隔越大，keep的速度就越慢，对网站的影响就越小，你的账号就越安全。
3. 时间间隔越小，keep的速度就越快，你的网络错误就越不会出现。
4. 建议间隔```30```秒以上。
5. 作者平时设置的是```150```秒。

### 关于 克隆对话 功能

1. ChatGPT属于AI提示工程。
2. 提示工程做的最多的一件事就是反复调整提示词，直到发现机器人真正理解了，并且结果满足你的要求。
3. 在对结果满意之前，反复的调整提示词里做的最多的一件事就是复制粘贴自己发过的内容。
4. 勾选了```克隆对话```以后，可以通过点击想要重新优化的对话前面的头像，对话框就会立刻出现。

| 实验环境 |     不勾选克隆对话     | 勾选克隆对话 |
| :------: | :--------------------: | :----------: |
|  步骤1   |        下发指令        |   下发指令   |
|  步骤2   |        得到结果        |   得到结果   |
|  步骤3   |      对结果不满意      | 对结果不满意 |
|  步骤4   | 鼠标点击指令的开头不放 | 点击对话头像 |
|  步骤5   |      鼠标滚轮滚动      | 开始调整指令 |
|  步骤6   |  鼠标拖拉到指令的结尾  |              |
|  步骤7   |        复制指令        |              |
|  步骤8   |     鼠标点击对话框     |              |
|  步骤9   |        粘贴指令        |              |
|  步骤10  |      开始调整指令      |              |

- 通过对比可知，足足省去5个多余的步骤，顺畅地聊天
- 省去的步骤是成倍的，因为当你觉得调整后的对话还不错，但还不是非常满意，还需要进一步调整的时候，每调整一次，多余的步骤就要做一次，所以勾选```克隆对话```有利于提升效率。

### 关于 使用了本插件依然出现网络错误 的原因和解决方案

1. 原因: 参考 [```关于 调整间隔 功能```](#关于-调整间隔-功能)。解决方案: 适度调整keep的间隔。
2. 原因: 参考 [```关于 为何会出现大规模地网络错误```](#关于-为何会出现大规模地网络错误)。解决方案: 更换```666```的ip、机房、运营商、渠道，一个人的```666```才是最香的。

### 关于 其他错误 的原因和解决方案

1. 出现下述错误信息可参考官方的解决方案: [openai官方文档 报错代码](https://openai.com/policies/usage-policies)
2. 401 - Invalid Authentication
3. 401 - Incorrect API key provided
4. 401 - You must be a member of an organization to use the API
5. 429 - Rate limit reached for requests
6. 429 - You exceeded your current quota, please check your plan and billing details
7. 429 - The engine is currently overloaded, please try again later
8. 500 - The server had an error while processing your request

### 关于 错误信息429 - Too many requests in 1 hour. Try again later 的原因和解决方案

1. 首先，429错误有好多种，先确认是不是 [```关于 其他错误 的原因和解决方案```](#关于-其他错误-的原因和解决方案) 里的429错误。如果不是，那以下几种可能:
2. 原因: 新注册或者同一手机注册的用户，openai不赠送免费额度，查询链接 [openai官网 额度页面](https://platform.openai.com/account/usage)，解决方案: 换邮箱和手机号注册。
3. 原因: 用完了额度，查询链接 [openai官网 额度页面](https://platform.openai.com/account/usage)，解决方案: 充值变强。
4. 原因: Cloudflare的bug，解决方案: 使用浏览器的隐私模式等chatgpt，如果发现隐私模式能正常使用，就清理浏览器正常模式的openai.com主域名和子域名的所有cookie和本地存储。
5. 原因: 可能连你都不知道自己使用的是共享```666```，你有一群```相同ip出口的网上邻居```，他们一直在以各种目的频繁请求，虽然他们的访问量很大但是他们一直控制在临界点不触发429错误，而你使用了本插件以后把他们拖下水了，所以在你懵逼为何429的时候你的网上邻居们也在懵逼为何突然429，解决方案: 更换```666```的ip、机房、运营商、渠道，一个人的```666```才是最香的。

### 关于 PLUS用户是不是不会报错

- PLUS用户和普通用户一样，在劫难逃。

## 赞赏

- 如果你觉得好用！NB！神器！好顺畅！感觉很棒！NICE！
- 如果你希望作者的小猫吃到更好的猫粮、猫罐头
- 如果本项目对你有帮助
- 如果本项目提高了你工作效率
- 如果你希望本项目持续维护，以继续防止openai接下来新的一轮的报错
- 如果你希望本项目持续升级更多的功能
- 创造不易，维护一个项目需要消耗时间、精力、技术，欢迎欣赏与赞赏
- 可在备注里写上你的ID，谢谢

| From | Thanks |
| --- | --- |
| 我的猫 | <img src="./assets/appreciate_mycat.png" width="300"></img> |
| buymeacoffee | [<img src="./assets/appreciate_buycoffee.png" width="300"></img>](https://www.buymeacoffee.com/xcanwin)<br>点击图片 |
| 爱发电<br>(支持微信、支付宝) | [<img src="./assets/appreciate_afdian.png" width="300"></img>](https://afdian.net/a/xcanwin/plan)<br>点击图片或者扫描 |
| 微信<br>(偶尔失效) | <img src="./assets/appreciate_wechat.png" width="300"></img> |