const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

// ======================
// MongoDB Connection
// ======================
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mydb";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("MongoDB Error ❌:", err.message));

// ======================
// Schema
// ======================
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model("User", userSchema);

// ======================
// ROUTES
// ======================

// CREATE USER
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET ALL USERS
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// UPDATE USER
app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(user);
});

// DELETE USER
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: "User deleted" });
});

// HEALTH
app.get("/", (req, res) => {
  res.send("CRUD App is running 🚀");
});

// ======================
app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
