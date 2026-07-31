import axios from "axios";

const api = axios.create({
 baseURL: "https://personal-expense-tracker-ggvp.onrender.com/api"
});

export default api;
