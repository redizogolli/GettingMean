/* GET about */
const about = (req, res) => {
    res.render('about', { title: 'About Us' });
    };

// export 
module.exports = {
    about
}