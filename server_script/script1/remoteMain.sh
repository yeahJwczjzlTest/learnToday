#!/bin/sh
. /etc/init.d/functions
for i in 172.16.28.138 172.16.28.135 172.16.28.136
do
  expect /server/scripts/remoteExpect.exp /etc/hosts $i /tmp/ &>/dev/null
  if [ $? -eq 0 ]
  then
    action "$i trans ok" /bin/true
  else
    acton "$i trans Not ok" /bin/false
  fi
done

