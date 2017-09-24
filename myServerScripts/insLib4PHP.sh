#!/bin/bash
#

yum install \
zlib-devel \
libxml2-devel \
libjpeg-devel \
libxslt* \
freetype-devel \
libpng-devel \
gd-devel \
libcurl-devel \
libmcrypt-devel \
mhash-devel -y &&\
wget https://ftp.gnu.org/pub/gnu/libiconv/libiconv-1.15.tar.gz &&\
tar xf libiconv-1.15.tar.gz &&\
cd libiconv-1.15 &&\
./configure --prefix=/usr/local/libiconv &&\
make && make install &&\
echo $? && echo 'ooooooooook!!' &&\
cd .. &&\
echo $? &&\
rm -rf libiconv-* &&\
echo $?
