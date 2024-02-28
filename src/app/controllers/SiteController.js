const Course = require("../models/Coures");
class SiteController {
    home(req, res) {
        Course.find({})
            .then(courses => res.json(courses))
            .catch((err) => {
                console.error(err);
                res.status(400).json({ error: "Error retrieving courses." });
            });
    }
    // res.render("home");
    search(req, res) {
        res.render("search");
    }
}
module.exports = new SiteController();
