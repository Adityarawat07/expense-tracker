# Expense Tracker

A modern Expense Tracker web application built using React and Chart.js. The application allows users to record daily expenses, categorize spending, view summaries, analyze spending patterns through charts, and export expense data.

## Features

### Expense Management

* Add new expenses
* Edit existing expenses
* Delete expenses
* Store amount, category, date, and notes

### Categories

* Food
* Transport
* Bills
* Entertainment
* Other

### Filtering

* Filter expenses by category
* View category-specific spending

### Dashboard Summary

* Total amount spent
* Highest expense recorded
* Total spending per category

### Data Visualization

* Interactive Pie Chart
* Color-coded categories
* Spending distribution analysis

### Data Persistence

* Local Storage support
* Expenses remain saved after browser refresh

### Export Functionality

* Export expenses as CSV file
* Easy sharing and record keeping

### Validation

* Prevents negative expense amounts
* Prevents future dates
* Mandatory category selection

---

# Technologies Used

## Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3

## Charting Library

* Chart.js
* React-Chartjs-2

## Development Tools

* Visual Studio Code
* Node.js
* npm
* Vite

## Version Control

* Git
* GitHub

---

# Project Structure

```text
expense-tracker/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── ExpenseForm.jsx
│   │   └── ExpenseChart.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# Working of the Application

## 1. Adding Expenses

Users enter:

* Amount
* Category
* Date
* Optional Note

The expense is stored in React state and automatically saved to browser Local Storage.

## 2. Editing Expenses

Users can update previously entered expenses using the Edit button.

## 3. Deleting Expenses

Users can remove unwanted expense records permanently.

## 4. Category Filtering

Users can filter displayed expenses by category to analyze spending behavior.

## 5. Summary Calculation

The application automatically calculates:

### Total Spending

Sum of all recorded expenses.

### Highest Expense

Largest single expense entry.

### Category Totals

Total spending within each category.

## 6. Pie Chart Visualization

Expense amounts are grouped by category and displayed using a Pie Chart.

Color Scheme:

* Food → Green
* Transport → Blue
* Bills → Red
* Entertainment → Orange
* Other → Purple

## 7. Local Storage

The application automatically saves expense data in browser Local Storage.

Benefits:

* No database required
* Data persists after page refresh
* Fast access

## 8. CSV Export

Users can export all expense records as a CSV file for reporting and backup purposes.

---

# Installation

Clone the repository:

```bash
git clone https://github.com/Adityarawat07/expense-tracker.git
```

Navigate to project directory:

```bash
cd expense-tracker
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the URL provided by Vite in your browser.

---

# Future Improvements

* Budget tracking per category
* Monthly reports
* Dark mode
* Authentication system
* Database integration
* Cloud synchronization
* Advanced analytics dashboard

---

# AI Tools Used

This project was developed with assistance from:

* ChatGPT (OpenAI)

  * React component development
  * State management guidance
  * Chart.js integration
  * UI design suggestions
  * Debugging support

Development and implementation decisions were reviewed and integrated by the developer.

---

# Author

Aditya Rawat

Built as part of a web development learning project using React and modern frontend technologies.
