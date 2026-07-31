const express = require("express");

const router = express.Router();

const {
    addExpense,
    getExpenses,
    deleteExpense,
    updateExpense
} = require("../controllers/expenseController");

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Route Working"
    });
});
router.post("/", addExpense);

router.get("/", getExpenses);
router.put("/:id", updateExpense)
router.delete("/:id", deleteExpense);

module.exports = router;