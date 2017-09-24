#!/bin/bash
##
###
#####

useradd -M nginx -s /sbin/nologin &&\
yum install pcre-devel -y &&\
cd /downloads &&\
wget http://mirrors.sohu.com/nginx/nginx-1.12.1.tar.gz &&\
tar xf nginx-1.12.1.tar.gz &&\
cd nginx-1.12.1 &&\
./configure --prefix=/application/nginx-1.12.1 --with-http_ssl_module --with-http_stub_status_module --user=nginx --group=nginx &&\
if [ $? -ne 0 ]; then echo 'compile Error!'; exit -1; fi &&\
make && make install &>> /tmp/insNginx.log &&\
if [ $? -ne 0 ]; then echo 'make or install Error!'; exit -1; fi &&\
echo 'over............!'

