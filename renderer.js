// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

 // Required code for running external cli commands
 document.querySelector('#button1').addEventListener('click', init)
 document.querySelector('#button2').addEventListener('click', backup)
 document.querySelector('#restore').addEventListener('click', restore)
 document.querySelector('#run').addEventListener('click', run)

 var exec = require('child_process').exec
 function Callback(err, stdout, stderr) {
     if (err) {
         console.log(`exec error: ${err}`);
         return;
     }else{
         console.log(`${stdout}`);
     }
 }
 
 // This will run a basic cil command, in this case restic (assuming it is in PATH, for now, commented out)
 function init() {
    var SourceFolder = document.getElementById("SourceFolder").value;
    var BackupLocation = document.getElementById("BackupLocation").value;
    exec('restic init --repo ' + '"' + BackupLocation + '"' + ' --password-file=' + '"' + SourceFolder + "/password.txt" + '"', Callback);
}

// Backup command that will take the given path and use the password text file to back up that path
 function backup() {
    var SourceFolder = document.getElementById("SourceFolder").value;
    var BackupLocation = document.getElementById("BackupLocation").value;
    exec('restic -r ' + '"' + BackupLocation + '"' + ' backup ' + '"' + SourceFolder + '"' + ' --password-file=' + '"' + SourceFolder + "/password.txt" + '"' + " --verbose", Callback);
 }
 
 //Will restore the lastest backup to the given path
 function restore() {
    var SourceFolder = document.getElementById("SourceFolder").value;
    var BackupLocation = document.getElementById("BackupLocation").value;
    exec('restic -r ' + '"' + BackupLocation + '"' + ' restore latest --target ' + '"' + SourceFolder + '"' + " --password-file=" + '"' + SourceFolder + "/password.txt" + '"' + " --verbose", Callback);
 }

 //Will allow you to run any restic command
 function run() {
    var input = document.getElementById("SourceFolder").value;
    exec(input, Callback);
 }
// custom console window command that allow output of console to a div
 window.console = {
    log: function(str){
        // removes any console loggin in myLog div (basically resetting it)
        var div = document.getElementById('myLog');
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("myLog").appendChild(node);
    }
  }