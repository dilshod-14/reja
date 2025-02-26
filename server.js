const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://Devit:5Go7gu3RzcrFqrS5@cluster0.0f1pv.mongodb.net/";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDb");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is runing successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
  