// const express = require("express");
// const User = require("../models/User");
// const authMiddleware = require("../middleware/authMiddleware");
// const router = express.Router();

// // Get all users (protected)
// router.get("/", authMiddleware, async (req, res) => {
//     const users = await User.find();
//     res.json(users);
// });

// // Get user by ID (protected)
// router.get("/:id", authMiddleware, async (req, res) => {
//     const user = await User.findById(req.params.id);
//     res.json(user);
// });

// // Update user (protected)
// router.put("/:id", authMiddleware, async (req, res) => {
//     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedUser);
// });

// // Delete user (protected)
// router.delete("/:id", authMiddleware, async (req, res) => {
//     await User.findByIdAndDelete(req.params.id);
//     res.json({ message: "User Deleted" });
// });

// module.exports = router;
