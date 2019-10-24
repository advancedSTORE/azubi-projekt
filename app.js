const path = require("path");

//Essenz
const express = require("express");

const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

//Essenz
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const newsRoutes = require("./routes/news");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(newsRoutes);
app.use(errorController.get404);

//Essenz
app.listen(3000);
