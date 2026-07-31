import axios from "axios";

const API = axios.create({
  baseURL: "https://personal-expense-tracker-1.onrender.com/api"
});

/* const API = axios.create({
  baseURL: "http://localhost:5000/api" https://personal-expense-tracker-1.onrender.com/api
});
 */
export default API;