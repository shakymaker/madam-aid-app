'use client';

import { useState } from 'react';
import { ArrowLeft, Mail, Lock, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Header from '@/components/common/Header';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
       <Header /> 
	<button className="flex items-center text-gray-500 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <div className="max-w-md mx-auto">
        <div className="h-8 mb-8" />
        <h1 className="text-2xl font-semibold mb-2">Sign in</h1>
        <p className="text-gray-500 mb-8">Enter your registered email to sign in to your account</p>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Email Address</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="name@example.com"
                required
              />
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Password</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="••••••••"
                required
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              'Sign in'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => window.location.href = '/forgot-password'}
            className="text-green-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;