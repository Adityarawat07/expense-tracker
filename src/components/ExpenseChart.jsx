import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function ExpenseChart({ expenses }) {
  const categories = [
    "Food",
    "Transport",
    "Bills",
    "Entertainment",
    "Other",
  ];

  const totals = categories.map(
    (category) =>
      expenses
        .filter(
          (expense) =>
            expense.category === category
        )
        .reduce(
          (sum, expense) =>
            sum +
            Number(expense.amount),
          0
        )
  );

  const data = {
  labels: categories,
  datasets: [
    {
      data: totals,
      backgroundColor: [
        "#2ECC71", // Food (green)
        "#3498DB", // Transport (blue)
        "#E74C3C", // Bills (red)
        "#F39C12", // Entertainment (orange)
        "#9B59B6", // Other (purple)
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <div
      style={{
        width: "400px",
        margin: "20px auto",
      }}
    >
      <Pie data={data} />
    </div>
  );
}

export default ExpenseChart;