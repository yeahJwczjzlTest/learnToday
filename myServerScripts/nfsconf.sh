#!/bin/sh

mkdir /data

yum install nfs-utils rpcbind -y

cat >> /etc/sysctl.conf << eof
net.core.wmem_default = 8388608
net.core.rmem_default = 8388608
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
eof

sysctl -p

echo '/data *(rw,sync,all_squash)' > /etc/exports

chown -R nfsnobody /data

chkconfig nfs --level 3 on
chkconfig --add rpcbind
# showmount -e localhost
# rpcinfo -p localhost
