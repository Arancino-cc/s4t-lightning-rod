#!/bin/ash


echo "Moving /var/ folder..."
rm /var
mkdir /var
mv /tmp/etc /var
mv /tmp/lib /var
mv /tmp/log /var
mv /tmp/run /var
#cd /
#mkdir var
#cp -a /tmp/etc/ /var/
#cp -a /tmp/lib/ /var/
#cp -a /tmp/log/ /var/
#cp -a /tmp/run/ /var/
echo " - /var/ folder moved."



