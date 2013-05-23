# wireless-monitor
  After running my Dell laptop for years, I finally got tired of disabling my wireless adapter everytime my LAN was connected.  For some reason,
  it always takes precedence, and for me, wired takes precedence over wireless.
  
# Overview
  After my friend developed [node-windows](http://github.com/coreybutler/node-windows), I conferred with him my dilemma, and we decided it might be 
  a good pet project to develop a background service that monitors my network adapters.
  
## Prerequisite
  This program uses node-windows.  And because this program uses index numbers of network adapters, the user should probably run from the command prompt (assuming windows 7)
  
```
wmic nic get name, index
```

  This line will return a screen with a list of network interface connectors and an index number.  In my case, I took note of the wireless adapter
  in question (23     Intel(R) Centrino(R) Wireless-N 1030).  Once you have this index number, you should be able to edit the wirelessmonitor.js file
  to suit your needs.
  
### What Happens
  The program checks if your wifi and lan is connected (20 second intervals).  If both are connected, the wifi is disabled.  If the LAN is disabled, the 
  wifi is enabled.  Problem solved (for me, at least).  Plus I got to (very basically) learn how to use node-windows (which is totally badass).
