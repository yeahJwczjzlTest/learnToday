#!/bin/sh
inotify=/usr/local/inotify-tools/bin/inotifywait
$inotify -mrq --format '%w%f' -e create,delete,close_write /data \
|while read file
do
  cd / &&\
  rsync -az /data --delete rsync_backup@172.16.28.138::backup \
  --password-file=/etc/rsync.password
done

