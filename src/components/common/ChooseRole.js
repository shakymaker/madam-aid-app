'use client';

import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

const ChooseRole = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col">
      <div className="flex-1 flex flex-col items-center max-w-md mx-auto">
        <div className="w-48 h-48 relative mb-6">
          <Image
            src="/icon-512x512.png"
            alt="MadaMaid"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div className="w-full space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl text-center mb-4">I&apos;m Looking to hire a Carer</h2>
            <button className="w-full bg-green-600 text-white rounded-full py-3 hover:bg-green-700">
              Join as a Family
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl text-center mb-4">I&apos;m Looking for a job as a Family Carer</h2>
            <button className="w-full bg-green-600 text-white rounded-full py-3 hover:bg-green-700">
              Join as a Family Carer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;