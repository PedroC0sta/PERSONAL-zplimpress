var Service = require('node-windows').Service;

var svc = new Service({
  name: "zplimpress",
  description: "Serviço de impressão",
  script: "E:\\zplimpress\\src\\index.js"
})

svc.on('install',function(){
  svc.start();
});

svc.install();