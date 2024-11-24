#!/bin/bash
h=$(date "+%H")
if [ $h -gt 6 -a $h -le 12 ]
then
echo Good Morning Mr/Ms: $LOGNAME
elif [ $h -gt 12 -a $h -le 16 ]
then
echo Good Afternoon Mr/Ms: $LOGNAME
elif [ $h -gt 16 -a $h -le 20 ]
then
echo Good Evening Mr/Ms: $LOGNAME
else
echo Good Night Mr/Ms: $LOGNAME
fi
