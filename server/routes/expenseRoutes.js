const express = require("express");

const router = express.Router();

const {
  addExpense,
  getExpenses,
  deleteExpense,
  updateExpense,
} = require("../controllers/expenseController");

router.get("/", getExpenses);
router.post("/", addExpense);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);

module.exports = router;