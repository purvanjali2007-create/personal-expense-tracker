import { useState, useEffect } from "react";
import API from "../services/api";

const ExpenseForm = ({
  getExpenses,
  editExpense,
  setEditExpense,
}) => {

  const [expense, setExpense] = useState({
    amount: "",
    description: "",
    category: "",
    date: ""
  });

  useEffect(() => {

    if (editExpense) {

      setExpense({
        amount: editExpense.amount,
        description: editExpense.description,
        category: editExpense.category,
        date: editExpense.date.substring(0,10)
      });

    }

  }, [editExpense]);

  const handleChange = (e) => {

    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (editExpense) {

      await API.put(`/${editExpense._id}`, expense);

      setEditExpense(null);

    } else {

      await API.post("/", expense);

    }

    setExpense({
      amount:"",
      description:"",
      category:"",
      date:""
    });

    getExpenses();

  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={expense.amount}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={expense.description}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={expense.category}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="date"
        value={expense.date}
        onChange={handleChange}
        required
      />

      <button type="submit">

        {editExpense ? "Update Expense" : "Add Expense"}

      </button>

    </form>

  );

};

export default ExpenseForm;