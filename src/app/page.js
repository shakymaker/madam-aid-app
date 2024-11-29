'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">MadaMaid - Dev Menu</h1>
        <div className="space-y-4">
          <button
            onClick={() => window.location.href = '/login'}
            className="w-full p-3 bg-green-600 text-white rounded-lg"
          >
            Login Page
          </button>
          
          <button
            onClick={() => window.location.href = '/forgot-password'}
            className="w-full p-3 bg-green-600 text-white rounded-lg"
          >
            Forgot Password
          </button>
          
          <button
            onClick={() => window.location.href = '/jobs/new'}
            className="w-full p-3 bg-green-600 text-white rounded-lg"
          >
            Create Job
          </button>
	  <button
  	    onClick={() => window.location.href = '/jobs'}
  	    className="w-full p-3 bg-green-600 text-white rounded-lg"
	  >
  Job List
</button>

<button
  onClick={() => window.location.href = '/profile'}
  className="w-full p-3 bg-green-600 text-white rounded-lg"
>
  Profile
</button>

<button
  onClick={() => window.location.href = '/subscription'}
  className="w-full p-3 bg-green-600 text-white rounded-lg"
>
  Subscription
</button>


        </div>
      </div>
    </div>
  );
}
