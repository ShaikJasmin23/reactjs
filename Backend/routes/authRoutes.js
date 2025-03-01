const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ Health Check Route
router.get("/", (req, res) => {
    res.json({ message: "✅ Auth API is working!" });
});

// ✅ Register Route
router.post("/register", registerUser);

// ✅ Login Route
router.post("/login", loginUser);

// ✅ Protected Route (Only accessible with a valid token)
router.get("/protected", authMiddleware, (req, res) => {
    res.json({ message: "🔒 This is a protected route!", user: req.user });
});

module.exports = router;
