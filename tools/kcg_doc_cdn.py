#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
# 作用：

本脚本用于实现自动替换KeepChatGPT说明文档（README.md）里的图片链接

"""

import os, re

def save(data, outfile):
    if not os.path.exists('test'):
        os.mkdir('test')
    open(outfile, 'wb').write(data.encode())

def main():
    rm = open('README.md', 'rb').read().decode()
    kcg_code = open('KeepChatGPT.user.js', 'rb').read().decode()

    cdn_pre = 'https://hub.gitmirror.com/https://raw.githubusercontent.com/xcanwin/KeepChatGPT/main'
    version = re.findall(r'// @version\s+(\S*?)\s', kcg_code)[0]
    # version = '24.6'

    rm_new = re.sub(r'src="(/assets/.*?)"', r'src="{}\1?v={}"'.format(cdn_pre, version), rm)
    print(rm_new)
    save(rm_new, 'test/README_CDN.md')

main()
