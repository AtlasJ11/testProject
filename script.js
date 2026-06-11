let transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

document
    .getElementById("addBtn")
    .addEventListener("click", addTransaction);

function addTransaction() {
    const desc =
        document.getElementById("desc").value;

    const amount =
        Number(document.getElementById("amount").value);

    if (!desc || isNaN(amount)) {
        alert("Please enter a valid description and amount.");
        return;
    }

    transactions.push({
        id: Date.now(),
        description: desc,
        amount: amount
    });

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

    render();
}

function deleteTransaction(id) {
    transactions = transactions.filter(
        item => item.id !== id
    );

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

    render();
}

const income =
    transactions
        .filter(item => item.amount > 0)
        .reduce((sum, item) => sum + item.amount, 0);

const expense =
    transactions
        .filter(item => item.amount < 0)
        .reduce((sum, item) => sum + Math.abs(item.amount), 0);

document.getElementById("income")
    .textContent = `$${income}`;

document.getElementById("expense")
    .textContent = `$${expense}`;

function render() {
    const list =
        document.getElementById("list");

    list.innerHTML = "";

    transactions.forEach(item => {

        const li =
            document.createElement("li");

        const transactionClass =
            item.amount >= 0
                ? "income-transaction"
                : "expense-transaction";

        li.classList.add(transactionClass);

        li.innerHTML = `
            <span>
                ${item.description}: $${item.amount}
            </span>

            <button
                class="delete-btn"
                onclick="deleteTransaction(${item.id})">
                Delete
            </button>
        `;

        list.appendChild(li);
    });

    const balance =
        transactions.reduce(
            (sum, item) => sum + item.amount,
            0
        );

    document.getElementById("balance").textContent =
        `$${balance}`;

    const income =
        transactions
            .filter(item => item.amount > 0)
            .reduce((sum, item) => sum + item.amount, 0);

    const expense =
        transactions
            .filter(item => item.amount < 0)
            .reduce((sum, item) => sum + Math.abs(item.amount), 0);

    document.getElementById("income").textContent =
        `$${income}`;

    document.getElementById("expense").textContent =
        `$${expense}`;
}
    
render();