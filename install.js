var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Wireless Monitor',
  description: 'Monitors WIFI and LAN status',
  script: require('path').join(__dirname,'wirelessmonitor.js'),
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();