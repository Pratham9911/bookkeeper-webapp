export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-700 text-white flex flex-col p-2 space-y-4">
        <h2 className="text-2xl font-bold mb-8">Book keeper</h2>
        <nav className="space-y-4">
          <a href="#" className="hover:bg-purple-600 p-2 rounded">Dashboard</a>
          <a href="#" className="hover:bg-purple-600 p-2 rounded">Invoices</a>
          <a href="#" className="hover:bg-purple-600 p-2 rounded">Clients</a>
          <a href="#" className="hover:bg-purple-600 p-2 rounded">Reports</a>
          <a href="#" className="hover:bg-purple-600 p-2 rounded">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-purple-700">Welcome, Pratham 👋</h1>
        <p className="mt-4 text-gray-700">Here's a quick overview of your bookkeeping dashboard.</p>
        {/* Later: Add charts, invoice cards, recent activity etc */}
      </main>
    </div>
  );
}
