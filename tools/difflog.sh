#!/bin/sh

A="test/apps/typescript/$1/_logs_typescript"
B="test/apps/testing/$1/_logs_feature"

if [ -e $A/ios/out.log -a -f $B/ios/out.log ]; then
  diff $A/ios/out.log $B/ios/out.log > $A/../ios.diff
else
  echo "skip $1 ios"
fi

if [ -e $A/android/out.log -a -f $B/android/out.log ]; then
  diff $A/android/out.log $B/android/out.log > $A/../android.diff
else
  echo "skip $1 android"
fi
