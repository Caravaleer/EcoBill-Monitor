#!/bin/bash
echo Enter filename
read fname
echo Enter starting line number
read s
echo Enter ending line number
read e
sed -n $s,$e\p $fname|cat >newfile
cat newfile
