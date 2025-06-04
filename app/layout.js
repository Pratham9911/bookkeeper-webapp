// app/layout.js
import Sidebar from './components/sidebar';  // Corrected import to match the filename

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bookkeeper Dashboard",
  description: "Manage invoices, clients, and reports with ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link rel="icon" href="/applogo.png" />
      </head>
      <body className="min-h-screen bg-gray-100">
        <div className="flex">
          <Sidebar />  {/* Corrected to use the uppercase 'Sidebar' */}
          <main className="flex-1 p-8 overflow-y-auto">
            {children}  {/* This is where the page content will be injected */}
          </main>
        </div>
      </body>
    </html>
  );
}
