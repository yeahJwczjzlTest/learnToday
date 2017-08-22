#!/bin/sh
sed s#=enforcing#=disabled#g /etc/selinux/config -i
chkconfig --list|grep 3:on|awk '{print $1}'|grep -Ev 'sshd|crond|rsyslog|network|udev-post|postfix|sysstat'|awk '{print "chkconfig "$1" off"}'|bash
echo '>/etc/udev/rules.d/70-persistent-net.rules' >> /etc/rc.local
echo '*/5 * * * * /usr/sbin/ntpdate pool.ntp.org >/dev/null 2>&1' > /var/spool/cron/root 
wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-6.repo
