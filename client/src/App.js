import { useEffect, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import API from "./services/api";
import TotalExpense from "./components/TotalExpense";

function App() {

  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);

  const getExpenses = async () => {
    const res = await API.get("/expenses");
    console.log(res.data); // Check this
    setExpenses(res.data.data);
  };

const deleteExpense = async (id) => {
  try {
    const res = await API.delete(`/expenses/${id}`);

    setExpenses(expenses.filter((expense) => expense._id !== id));
  } catch (error) {
    console.error(error);
  }
};
  
  useEffect(() => {
    getExpenses();
  }, []);

  const total = expenses.reduce((sum, item) => sum + Number(item.amount), 0);

  return (
    <div className="container">

      <h1>Personal Expense Tracker</h1>

      <ExpenseForm
        getExpenses={getExpenses}
        editExpense={editExpense}
        setEditExpense={setEditExpense}
      />

      <h2>Total : ₹ {total}</h2>
      <TotalExpense expenses={expenses} />

      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
        setEditExpense={setEditExpense}
      />

    </div>
  );
}

export default App;