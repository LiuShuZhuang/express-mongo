const express = require("express");
let app = new express();
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

app.listen(8083);
