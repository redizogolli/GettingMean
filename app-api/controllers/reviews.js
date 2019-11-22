const reviewsReadOne = (req, res) => {
    res.status(200).json({"status" : "success"});
 };

const reviewsList = (req, res) => { 
    res.status(200).json({"status" : "success"});
};

module.exports = {
    reviewsReadOne,
    reviewsList
    };