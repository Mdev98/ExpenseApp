import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

import { useState } from 'react';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('')
    const filterYear = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    console.log(filteredExpenses)

    return (
        <Card className="expenses">
            <ExpenseFilter onFilterChange={filterYear} />
            <ExpensesChart expenses={filteredExpenses} />
            {filteredExpenses.length === 0 ? <p style={{fontSize : '1.2rem', color: '#fff', margin: '0px 20px'}} >No expenses for this year.</p> : filteredExpenses.map(expense => { return (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />) })}
        </Card>       
    );
}

export default Expenses;