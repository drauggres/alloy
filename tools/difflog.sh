#!/bin/sh

A=$1
B=$A/../_logs2

diff $A/ios/out.log $B/ios/out.log > $A/../ios.diff
diff $A/android/out.log $B/android/out.log > $A/../android.diff
