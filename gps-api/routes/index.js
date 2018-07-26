var express = require('express');
var VehicleModel = require('./models/vehicle');
var DeviceModel = require('./models/device');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res
    .status(200)
    .send('OK');
});

router.get('/vehicles', function (req, res, next) {
  const vehicles = new VehicleModel();
  vehicles
    .findAll()
    .then(result => {
      res
        .status(200)
        .json(result);
    }).catch(error => {
      res
        .status(500)
        .json(error);
    })
});

router.get('/vehicles/:id', function (req, res, next) {
  const vehicles = new VehicleModel();
  vehicles
    .findOne(req.params.id)
    .then(result => {
      res
        .status(200)
        .json(result);
    }).catch(error => {
      res
        .status(500)
        .json(error);
    })
});


router.get('/devices', function(req, res, next){
  const devices = new DeviceModel();
  devices
    .findAll()
    .then( result => {
      res 
        .status(200)
        .json(result);
    }).catch (error => {
      res
        .status(500)
        .json(error);

    })
})

module.exports = router;
