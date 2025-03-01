require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5024;
const MONGO_URI = process.env.MONGO_URI;

console.log("Connecting to MongoDB Atlas...");

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas Connected Successfully");

    // ✅ Start Server Only After DB Connection is Successful
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

// ✅ Root Route to Fix "Cannot GET /" Issue
app.get("/", (req, res) => {
  res.status(200).json({ message: "🚀 API is running successfully!" });
});

// ✅ Example Routes for Authentication & Projects (Modify as Needed)
const authRoutes = require("./routes/authRoutes");  // Ensure this file exists
const projectRoutes = require("./routes/projectRoutes");  // Ensure this file exists

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

// ✅ Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ message: "Internal Server Error" });
});
