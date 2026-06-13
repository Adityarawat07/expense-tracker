import {
  useState,
  useEffect,
} from "react";

function ExpenseForm({
  addExpense,
  editingExpense,
}) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] =
    useState("Food");
  const [date, setDate] =
    useState("");
  const [note, setNote] =
    useState("");

  useEffect(() => {
    if (editingExpense) {
      setAmount(
        editingExpense.amount
      );
      setCategory(
        editingExpense.category
      );
      setDate(
        editingExpense.date
      );
      setNote(
        editingExpense.note
      );
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    addExpense({
      amount,
      category,
      date,
      note,
    });

    setAmount("");
    setCategory("Food");
    setDate("");
    setNote("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: "20px",
      }}
    >
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(
            e.target.value
          )
        }
        required
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(
            e.target.value
          )
        }
      >
        <option value="Food">
          Food
        </option>
        <option value="Transport">
          Transport
        </option>
        <option value="Bills">
          Bills
        </option>
        <option value="Entertainment">
          Entertainment
        </option>
        <option value="Other">
          Other
        </option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) =>
          setDate(
            e.target.value
          )
        }
        required
      />

      <input
        type="text"
        placeholder="Note"
        value={note}
        onChange={(e) =>
          setNote(
            e.target.value
          )
        }
      />

      <button type="submit">
        {editingExpense
          ? "Update Expense"
          : "Add Expense"}
      </button>
    </form>
  );
}

export default ExpenseForm;