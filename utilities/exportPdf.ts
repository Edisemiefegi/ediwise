// utils/exportPdf.ts
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportTransactionsToPDF(transactions: any[]) {
  const doc = new jsPDF();

  // Title
  doc.text("Filtered Transactions", 14, 15);

  // Table headers
  const tableColumn = ["Date", "Type", "Amount", "Description"];
  const tableRows: any = [];

  // Add rows
  transactions.forEach((tx) => {
    const txData = [
      new Date(tx.createdAt).toLocaleDateString(),
      tx.acctType.toUpperCase(),
      `₦${tx.amount}`,
      tx.description || "",
    ];
    tableRows.push(txData);
  });

  // Auto table
  autoTable(doc, {
    startY: 20,
    head: [tableColumn],
    body: tableRows,
  });

  // Save the PDF
  doc.save("transactions.pdf");
}
