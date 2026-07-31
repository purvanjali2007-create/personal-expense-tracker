import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({
  expenses,
  deleteExpense,
  setEditExpense
}) => {

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

        {expenses.length===0 ?

        <tr>

          <td colSpan="5">

            No Expense Found

          </td>

        </tr>

        :

        expenses.map((expense)=>(

          <ExpenseItem

            key={expense._id}

            expense={expense}

            deleteExpense={deleteExpense}

            setEditExpense={setEditExpense}

          />

        ))}

      </tbody>

    </table>

  );

};

export default ExpenseList;