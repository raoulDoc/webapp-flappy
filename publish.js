var exec = require('child_process').exec;
function printer(error, stdout, stderr) {
  if(error){
    console.error('exec error: ' + error);
  }
  console.log(stdout);
  console.warn(stderr);
}

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}

exec("git add .", printer);
exec("git commit -a -m \"latest update \"" + Date.now(), printer);
console.log("test");
exec("git push origin master:gh-pages --force", printer);
