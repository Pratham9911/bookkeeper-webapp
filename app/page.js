
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white p-4">
      <div className="bg-white text-black rounded-2xl shadow-2xl p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to BookKeeper</h1>
        <p className="text-lg mb-6">Manage invoices, clients, and reports with ease 💫</p>
        
        <Link href="/login" >
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition">
          Get Started
        </button>
        </Link>
        
      </div>
    </main>
  );
}

