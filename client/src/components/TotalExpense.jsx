const TotalExpense = ({ expenses }) => {

  const total = expenses.reduce(

    (sum,item)=>sum+Number(item.amount),

    0

  );

  return (

    <div className="total">

      <h2>

        Total Expense : ₹ {total}

      </h2>

    </div>

  );

};

export default TotalExpense;