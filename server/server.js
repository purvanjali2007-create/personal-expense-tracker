const express = require("express");
const cors = require("cors");
require("dotenv").config();




const connectDB = require("./config/db");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://personal-expense-tracker-3hire0wkz.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("Expense Tracker API Running...");
});

// Expense Routes
app.use("/api/expenses", expenseRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});