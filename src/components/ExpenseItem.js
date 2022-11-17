import "./ExpenseItem.css";
function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 10, 17);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 2000;
  // const locationOfExpenditure = 'Delhi';
  return (
     <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
    </div>
    
    
  );
}

export default ExpenseItem;