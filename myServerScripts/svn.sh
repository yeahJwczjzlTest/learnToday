#!/bin/sh
pkill svnserve
pkill svnserve
mkdir /application/svndata /application/svnpasswd &&\
svnserve -d -r /application/svndata/ &&\
svnadmin create /application/svndata/mysvnlib &&\
cd /application/svndata/mysvnlib/conf/ &&\
cp authz passwd /application/svnpasswd/ &&\
rm -f svnserve.conf &&\
cat >>svnserve.conf<<eof
[general]
anon-access = none
auth-access = write
password-db = /application/svnpasswd/passwd
authz-db = /application/svnpasswd/authz
realm = My First Repository
[sasl]
eof
chmod 700 /application/svnpasswd/* &&\
echo 'jwczjzl = zhangjie' >> /application/svnpasswd/passwd &&\
cd /application/svnpasswd/ &&\
cat >>authz<<eof
#-----------------------初始化权限,根据需求更改--------------------------
[/]
jwczjzl = rw
#-----------------------初始化权限,根据需求更改--------------------------
eof
echo 'ok~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
echo '现在可以编辑 /application/svnpasswd 里面的 passwd(账户,密码) 和 authz(权限) 了'
