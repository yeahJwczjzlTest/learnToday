#!/bin/sh

IP=$(ifconfig eth0|awk -F '[ :]+' 'NR==2 {print $4}')
BKPATH="/backup/$IP"
[ ! -d $BKPATH ] && mkdir /backup/$IP

cd / &&\
tar zcf $BKPATH/www_$(date +%F).tar.gz var/html/www/ &&\
tar zcf $BKPATH/logs_$(date +%F).tar.gz var/log/ &&\
tar zcf $BKPATH/conf_$(date +%F).tar.gz etc/sysconfig/iptables etc/rc.local var/spool/cron/root server/scripts/ &&\
find /backup/ -type f -name "*_$(date +%F).tar.gz"|xargs md5sum > $BKPATH/flags_$(date +%F
).md5

rsync -avz /backup/ rsync_backup@172.16.28.138::backup --password-file=/etc/rsync.password

find /backup/ -type f -name "*.tar.gz" -mtime +7|xargs rm -f
