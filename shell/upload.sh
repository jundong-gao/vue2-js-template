#!/usr/bin/upload sh

# 开启新的进程
spawn scp -r ../dist/. root@xxx:/path

# 判断上一个执行命令的返回值 是否有password关键字
expect "*password:"


# 自动输入输入密码
send "密码\r"


expect "*#"
