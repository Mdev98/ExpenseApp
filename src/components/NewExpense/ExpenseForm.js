import './ExpenseForm.css';

import { useState } from "react";

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });



    const titleChangeHandler = (e) => {
        const value = e.target.value;

        setUserInput((prevState) => {
            return {
                ...prevState,
                title: value
            }
        })
    }

    const amoutChangeHandler = (e) => {
        const value = e.target.value;

        setUserInput((prevState) => {
            return {
                ...prevState,
                amount: value
            }
        })
    }

    const dateChangeHandler = (e) => {
        const value = e.target.value;

        setUserInput((prevState) => {
            return {
                ...prevState,
                date: value
            }
        })

    }
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: userInput.title,
            amount: +userInput.amount,
            date: new Date(userInput.date)
        }

        props.onSaveNewExpense(expenseData);

        setUserInput({
            title: '',
            amount: '',
            date: ''
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInput.amount} onChange={amoutChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={userInput.date} min="2022-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="reset" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;