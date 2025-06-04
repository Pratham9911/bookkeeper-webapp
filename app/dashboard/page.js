export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
<aside className="w-64 bg-purple-700 text-white flex flex-col h-screen">
  {/* Sticky Logo */}
  <div className="p-6 border-b border-purple-500 sticky top-0 bg-purple-700 z-10">
    <h2 className="text-2xl font-bold">Bookkeeper</h2>
  </div>

  {/* Scrollable Nav */}
  <nav className="flex-1 overflow-y-auto p-6 space-y-4">
    <a href="#" className="hover:bg-purple-600 p-2 rounded block">Dashboard</a>
    <a href="#" className="hover:bg-purple-600 p-2 rounded block">Invoices</a>
    <a href="#" className="hover:bg-purple-600 p-2 rounded block">Clients</a>
    <a href="#" className="hover:bg-purple-600 p-2 rounded block">Reports</a>
    <a href="#" className="hover:bg-purple-600 p-2 rounded block">Settings</a>
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
