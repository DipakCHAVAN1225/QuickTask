require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());

// adjust origin to your frontend dev url
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// routes
app.use("/api/auth", require("./routes/auth"));

app.use("/api/providers", require("./routes/providers"));

// health
app.get("/api/health", (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
