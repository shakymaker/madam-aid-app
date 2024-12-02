'use client';

import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function ChooseRole() {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col">
      <button className="self-start p-2">
        <ArrowLeft className="w-6 h-6 text-gray-500" />
      </button>

      <div className="flex-1 flex flex-col items-center max-w-md mx-auto">
        <div className="w-48 h-48 relative mb-6">
          <Image
            src="/icon-512x512.png"
            alt="MadaMaid"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        <p className="text-gray-600 text-center mb-4">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <p className="text-gray-600 text-center mb-12">
          Sapien dictum adipiscing ac amet
        </p>

        <div className="w-full space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl text-center mb-4">I&apos;m Looking to hire a Carer</h2>
            <button
              onClick={() => window.location.href = '/family/signup'}
              className="w-full bg-green-600 text-white rounded-full py-3 hover:bg-green-700"
            >
              Join as a Family
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl text-center mb-4">I&apos;m Looking for a job as a Family Carer</h2>
            <button
              onClick={() => window.location.href = '/carer/signup'}
              className="w-full bg-green-600 text-white rounded-full py-3 hover:bg-green-700"
            >
              Join as a Family Carer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}