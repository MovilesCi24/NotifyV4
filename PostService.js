let http = require('http');
//let log = require("@ci24/ci-logmodule");

var PostService = function() {
let options = {
        hostname: '192.168.14.164',
        port: 5005,
        path: '/EventController',
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Cache-Control': 'no-cache'
        }
    };
  PostService.prototype.SendEvent=function(EventData,cb){
      let body = JSON.stringify(EventData);
      let req = http.request(options, function(res) {
          let data = "";
          let status = res.statusCode;

          //log.write(`Status: ${res.statusCode}`);
          //log.write(`headers: ${JSON.stringify(res.headers)}`);

          res.setEncoding('utf8');

          res.on('data', function (chunk) {
              data = data + chunk;
          });

          res.on('end', function () {
              try{
                  let Datos = JSON.parse(data);
                  if(status === 200)
                  {
                      cb(null,Datos);
 
                  }
                  else
                  {
                      cb(status);
                  }
              }
              catch(err){
                  //log.error(`Error to received post:${err}`);
                  cb(status);
              }

          });
      });

      req.on('error', function(err) {
          //log.error(`Error to send post:${err}`);
          cb(err)
      });

      req.setTimeout(3000,()=>{
          cb("Error Timeout")
      });
      //log.write("Send body..." + JSON.stringify(body));
      req.write(body);
      req.end();
    };
};

// node.js module export
module.exports = function(){
    return new PostService();
};


