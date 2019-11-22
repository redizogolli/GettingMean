const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const locationsListByDistance = (req, res) => {
    Loc
        .find({rating: 3})
        .exec((err, locations) => {
        if (err) {
            return res
            .status(404)
            .json(err);
        }
        res
            .status(200)
            .json(locations);
        });
 };

 const locationsCreate = (req, res) => {
    Loc.create({
            name: req.body.name,
            address: req.body.address,
            facilities: req.body.facilities.split(","),
            coords: [
                parseFloat(req.body.lng),
                parseFloat(req.body.lat)
            ],
            openingTimes:[{
                days: req.body.days2,
                opening: req.body.opening2,
                closing: req.body.closing2,
                closed: req.body.closed2,
            }]
        }, (err, location) => {
        if (err) {
            res.status(400).json(err);
        } 
        else {
            res.status(201).json(location);
        }
    });
};

const locationsReadOne = (req, res) => {
    var locationId =req.params.locationid; // parametri nga url
    Loc
        .findById(locationId)
        .exec((err, location) => {
        if (!location) {
            return res
            .status(404)
            .json({
            "message": "location not found"
            });
        }
        else if (err) {
            return res
            .status(404)
            .json(err);
        }
        res
            .status(200)
            .json(location);
        });
 };

const locationsUpdateOne = (req, res) => {
    res.status(200).json({"status" : "success"});
 };

const locationsDeleteOne = (req, res) => { 
    res.status(200).json({"status" : "success"});
};

module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
    };