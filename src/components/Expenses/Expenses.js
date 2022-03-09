import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {props.data.map((expense, index) => {
                return (
                    <ExpenseItem
                        key={index}
                        title={expense.title}
                        date={expense.date}
                        amount={expense.amount}
                    />
                );
            })}
        </Card>
    );
};

export default Expenses;
