/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Express' });
    };

    // exporting module
module.exports = {
        index
        };