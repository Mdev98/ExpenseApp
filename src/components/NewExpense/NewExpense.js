import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveNewExpenseHandler = (newExpenseData) => {
        const newExpense = {
            ...newExpenseData,
            id: Math.random().toString
        };
        props.onAddExpense(newExpense);
        // setIsEditing(false);   
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const cancelEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} onCancel={cancelEditingHandler} />}
        </div>
    )
}

export default NewExpense