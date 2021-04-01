#!/usr/bin/env sh

# 执行打包命令
yarn build

# 执行上传到服务器
expect -f shell/upload.sh
