import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";
import API from "./services/api";
import "./App.css";

function App() {

  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);

  const getExpenses = async () => {
    try {
      const res = await API.get("/expenses");
      setExpenses(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getExpenses();
  }, []);

  const deleteExpense = async (id) => {
    await API.delete(`/expenses/${id}`);
    getExpenses();
  };

  return (
    <div className="container">

      <h1>Personal Expense Tracker</h1>

      <ExpenseForm
        getExpenses={getExpenses}
        editExpense={editExpense}
        setEditExpense={setEditExpense}
      />

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