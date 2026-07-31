import axios from "axios";

const api = axios.create({
  baseURL: "https://personal-expense-tracker-1.onrender.com/api/expenses"
});

export default api;