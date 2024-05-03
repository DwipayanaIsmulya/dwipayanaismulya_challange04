const http = require("http");
const fs = require("fs");

const port = 8000;

http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            req.url = "index.html";
            break;
        case "/cars":
            req.url = "cari-mobil.html";
            break;
    }
    let path = "public/" + req.url;
    fs.readFile(path, (err, data) => {
        res.writeHead(200);
        res.end(data)
    })
}).listen(port, 'localhost', () => {
    console.log("Server sudah berjalan di port ", port);
})