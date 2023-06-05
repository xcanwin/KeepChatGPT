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
    rm = open('README.md', 'r').read()
    kcg_code = open('KeepChatGPT.user.js', 'r').read()

    cdn_pre = 'https://raw.gitmirror.com/xcanwin/KeepChatGPT/main'
    version = re.findall(r'// @version\s+(\S*?)\n', kcg_code)[0]
    # version = '1.0'

    rm_new = re.sub(r'src="(.*?)"', r'src="{}\1?v={}"'.format(cdn_pre, version), rm)
    print(rm_new)
    save(rm_new, 'test/README_CDN.md')

main()
