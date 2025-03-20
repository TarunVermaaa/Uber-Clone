const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.services");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const isCaptainAlreadyRegistered = await captainModel.findOne({ email });

  if (isCaptainAlreadyRegistered) {
    return res
      .status(400)
      .json({ errors: [{ msg: "Email already registered" }] });
  }

  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    vehicleType: vehicle.vehicleType,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
  });

  const token = captain.generateAuthToken();

  res.status(201).json({ captain, token });
};

module.exports.loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select("+password");

  if (!captain) {
    return res
      .status(401)
      .json({ errors: [{ msg: "Invalid email or password" }] });
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return res
      .status(401)
      .json({ errors: [{ msg: "Invalid email or password" }] });
  }

  const token = captain.generateAuthToken();

  res.cookie("token", token);
  res.status(200).json({ captain, token });
};

module.exports.getCaptainProfile = (req, res) => {
  res.status(200).json({ captain: req.captain });
};

module.exports.logoutCaptain = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await blacklistTokenModel.create({token: token})



  res.clearCookie("token");
  res.status(200).json({ msg: "Logged out successfully" });
}