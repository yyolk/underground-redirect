
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http');

var app = express();


var keenIO = require('keen.io');

// Configure instance. Only projectId and writeKey are required to send data.
var keen = keenIO.configure({
    projectId: process.env['KEEN_PROJECT_ID'],
    writeKey: process.env['KEEN_WRITE_KEY']
});




// all environments
app.set('port', process.env.PORT || 3000);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('*', function(req, res){
  res.redirect('https://drive.google.com/folderview?id=0B8IN6XOKkwRTSURsLTB4WGQxTFk&usp=sharing');
  keen.addEvent("applaunch", {"count": 1}, function(err, res) {
    if(err){
      consoloe.log("keen error");
    } else {
      console.log("keen success");
    }
});
});
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
