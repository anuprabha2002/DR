function addProduct() {
  const serialNumber = document.getElementById("serialNumber").value;
  const companyName = document.getElementById("companyName").value;
  const dimension = document.getElementById("dimension").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;

  const tableBody = document.getElementById("tableBody");
  const newRow = document.createElement("tr");

  const columns = [
    serialNumber,
    companyName,
    dimension,
    quantity,
    `$${price}`,
    `$${(quantity * price).toFixed(2)}`,
  ];

  columns.forEach((columnData) => {
    const td = document.createElement("td");
    td.textContent = columnData;
    newRow.appendChild(td);
  });

  tableBody.appendChild(newRow);

  updateTotal();
  clearForm();
}

function updateTotal() {
  const tableBody = document.getElementById("tableBody");
  let grandTotal = 0;

  for (let i = 0; i < tableBody.rows.length; i++) {
    const row = tableBody.rows[i];
    const totalSum = parseFloat(row.cells[5].textContent.replace("$", ""));
    grandTotal += totalSum;
  }

  document.getElementById("grandTotal").textContent = `$${grandTotal.toFixed(
    2
  )}`;
}

function clearForm() {
  document.getElementById("productForm").reset();
}
