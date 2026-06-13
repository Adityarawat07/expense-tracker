import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  const addExpense = (expense) => {
    if (editingIndex !== null) {
      const updatedExpenses = [...expenses];
      updatedExpenses[editingIndex] = expense;
      setExpenses(updatedExpenses);
      setEditingIndex(null);
    } else {
      setExpenses([...expenses, expense]);
    }
  };

  const deleteExpense = (index) => {
    setExpenses(
      expenses.filter((_, i) => i !== index)
    );
  };

  const editExpense = (index) => {
    setEditingIndex(index);
  };

  const exportCSV = () => {
    const headers =
      "Amount,Category,Date,Note\n";

    const rows = expenses
      .map(
        (expense) =>
          `${expense.amount},${expense.category},${expense.date},${expense.note}`
      )
      .join("\n");

    const blob = new Blob(
      [headers + rows],
      { type: "text/csv" }
    );

    const url =
      window.URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;
    a.download = "expenses.csv";
    a.click();
  };

  const filteredExpenses =
    filterCategory === "All"
      ? expenses
      : expenses.filter(
          (expense) =>
            expense.category === filterCategory
        );

  const totalSpent = filteredExpenses.reduce(
    (sum, expense) =>
      sum + Number(expense.amount),
    0
  );

  const highestExpense =
    filteredExpenses.length > 0
      ? filteredExpenses.reduce((max, expense) =>
          Number(expense.amount) >
          Number(max.amount)
            ? expense
            : max
        )
      : null;

  const categoryTotals = {};

  expenses.forEach((expense) => {
    categoryTotals[expense.category] =
      (categoryTotals[expense.category] || 0) +
      Number(expense.amount);
  });

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Expense Tracker
      </h1>

      <ExpenseForm
        addExpense={addExpense}
        editingExpense={
          editingIndex !== null
            ? expenses[editingIndex]
            : null
        }
      />

      <hr />

      <h2>Summary</h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <p>
          <strong>Total Spent:</strong>{" "}
          {totalSpent.toLocaleString(
            "en-IN",
            {
              style: "currency",
              currency: "INR",
            }
          )}
        </p>

        {highestExpense && (
          <p>
            <strong>Highest Expense:</strong>{" "}
            {Number(
              highestExpense.amount
            ).toLocaleString(
              "en-IN",
              {
                style: "currency",
                currency: "INR",
              }
            )}
          </p>
        )}
      </div>

      <button
        onClick={exportCSV}
        style={{
          marginBottom: "20px",
        }}
      >
        Export CSV
      </button>

      <h3>Category Totals</h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        {Object.entries(categoryTotals).map(
          ([category, total]) => (
            <div
              key={category}
              style={{
                background: "white",
                padding: "15px",
                borderRadius: "12px",
                boxShadow:
                  "0 4px 10px rgba(0,0,0,0.1)",
                minWidth: "150px",
                textAlign: "center",
              }}
            >
              <h4
                style={{
                  margin: 0,
                  color: "#6a1b9a",
                }}
              >
                {category}
              </h4>

              <p
                style={{
                  marginTop: "10px",
                  color: "#1976d2",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                {total.toLocaleString(
                  "en-IN",
                  {
                    style: "currency",
                    currency: "INR",
                  }
                )}
              </p>
            </div>
          )
        )}
      </div>

      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <label>
          Filter by Category:
        </label>{" "}
        <select
          value={filterCategory}
          onChange={(e) =>
            setFilterCategory(
              e.target.value
            )
          }
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transport">
            Transport
          </option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">
            Entertainment
          </option>
          <option value="Other">Other</option>
        </select>
      </div>

<h2>Expense Breakdown</h2>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    flexWrap: "wrap",
    marginBottom: "30px",
  }}
>
  <ExpenseChart
    expenses={filteredExpenses}
  />

  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow:
        "0 4px 10px rgba(0,0,0,0.1)",
      minWidth: "220px",
    }}
  >
    <h3
      style={{
        marginTop: 0,
      }}
    >
      Categories
    </h3>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          width: "15px",
          height: "15px",
          background: "#2ECC71",
          marginRight: "10px",
        }}
      />
      Food
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          width: "15px",
          height: "15px",
          background: "#3498DB",
          marginRight: "10px",
        }}
      />
      Transport
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          width: "15px",
          height: "15px",
          background: "#E74C3C",
          marginRight: "10px",
        }}
      />
      Bills
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          width: "15px",
          height: "15px",
          background: "#F39C12",
          marginRight: "10px",
        }}
      />
      Entertainment
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "15px",
          height: "15px",
          background: "#9B59B6",
          marginRight: "10px",
        }}
      />
      Other
    </div>
  </div>
</div>

      <h2>Expenses</h2>

      <div
        style={{
          overflowX: "auto",
        }}
      >
        <table
          border="1"
          cellPadding="10"
          width="100%"
        >
          <thead>
            <tr>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Note</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredExpenses.map(
              (expense, index) => (
                <tr key={index}>
                  <td>
                    {Number(
                      expense.amount
                    ).toLocaleString(
                      "en-IN",
                      {
                        style:
                          "currency",
                        currency:
                          "INR",
                      }
                    )}
                  </td>

                  <td>
                    {expense.category}
                  </td>

                  <td>
                    {expense.date}
                  </td>

                  <td>
                    {expense.note}
                  </td>

                  <td>
                    <button
                      onClick={() =>
                        editExpense(
                          expenses.indexOf(
                            expense
                          )
                        )
                      }
                    >
                      Edit
                    </button>{" "}
                    <button
                      onClick={() =>
                        deleteExpense(
                          expenses.indexOf(
                            expense
                          )
                        )
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;