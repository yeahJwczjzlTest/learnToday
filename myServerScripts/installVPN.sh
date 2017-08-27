#!/bin/sh
cd /downloads
tar xf lzo-2.06.tar.gz 
tar xf openvpn-2.2.2.tar.gz
cd lzo-2.06
./configure && make && make install
cd ..
cd openvpn-2.2.2
yum install openssl-devel -y
./configure --with-lzo-headers=/usr/local/include/ --with-lzo-lib=/usr/local/lib/ && make && make install
echo $?
mkdir /etc/openvpn 
cd /downloads/openvpn-2.2.2/sample-config-files/
cp client.conf server.conf /etc/openvpn/
echo 'ok!'
