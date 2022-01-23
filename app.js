const express = require("express");
let app = new express();
const routes = require("./routes");
const path = require("path");

let ejs = require("ejs");
app.engine("html", ejs.__express);
app.set("view engine", "html");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "./static")));
// app.use((request, response, next) => {
//   response.setHeader("Expires", new Date(Date.now() + 1000 * 100));
//   response.setHeader("Cache-Control", "max-age=100000");
//   next();
// });
app.use("/", routes);

app.listen(8083);
