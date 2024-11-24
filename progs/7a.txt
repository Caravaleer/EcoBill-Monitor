#!/bin/bash
echo "Enter login name of a user"
read  name
grep $name /etc/passwd
if [ $? -ne 0 ]
then
echo "$name is not a user"
exit
fi
hrnow=$(date|cut -c 12-13)
echo "Current hrs:" $hrnow
minnow=$(date|cut -c 15-16)
echo "Current min:" $minnow
hrs=$(w $name|cut -c 14-15)
uptime=$(w $name|cut -c 17-18)
echo "Mr/Ms:$name is working from:$hrs hours:$uptime mins"
