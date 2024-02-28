const newRouter = require("./new");
const newSite = require("./site");
const route = (app) => {
    app.use("/new", newRouter);
    app.use("/", newSite);
};
module.exports = route;
