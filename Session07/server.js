const http = require("http"),
  url = require("url"),
  fs = require("fs"),
  io = require("socket.io");

const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');
const Order = require('./models/Order');

const connectionString = 'mongodb+srv://lorran:BCDV1007@cluster0-lyl06.gcp.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(
    () => console.log('Mongoose connected successfuly!'),
    error => console.log(`Mongoose could not connect to the database: ${error}`)
  );

const server = http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;
  switch (path) {
    case "/":
      fs.readFile(__dirname + "/index.html", function (err, data) {
        if (err) return send404(res);
        res.writeHead(200, {
          "Content-Type": path == "json.js" ? "text/javascript" : "text/html"
        });
        res.write(data, "utf8");
        res.end();
      });
      break;

    default:
      send404(res);
  }
});
const send404 = function (res) {
  res.writeHead(404);
  res.write("404");
  res.end();
};

const PORT = 8080;
server.listen(PORT, () => console.log(`server started on localhost:${PORT}`));

// socket.io, I choose you
const ioServer = io.listen(server);

// socket.io setup and manager
ioServer.on("connection", function (socket) {
  // now we have a client object!
  console.log("Connection accepted.");

  // event listeners
  socket.on("message", function (message) {
    console.log(`Recieved message: ${message} - from client`);
    socket.emit("msgreceived");
  });

  socket.on("disconnect", function () {
    console.log("Disconnected...");
  });

  socket.on("get-restaurants", () => {
    console.log("server - get-restarants called");

    Restaurant.find(
      {
        $and: [
          {
            city: 'Queens',
            cuisine: 'Delicatessen'
          }
        ]
      },
      (err, doc) => {
        if (err) console.log(`Error occurend on Restaurant.find(): ${err}`);
        else {
          console.log(`Restaurant.find() returned documents: ${doc}`);

          const data = doc.map(x => {
            return {
              name: x.name,
              cuisine: x.cuisine
            }
          });
          socket.emit("restaurants-data", data);
        }
      });
  });

  socket.on("get-orders", () => {
    console.log("server - get-orders called");

    Order.find((err, doc) => {
      if (err) console.log(`Error occurend on Order.find(): ${err}`);
      else {
        console.log(`Order.find() returned documents: ${doc}`);

        const data = doc.map(x => {
          return {
            item: x.item,
            customer: x.customer_name
          }
        });
        socket.emit("order-data", data);
      }
    });
  });

  socket.on("add-order", () => {
    console.log("server - get-orders called");

    Order.create(
      {
        item: 'New Item',
        customer_name: 'New Customer'
      },
      (err, order) => {
        if (err) console.log(`Error occurend on Order.create(): ${err}`);
        else {
          console.log(`Order.create() returned documents: ${order}`);

          // const data = doc.map(x => {
          //   return JSON.stringify({
          //     item: x.item,
          //     customer: x.customer_name
          //   })
          // });
          socket.emit("order-data-added", order);
        }
      });
  });
});
