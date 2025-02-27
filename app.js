console.log("web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

//MongoDB chaqirish
const db = require("./server").db();
//1: kIRIS Code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 session code
//3: views code
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("something Went wrong ");
    } else {
      res.end("seccessfully addeed");
    }
  });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something Went wrong");
      } else { 
      
        res.render("reja", { items: data });
      }
    }); 
});

module.exports = app;
    