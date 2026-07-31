import API from "../services/api";

const ExpenseList = ({ expenses, getExpenses, setEditExpense }) => {

  const deleteExpense = async (id) => {

    await API.delete(`/expenses/${id}`);

    getExpenses();

  };

  return (

    <table>

      <thead>

        <tr>

          <th>Amount</th>
          <th>Description</th>
          <th>Category</th>
          <th>Date</th>
          <th>Action</th>

        </tr>

      </thead>

      <tbody>

        {expenses.map((item) => (

          <tr key={item._id}>

            <td>₹ {item.amount}</td>
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td>{item.date.substring(0,10)}</td>

            <td>

              <button onClick={() => setEditExpense(item)}>
                Edit
              </button>

              <button
                onClick={() => deleteExpense(item._id)}
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );

};

export default ExpenseList;