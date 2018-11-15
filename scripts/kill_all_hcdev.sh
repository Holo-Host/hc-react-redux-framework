#!/bin/bash
# Holochain 3 identity scenario exit script

echo "Killing all instances of hcdev"

ps -ef | grep hcdev | grep -v grep | awk '{print $2}' | xargs kill