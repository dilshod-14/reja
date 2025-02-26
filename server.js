console.log("web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");

//1: kIRIS Code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 session code
//3: views code
app.set("views", "views");
app.set("view engine", "ejs");

//4: routing code
app.post("/create-item", (req, res) => {
  //TODO; code with db here    
});

app.get("/", function (req, res) {
  res.render("reja");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `The server is runing successfully on port: ${PORT}, http://localhost:${PORT}`
  );
});
