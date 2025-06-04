"use client";
import { useState, useEffect } from "react";

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);

  const [newInvoice, setNewInvoice] = useState({
    client: "",
    amount: "",
    dueDate: "",
  });

  useEffect(() => {
    try {
      const storedInvoices = JSON.parse(localStorage.getItem("invoices"));
      if (Array.isArray(storedInvoices)) {
        setInvoices(storedInvoices);
      }
    } catch (err) {
      console.error("Failed to load invoices from localStorage", err);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const handleDelete = (index) => {
    const updated = [...invoices];
    updated.splice(index, 1);
    setInvoices(updated);
  };

  const handleChange = (e) => {
    setNewInvoice({ ...newInvoice, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = invoices.length + 1;
    setInvoices([
      ...invoices,
      {
        id: newId,
        client: newInvoice.client,
        amount: Number(newInvoice.amount),
        dueDate: newInvoice.dueDate,
      },
    ]);
    setNewInvoice({ client: "", amount: "", dueDate: "" });
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-semibold text-purple-700 mb-8">Invoices</h1>

      {/* Add Invoice Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
          <div>
            <label htmlFor="client" className="block text-sm font-medium text-gray-700">
              Client Name
            </label>
            <input
              type="text"
              id="client"
              name="client"
              value={newInvoice.client}
              onChange={handleChange}
              required
              className="text-black mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount ($)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={newInvoice.amount}
              onChange={handleChange}
              min="0"
              required
              className="text-black mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={newInvoice.dueDate}
            onChange={handleChange}
            required
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700"
        >
          Add Invoice
        </button>
      </form>

      {/* Invoices Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-medium">Invoice ID</th>
              <th className="py-3 px-6 text-left text-sm font-medium">Client</th>
              <th className="py-3 px-6 text-left text-sm font-medium">Amount</th>
              <th className="py-3 px-6 text-left text-sm font-medium">Due Date</th>
              <th className="py-3 px-6 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {invoices.map((invoice, index) => (
              <tr key={invoice.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-6 text-sm">{invoice.id}</td>
                <td className="py-3 px-6 text-sm">{invoice.client}</td>
                <td className="py-3 px-6 text-sm">${invoice.amount}</td>
                <td className="py-3 px-6 text-sm">{invoice.dueDate}</td>
                <td className="py-3 px-6 text-sm">
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-black hover:text-red-700"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
