import { useEffect, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import API from "./services/api";

function App() {

  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);

  const getExpenses = async () => {
    const res = await API.get("/expenses");
    setExpenses(res.data.data);
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

      <ExpenseList
        expenses={expenses}
        getExpenses={getExpenses}
        setEditExpense={setEditExpense}
      />

    </div>
  );
}

export default App;