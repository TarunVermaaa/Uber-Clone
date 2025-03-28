const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters long"),
    body("vehicle.plate")
      .isLength({ min: 4 })
      .withMessage("Plate must be at least 4 characters long"),
    body("vehicle.capacity")
      .isInt({ min: 1, max: 5 })
      .withMessage("Capacity must be between 1 and 5"),
    body("vehicle.vehicleType")
      .isIn(["car", "bicycle", "auto"])
      .withMessage("Vehicle type must be car, bicycle or auto"),
  ],
  captainController.registerCaptain
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  captainController.loginCaptain
);

router.get(
 '/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout' , authMiddleware.authCaptain, captainController.logoutCaptain);
module.exports = router;
