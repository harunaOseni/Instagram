const express = require("express");
const {
  loginUser,
  signupUser,
  logoutUser,
  followUser,
  updateProfile,
  updatedPassword,
  forgotPassword,
  resetPassword,
  getUserDetails,
  getAccountDetails,
  getAllUsers,
  searchUsers,
  getUserDetailsById,
  deleteProfile,
} = require("../controllers/userController");
const path = require("path");
const multer = require("multer");
const { isAuthenticated } = require("../middlewares/auth");

const router = express();

const avatarStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../../public/uploads/profiles"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const avatarUpload = multer({
  storage: avatarStorage,
  limits: { fileSize: 1000000 * 2 },
});

router.route("/signup").post(avatarUpload.single("avatar"), signupUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);

router
  .route("/me")
  .get(isAuthenticated, getAccountDetails)
  .delete(isAuthenticated, deleteProfile);

router.route("/user/:username").get(isAuthenticated, getUserDetails);
router.route("/userdetails/:id").get(isAuthenticated, getUserDetailsById);

router.route("/users/suggested").get(isAuthenticated, getAllUsers);
router.route("/users").get(isAuthenticated, searchUsers);

router.route("/follow/:id").put(isAuthenticated, followUser);

router
  .route("/update/profile")
  .put(isAuthenticated, avatarUpload.single("avatar"), updateProfile);

router.route("/update/password").put(isAuthenticated, updatedPassword);

router.route("password/forgot").post(forgotPassword);
router.route("password/reset/:token").put(resetPassword);

module.exports = router;
