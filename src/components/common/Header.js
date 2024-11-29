'use client';

import { Home } from 'lucide-react';

const Header = () => {
  return (
    <div className="fixed top-0 right-0 p-4">
      <button
        onClick={() => window.location.href = '/'}
        className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 flex items-center justify-center"
        title="Go to Home"
      >
        <Home size={24} />
      </button>
    </div>
  );
};

export default Header;