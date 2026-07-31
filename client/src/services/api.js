import axios from "axios";

export default axios.create({
  baseURL: "https://personal-expense-tracker-1.onrender.com/api/expenses"
});