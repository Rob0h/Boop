var fs = require('fs');
var http = require('http');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

module.exports = {
  upload: function(request, response, next) {
    fs.readFile(request.files.file.path, function(err, data) {
    var newPath = __dirname + "/public/img/xspectra/customlogo.png";
    fs.writeFile(newPath, data, function (err) {
      console.log("Finished writing file..." + err);
      response.redirect("back");
    });

  });
}
}