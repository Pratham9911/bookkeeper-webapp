"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("invoices");
    if (saved) setInvoices(JSON.parse(saved));
  }, []);

  const totalAmount = invoices.reduce((sum, invoice) => sum + Number(invoice.amount || 0), 0);
  const uniqueClients = [...new Set(invoices.map(inv => inv.client))];
  const totalClients = uniqueClients.length;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-700 text-white flex flex-col h-screen">
        <div className="p-6 border-b border-purple-500 sticky top-0 bg-purple-700 z-10">
          <h2 className="text-2xl font-bold">Bookkeeper</h2>
        </div>

        <nav className="flex-1 overflow-y-auto p-6 space-y-4">
          <Link href="/dashboard" className="hover:bg-purple-600 p-2 rounded block">Dashboard</Link>
          <Link href="/invoices" className="hover:bg-purple-600 p-2 rounded block">Invoices</Link>
          <Link href="/#" className="hover:bg-purple-600 p-2 rounded block">Clients</Link>
          <Link href="/#" className="hover:bg-purple-600 p-2 rounded block">Reports</Link>
          <Link href="/#" className="hover:bg-purple-600 p-2 rounded block">Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-purple-700">Welcome</h1>
        <p className="mt-4 text-gray-700">Here's a quick overview of your bookkeeping dashboard.</p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-purple-100 p-6 rounded shadow">
            <h2 className="text-lg font-semibold text-purple-700">Total Invoices</h2>
            <p className="text-2xl mt-2">{invoices.length}</p>
          </div>
          <div className="bg-green-100 p-6 rounded shadow">
            <h2 className="text-lg font-semibold text-green-700">Total Amount</h2>
            <p className="text-2xl mt-2">₹{totalAmount}</p>
          </div>
          <div className="bg-blue-100 p-6 rounded shadow">
            <h2 className="text-lg font-semibold text-blue-700">Total Clients</h2>
            <p className="text-2xl mt-2">{totalClients}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
