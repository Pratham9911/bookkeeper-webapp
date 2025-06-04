// app/components/Sidebar.js

"use client";  // Mark this component as a client-side component

import { usePathname } from 'next/navigation';  // Hook to get current route
import Link from 'next/link';  // For navigation

const  Sidebar=()=> {
  const pathname = usePathname();  // Get current path

  // Check if the current page is home ("/") or login ("/login")
  const shouldShowSidebar = !['/', '/login'].includes(pathname);

  if (!shouldShowSidebar) {
    return null;  // Return nothing if the sidebar should not be displayed
  }

  return (
    <aside className="w-64 bg-purple-700 text-white flex flex-col h-screen">
      <div className="p-6 border-b border-purple-500 sticky top-0 z-10">
        <h2 className="text-2xl font-bold">Bookkeeper</h2>
      </div>
      <nav className="flex-1 overflow-y-auto p-6 space-y-4">
        <Link href="/dashboard" className="hover:bg-purple-600 p-2 rounded block">Dashboard</Link>
        <Link href="/invoices" className="hover:bg-purple-600 p-2 rounded block">Invoices</Link>
        <Link href="/clients" className="hover:bg-purple-600 p-2 rounded block">Clients</Link>
        <Link href="/reports" className="hover:bg-purple-600 p-2 rounded block">Reports</Link>
        <Link href="/settings" className="hover:bg-purple-600 p-2 rounded block">Settings</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;  
