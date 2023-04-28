# KeepChatGPT

<br>

[中文文档](README.md) | [English README](README_EN.md)

<br>

## ⚠️Security Alert

- Please ensure that you use the official [installation repositories](#Install) mentioned in this article.
- Currently, there are unofficial extensions with the same name found on the [Chrome Web Store](https://chrome.google.com/webstore/category/extensions).

<br>

## Introduction

- If you like this script, please support my GitHub project [KeepChatGPT](https://github.com/xcanwin/KeepChatGPT/) by giving it a STAR.
- A UserScript that enables ChatGPT to chat smoothly, never experiencing network errors again, and no need to refresh the webpage anymore.
- Resolved error: NetworkError when attempting to fetch resource.
- Resolved error: Something went wrong. If this issue persists please contact us through our help center at help.openai.com.
- Resolved error: Conversation not found
- Cancel audit: This content may violate our content policy. If you believe this to be in error, please submit your feedback — your input will aid our research in this area.
- Resolved frequent interruptions during communication
- Resolved frequent webpage refreshing
- Supports multiple languages
- Resolved the issue of accidentally copying user avatars
- Mobile-compatible

| Num | After using ```KeepChatGPT```, the following scene will never occur again |
| --- | --- |
| 1 | <img src="./assets/error_network.png" width="750"></img> |
| 2 | <img src="./assets/wrong_somthing.png" width="750"></img> |
| 3 | <img src="./assets/wrong_audit.png" width="750"></img> |
| 4 | <img src="./assets/error_conversation_not_found.png" width="750"></img> |

## Comparison

| Experimental Environment |               Without using ```KeepChatGPT```                |                   Using ```KeepChatGPT```                    |
| :----------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|        Phenomenon        | Frequent red warning boxes NetworkError in the chat, appearing every ten minutes or so, requiring the webpage to be refreshed | There will never be network errors again, and there is no need to refresh the webpage |
|          Step 1          |                       Issue the prompt                       |                       Issue the prompt                       |
|          Step 2          |                     Wait for the result                      |                     Wait for the result                      |
|          Step 3          |                  Encounter a network error                   |                      Obtain the result                       |
|          Step 4          |                  Attempt to click to resend                  |                                                              |
|          Step 5          |              Encounter the network error again               |                                                              |
|          Step 6          |                   Copy the previous prompt                   |                                                              |
|          Step 7          |                     Refresh the webpage                      |                                                              |
|          Step 8          |            Wait for the webpage to finish loading            |                                                              |
|          Step 9          |                Open the previous chat session                |                                                              |
|         Step 10          |                  Paste the previous prompt                   |                                                              |
|         Step 11          |                    Issue the prompt again                    |                                                              |
|         Step 12          |                  Wait for the result again                   |                                                              |
|         Step 13          |                      Obtain the result                       |                                                              |

- By comparison, it can be seen that it saves more than 10 unnecessary steps and enables smooth chatting.

## Show

- Enjoy the free "Exclusive Gold Label," which represents a dramatic change in your AI experience:
- <img src="./assets/index_light_en.png" width="750"></img>
- For friends who like dark tones, you can hover over the "Exclusive Gold Label" with your mouse and select "Theme" to change it to "Exclusive Blue Label":
- <img src="./assets/index_dark.png" width="750"></img>
- Moblie:
- <img src="./assets/index_mobile.png" width="280"></img>

## Explanation

- Bypass Cloudflare's spider verification during page opening using Headless.
- Bypass Cloudflare's random machine verification using non-click.
- Maintain the principle of minimizing traffic.
- Move the mouse over "Exclusive Gold Label" and select "Show Debugging" to view the bypass process.

## Usage

1. Install ```Tampermonkey``` browser extension from [Tampermonkey website](https://www.tampermonkey.net/).
2. Install ```KeepChatGPT```, you can select a repository from ```Installation repositories```.
3. Open [ChatGPT](https://chat.openai.com/chat) and enjoy the smooth experience.
4. Additionally, there is a more clever way, which is to ask ChatGPT: "How to install the Tampermonkey extension? How to install the userscript from Greasy Fork?"

## Install

| Num | UserScript repositories |
| --- | --- |
| 1 | [Github](https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js) |
| 2 | [GreasyFork](https://greasyfork.org/zh-CN/scripts/462804-keepchatgpt) |

## Appreciate

- If you find it useful, awesome, smooth, or nice!
- If you wish the author's little cat to have better cat food and canned food.
- If this project has helped you.
- If this project has improved your work efficiency.
- If you wish this project to be continuously maintained to prevent a new round of OpenAI error messages.
- If you wish this project to continue upgrading with more features.
- Creating is not easy, maintaining a project requires time, energy, and technical skills. Appreciation and support are welcome.
- You can write your ID in the note, thank you.

| From | Thanks |
| --- | --- |
| My cat | <img src="./assets/appreciate_mycat.png" width="300"></img> |
| Buymeacoffee | [<img src="./assets/appreciate_buycoffee.png" width="300"></img> ](https://www.buymeacoffee.com/xcanwin) |
| Afdian<br>(Support wechat and alipay) | <img src="./assets/appreciate_afdian.jpg" width="300"></img> |
| Wechat<br>(May be invalid) | <img src="./assets/appreciate_wechat.png" width="300"></img> |
