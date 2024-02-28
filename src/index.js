const express = require("express");
// Hiển thị log http ở terminal
const morgan = require("morgan");
// cấu trúc thư mục
const path = require("path");
const engine = require("express-handlebars");
const app = express();
const port = 3000;

const NewsController = require("./app/controllers/NewsControllers");
const rote = require("./routes");

const db = require("./config/db/index");
db.connect();

// HTTP log
app.use(morgan("combined"));

// Cấu trúc thư mục
app.engine("hbs", engine.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

rote(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
