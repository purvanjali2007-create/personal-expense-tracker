const ExpenseItem = ({
  expense,
  deleteExpense,
  setEditExpense
}) => {

  return (

    <tr>

      <td>₹ {expense.amount}</td>

      <td>{expense.description}</td>

      <td>{expense.category}</td>

      <td>{expense.date.substring(0,10)}</td>

      <td>

        <button

          onClick={()=>setEditExpense(expense)}

        >

          Edit

        </button>

        <button

          onClick={()=>deleteExpense(expense._id)}

        >

          Delete

        </button>

      </td>

    </tr>

  );

};

export default ExpenseItem;