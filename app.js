var http = require("http");
var fs = require("fs");

function serveStaticFile(res, path, contentType, responseCode) {
  if (!responseCode) {
    responseCode = 200;
  }
  fs.readFile(__dirname + path, function (err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("505 - Internal Error");
    } else {
      res.writeHead(responseCode, { "Content-Type": contentType });
      res.end(data);
    }
  });
}
http
  .createServer(function (req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch (path) {
      case "":
        serveStaticFile(res, "/index.html", "text/html");
        break;
      case "/about":
        serveStaticFile(res, "/about.html", "text/html");
        break;
      case "/img/gallery/graduation.jpg":
        serveStaticFile(res, "/img/gallery/graduation.jpg", "image/jpg");
        break;
      case "/img/gallery/study.jpg":
        serveStaticFile(res, "/img/gallery/study.jpg", "image/jpg");
        break;
      case "/img/welcome.jpg":
        serveStaticFile(res, "/img/welcome.jpg", "image/jpg");
        break;
      case "/img/cry.jpg":
        serveStaticFile(res, "/img/cry.jpg", "image/jpg");
        break;
      case "/img/about.jpg":
        serveStaticFile(res, "/img/about.jpg", "image/jpg");
        break;
      case "/style.css":
        serveStaticFile(res, "/style.css", "text/css");
        break;
      case "/script.js":
        serveStaticFile(res, "/script.js", "text/js");
        break;
      case "/memes":
        serveStaticFile(res, "/video/students/memes.mp4", "MPEG-4"); //it plays only in Firefox browser, in other browser it will download the file
        break;
      default:
        serveStaticFile(res, "/error.html", "text/html");
        break;
    }
  })
  .listen(3000);

// http
//   .createServer(function (req, res) {
//     if (req.url === "/") {
//       fs.readFile("./index.html", "UTF-8", function (err, html) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(html);
//       });
//     } else if (req.url === "/about") {
//       fs.readFile("./about.html", "UTF-8", function (err, html) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(html);
//       });
//     } else if (req.url === "/img/gallery/graduation.jpg") {
//       fs.readFile(
//         "./img/gallery/graduation.jpg",
//         "UTF-8",
//         function (err, html) {
//           res.writeHead(200, { "Content-Type": "text/html" });
//           res.end(html);
//         }
//       );
//     } else if (req.url.match("/img/gallery/study.jpg")) {
//       var fileStream = fs.createReadStream("./img/gallery/study.jpg");
//       res.writeHead(200, { "Content-Type": "text/jpg" });
//       fileStream.pipe(res);
//     } else if (req.url.match(".css$")) {
//       var fileStream = fs.createReadStream("./style.css", "UTF-8");
//       res.writeHead(200, { "Content-Type": "text/css" });
//       fileStream.pipe(res);
//     } else if (req.url.match("img/welcome.jpg")) {
//       var fileStream = fs.createReadStream("./img/welcome.jpg");
//       res.writeHead(200, { "Content-Type": "text/jpg" });
//       fileStream.pipe(res);
//     } else if (req.url.match("img/cry.jpg")) {
//       var fileStream = fs.createReadStream("./img/cry.jpg");
//       res.writeHead(200, { "Content-Type": "text/jpg" });
//       fileStream.pipe(res);
//     } else if (req.url.match("img/about.jpg")) {
//       var fileStream = fs.createReadStream("./img/about.jpg");
//       res.writeHead(200, { "Content-Type": "text/jpg" });
//       fileStream.pipe(res);
//     } else {
//       fs.readFile("./error.html", "UTF-8", function (err, html) {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         var fileStream = fs.createReadStream("./img/cry.jpg");
//         fileStream.pipe(res);
//         res.end(html);
//       });
//     }
//   })
//   .listen(3000);
