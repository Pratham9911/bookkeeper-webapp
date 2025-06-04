"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("invoices");
    if (saved) setInvoices(JSON.parse(saved));
  }, []);

  const totalAmount = invoices.reduce(
    (sum, invoice) => sum + (Number(invoice.amount) || 0),
    0
  );

  const uniqueClients = [...new Set(invoices.map((inv) => inv.client))];
  const totalClients = uniqueClients.length;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-purple-700">Welcome</h1>
        <p className="mt-4 text-gray-700">
          Here is a quick overview of your bookkeeping dashboard.
        </p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-purple-100 p-6 rounded shadow">
            <h2 className="text-lg font-semibold text-purple-700">Total Invoices</h2>
            <p className="text-2xl mt-2 text-black">{invoices.length}</p>
          </div>
          <div className="bg-green-100 p-6 rounded shadow">
            <h2 className="text-lg font-semibold text-green-700">Total Amount</h2>
            <p className="text-2xl mt-2 text-black">${totalAmount.toFixed(2)}</p>
          </div>
          <div className="bg-blue-100 p-6 rounded shadow">
            <h2 className="text-lg font-semibold text-blue-700">Total Clients</h2>
            <p className="text-2xl mt-2 text-black">{totalClients}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
