const Expense = require("../models/Expense");

// Add Expense
const addExpense = async (req, res) => {
    try {
        const { amount, description, category, date } = req.body;

        if (!amount || !description || !category || !date) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const expense = await Expense.create({
            amount,
            description,
            category,
            date
        });

        res.status(201).json({
            success: true,
            message: "Expense Added Successfully",
            data: expense
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get All Expenses
const getExpenses = async (req, res) => {

    try {

        const expenses = await Expense.find().sort({
            date: -1
        });

        res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Expense
const deleteExpense = async (req, res) => {

    try {

        const expense = await Expense.findById(req.params.id);

        if (!expense) {
            return res.status(404).json({
                success: false,
                message: "Expense not found"
            });
        }

        await expense.deleteOne();

        res.status(200).json({
            success: true,
            message: "Expense Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
// Update Expense
const updateExpense = async (req, res) => {
    try {
        const { amount, description, category, date } = req.body;

        const expense = await Expense.findByIdAndUpdate(
            req.params.id,
            {
                amount,
                description,
                category,
                date
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!expense) {
            return res.status(404).json({
                success: false,
                message: "Expense not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Expense Updated Successfully",
            data: expense
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    addExpense,
    getExpenses,
    deleteExpense,
    updateExpense
};