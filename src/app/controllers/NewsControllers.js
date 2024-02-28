class NewsController {
    index(req, res) {
        res.render("new");
    }
    show(req, res) {
        res.send("ALO");
    }
}
module.exports = new NewsController();
