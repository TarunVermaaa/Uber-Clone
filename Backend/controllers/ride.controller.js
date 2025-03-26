const rideService = require("../services/ride.services");
const { validationResult } = require("express-validator");

exports.createRide = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userId, pickup, destination, vehicleType } = req.body;

  try {
    const ride = await rideService.createRide({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });
    res.status(201).json(ride);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
