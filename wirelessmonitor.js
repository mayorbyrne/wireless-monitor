var exec = require('child_process').exec;
var os = require('os');
var child;

var check = setInterval(function(){
var interfaces = os.networkInterfaces();


var wifi = false, lan = false;

for (var x in interfaces){
	if(x == 'Local Area Connection')
      lan = true;
   if (x=='Wireless Network Connection')
      wifi = true;
}

if (lan && wifi){
		child = exec('C:\\Windows\\System32\\wbem\\WMIC.exe path win32_networkadapter where index=23 call disable',
 			 function (error, stdout, stderr) {

});
}
else if(lan == false){
		child = exec('C:\\Windows\\System32\\wbem\\WMIC.exe path win32_networkadapter where index=23 call enable',
 			 function (error, stdout, stderr) {

});
}
}, 20000)

