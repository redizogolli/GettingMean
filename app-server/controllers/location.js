/* GET homepage */
const home = (req, res) => {
    res.render('home', { title: 'HomePage' });
    };
/* GET locationDetails */
const details = (req, res) => {
    res.render('details', { title: 'Details' });
    };
    /* GET location reviews */
const reviews = (req, res) => {
    res.render('reviews', { title: 'Reviews' });
    };

// exporting module
module.exports = {
        home,
        details,
        reviews
        };