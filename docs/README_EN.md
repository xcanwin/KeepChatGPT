<br><br>

<center><div align="center">

<img src="/assets/KeepChatGPT.png" width="750"></img>

<br>

<a href="https://github.com/xcanwin/KeepChatGPT/blob/main/README.md">中文</a> | <a href="https://github.com/xcanwin/KeepChatGPT/blob/main/docs/README_EN.md">English</a> | <a href="https://github.com/xcanwin/KeepChatGPT/blob/main/docs/README_ES.md">Español</a>

</div></center>

<br>

## Project Description

- If you like this script, please support my GitHub project [KeepChatGPT](https://github.com/xcanwin/KeepChatGPT/) by giving it a ⭐️
- This is an open source, free and efficient ```ChatGPT``` chat userscript extension, which can make your chat extremely smooth and get rid of various ```errors``` and ```warnings``` once and for all, save a full 10 extra steps, free your hands from constantly refreshing the page, and the authors are continuing to add more enhancements, including canceling audits, cloning conversations, purifying the page, displaying large screens, displaying full screens, etc.
- There is no R & D funding, purely with love power, welcome to Donate. Thank you [sponsor cat food](#sponsor)

## Features introduction

1. Resolved the error：```NetworkError when attempting to fetch resource.```
2. Resolved the error：```Something went wrong. If this issue persists please contact us through our help center at help.OpenAI.com.```
3. Resolved the error：```Conversation not found```
4. Resolved the error：```This content may violate our content policy. If you believe this to be in error, please submit your feedback — your input will aid our research in this area.```
5. Resolved frequent interruptions during communication
6. Resolved frequent webpage refreshing
7. Multi-language support
8. Resolved the official BUG that the username in the dialogue would be copied by mistake
9. Support free [cancel backend supervision audit](#about-cancel-audit-function)
10. Mobile-compatible ([HarmonyOS](#usage-harmonyos-system), [Android](#usage-android-system), [iOS](#usage-apple-system))
11. Support freely [adjust time interval](#about-adjust-interval-feature)
12. Support [easy cloning and non-destructive editing of specified dialogues](#about-clone-dialogue-function)
13. Support [purify the page](#about-purify-page-features)
14. Support large screen display
15. Support fullscreen display

The above is a brief description of the functions, the detailed description of the functions at the bottom of this article.

And at the bottom of this article [Other instructions](#other-instructions), the author briefly analyzes [Why large-scale network errors occur](#about-why-large-scale-network-errors-occur), common error message solutions

| Num | After using ```KeepChatGPT```, the following scene will never occur again |
| --- | --- |
| 1 | <img src="/assets/error_network.png" width="750"></img> |
| 2 | <img src="/assets/wrong_somthing.png" width="750"></img> |
| 3 | <img src="/assets/wrong_audit.png" width="750"></img> |
| 4 | <img src="/assets/error_conversation_not_found.png" width="750"></img> |

## Users' feedback

- There are good and bad
- Thank you for your praise
- Will keep updating for bad ones

<img src="/assets/user_feedback_4.png" width="750"></img>
<img src="/assets/user_feedback_3.png" width="750"></img>
<img src="/assets/user_feedback_2.png" width="750"></img>
<img src="/assets/user_feedback_1.png" width="750"></img>

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
- <img src="/assets/index_light_en.png" width="750"></img>
- For friends who like dark tones, you can hover over the "Exclusive Gold Label" with your mouse and select "Theme" to change it to "Exclusive Blue Label":
- <img src="/assets/index_dark.png" width="750"></img>
- Moblie:
- <img src="/assets/index_mobile.png" width="280"></img>

## Explanation

- Bypass Cloudflare's spider verification during page opening using Headless.
- Bypass Cloudflare's random machine verification using non-click.
- Maintain the principle of minimizing traffic.
- Move the mouse over ```Exclusive Gold Label``` and select ```Show Debugging``` to view the bypass process.

## Usage

The preferred browsers are ```Chrome```, ```Firefox```, ```Edge```, and other browsers who are compatible with these three browsers;

1. Install ```Tampermonkey``` browser extension from [Tampermonkey website](https://www.tampermonkey.net/).
2. Install ```KeepChatGPT```, you can select a repository from [Installation Repositories](#install).
3. Open [ChatGPT](https://chat.OpenAI.com/chat) and enjoy the smooth experience.
4. Additionally, there is a more clever way, which is to ask ChatGPT: ```How to install the Tampermonkey extension? How to install the userscript from Greasy Fork?```


## Usage HarmonyOS System

1. The preferred Browser is ```Firefox```;
2. Install ```Firefox``` browser App, you can download it from [Huawei AppGallery](https://appgallery.huawei.com/app/C31765)、[Firefox official website](https://www.mozilla.org/firefox/browsers/mobile/android/)；
3. Open ```Firefox``` browser App > bottom right corner ```...``` > Add-ons > Add-ons Manager > ```+``` on the right of ```Tampermonkey```;
4. Install ```KeepChatGPT``` userscript, you can choose a channel to install from [installation channel](#installation-channel);

## Usage Android System

1. The preferred Browser is ```Firefox```;
2. Install ```Firefox``` browser App, you can download it from [Playstore](https://play.google.com/store/apps/details?id=org.mozilla.firefox)、[Firefox official website](https://www.mozilla.org/firefox/browsers/mobile/android/)；
3. Open ```Firefox``` browser App > bottom right corner ```...``` > Add-ons > Add-ons Manager > ```+``` on the right of ```Tampermonkey```;
4. Install ```KeepChatGPT``` userscript, you can choose a channel to install from [installation channel](#installation-channel);

## Usage Apple System

1. The preferred browser is ```Safari```, other browsers are limited by Apple's policy and rarely support JS plug-ins;
2. Install the ```Stay``` browser extension app, which can be installed from [App Store](https://apps.apple.com/app/id1591620171)；
3. Refer to [Stay official website] (<https://github.com/shenruisi/Stay>) for instructions;
4. Install ```KeepChatGPT``` plugin, you can choose a channel to install from [installation channel](#installation-channel)；

## Installation Channel

|  | UserScript Source |
| --- | --- |
| 1 | [Github](https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main/KeepChatGPT.user.js) |
| 2 | [GreasyFork](https://greasyfork.org/zh-CN/scripts/462804-keepchatgpt) |

- The author only provides the installation method of the userscript, and the official sources are only the above two, please look for the official sources.
- The author thinks that userscripts are better than extensions. Everyone can audit the security at any time, and everyone can find out if there is any secretly uploaded data.
- ⚠️[Google App Store](https://chrome.google.com/webstore/category/extensions) and ⚠️[Microsoft App Store](https://microsoftedge.microsoft.com/) are not provided by the author. And plagiarized this project, but also charged users.

## Other Instructions

### About why large-scale network errors occur

1. There has been a shortage of computing power in the world due to global chip crisis, and OpenAI also exists.
2. OpenAI became an instant hit, and the number of users, user online time, and user frequency increased sharply at the same time, which led to aggravated resource shortage.
3. A large number of AI products and AI bots have been derived, all calling ChatGPT's API and the web version of ChatGPT privately, even far more frequently than the sum of all real users.
4. OpenAI connects to ```Cloudflare```, enables ```strong protection rules```, and intercepts AI products and AI bots that are privately connected to OpenAI.
5. Like the graphical CAPTCHA, the intent was to intercept bots, but once there was a risk of the CAPTCHA being recognized, webmasters developed the graphical CAPTCHA to be more complex, affecting real users, but indeed effectively intercepting bots.
6. ```Cloudflare``` is a public service, it serves all websites, and its protection rules and risk control strategies are common. Many websites that do not want to be accessed by crawlers, bots, hackers, or heavy traffic will connect to Cloudflare, so Cloudflare has a wealth of risk control strategies.
7. A large number of foreign users are home networks, and Cloudflare judges that their networks are not at risk, so they hardly report any errors.
8. A large number of domestic users in China use various displacement magic techniques (referred to as ```666```). However, many ```666``` IPs have been or are currently included in Cloudflare's ```strong protection rules``` priority watchlist. This situation may not necessarily be caused by the users themselves. It could be the result of previous actions affecting subsequent users, or the frequent triggering of risk controls by many IPs in the same C segment. It is also possible that users themselves are unaware they are using a shared ```666``` IP, which triggers the risk controls. Consequently, Cloudflare identifies a potential risk in their network, leading to error messages and the need to verify the authenticity of the actual users.
9. This is just the tip of the iceberg, and there could be various other underlying reasons.

### Reasons and Solutions for Network Errors Even When Using this Plugin

1. Reason: Refer to [*Regarding the Adjust Interval Feature*](#about-adjust-interval-feature). Solution: Adjust the keep interval moderately.
2. Reason: Refer to [*Why Mass Network Errors Occur*](#about-why-large-scale-network-errors-occur). Solution: Change the IP, data center, internet service provider, and channel of the ```666```; the most optimal configuration for a single ```666```.

### Reasons and Solutions for Error Message 429 - Too Many Requests in 1 Hour. Try Again Later

1. First, there are many types of 429 errors. Confirm if it is not mentioned in [*Regarding Other Errors*](#about-other-errors-causes-and-solutions). If not, consider the following possibilities:
2. Reason: For newly registered users or users who registered with the same phone, OpenAI does not provide free credits. Check the [OpenAI official website usage page](https://platform.OpenAI.com/account/usage) for details. Solution: Register with a different email and phone number.
3. Reason: Credit usage has been exhausted. Check the [OpenAI official website usage page](https://platform.OpenAI.com/account/usage) for details. Solution: Recharge for more credits.
4. Reason: Bug in Cloudflare. Solution: Use a browser's privacy mode or a ChatGPT instance. If the privacy mode works normally, clear all cookies and local storage related to the OpenAI.com domain and subdomains in the regular browsing mode.
5. Reason: It's possible that you are unaware that you are using a shared ```666``` IP. There is a group of "online neighbors with the same IP exit" who constantly make frequent requests for various purposes. Although their traffic is high, they manage to stay below the threshold to avoid triggering the 429 error. However, when you start using this plugin, it drags them down, and they get puzzled about suddenly encountering the 429 error. Solution: Change the IP, data center, internet service provider, and channel of the ```666```; the most optimal configuration for a single ```666```.

### Regarding the Cancel Audit Feature

1. By default, all your conversations are automatically audited by OpenAI's official [moderation](https://platform.OpenAI.com/docs/guides/moderation/overview) system. If OpenAI's moderation system detects excessive violations or violations of the [OpenAI usage policies](https://OpenAI.com/policies/usage-policies) in your conversations, your account is at risk of being restricted or even banned.
2. By **enabling** the "Cancel Audit" feature of this plugin along with your clever choice of words, you can minimize the impact to a great extent.

### Regarding the Adjust Interval Feature

1. The value refers to the time interval for *keep* (keeping the connection alive), measured in *seconds*.
2. A larger time interval means slower keep speed, less impact on the website, and a safer account.
3. A smaller time interval means faster keep speed and less occurrence of network errors.
4. It is recommended to have an interval of *30* seconds or more.
5. The author usually sets it to *150* seconds.

### About the Clone Conversation feature

1. ChatGPT belongs to the AI prompt project.
2. One of the things that prompt engineering does the most is to repeatedly adjust the prompt words until it is found that the robot really understands and the result meets your requirements.
3. One of the most common things you do is to repeatedly adjust the prompt wording before you are satisfied with the results by copying and pasting what you have already posted.
4. After checking ```Clone dialog```, you can click the avatar in front of the dialog you want to re-optimize, and the dialog box will appear immediately.

### About Purify Page Features

1. For regular (non Plus) users, it is often seen that the ChatGPT homepage ```https://chat.OpenAI.com/``` is full of useless prompts.
2. After checking ```Purify page```, you can make the homepage look new, enjoy the gold standard similar to PLUS users, and improve the experience.

### Causes and solutions for other errors

 If the following error message occurs, please refer to the official solution: [OpenAI official document error code](https://OpenAI.com/policies/usage-policies)
 401 - Invalid Authentication
 401 - Incorrect API key provided
 401 - You must be a member of an organization to use the API
 429 - Rate limit reached for requests
 429 - You exceeded your current quota, please check your plan and billing details
 429 - The engine is currently overloaded, please try again later
 500 - The server had an error while processing your request

### About PLUS users will not report errors

- PLUS users are doomed just like ordinary users.

## Sponsor

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
| My cat | <img src="/assets/appreciate_mycat.jpg" width="300"></img> |
| Buymeacoffee | [<img src="/assets/appreciate_buycoffee.png" width="300"></img>](https://www.buymeacoffee.com/xcanwin) |
| Afdian<br>(Support wechat and alipay) | [<img src="/assets/appreciate_afdian.png" width="300"></img>](https://afdian.net/a/xcanwin/plan) |
| Wechat<br>(Sometimes it doesn't work) | <img src="/assets/appreciate_wechat.png" width="300"></img> |
