import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserCircle } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg p-4">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold">Recruitment Portal</h1>
            <UserCircle className="w-6 h-6" />
          </div>
        </nav>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-4">Welcome to Recruitment Portal</h2>
                <p>Please log in to continue</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;