import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filteredExpenses = props.expenses.filter(
        (filteredData) => filteredData.date.getFullYear() == filteredYear
    );

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    let expenseContent = <p>No Expenses Found</p>;

    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((expense) => {
            return (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                />
            );
        });
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {expenseContent}
        </Card>
    );
};

export default Expenses;
