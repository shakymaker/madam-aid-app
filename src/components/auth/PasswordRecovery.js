'use client';

import { useState } from 'react';
import { ArrowLeft, Mail, Lock, Check } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Header from '@/components/common/Header';

const OTPInput = ({ length = 5, value, onChange }) => {
  const handleKeyUp = (e, index) => {
    if (e.keyCode === 8 && !e.target.value && index > 0) {
      const prev = e.target.previousElementSibling;
      prev.focus();
      prev.select();
      return;
    }
    if (e.target.value && index < length - 1) {
      const next = e.target.nextElementSibling;
      next.focus();
      next.select();
    }
  };

  return (
    <div className="flex gap-2 justify-center my-4">
      
<Header />

{Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          className="w-12 h-12 text-center border rounded-lg text-xl focus:ring-2 focus:ring-green-500"
          value={value[index] || ''}
          onChange={e => {
            const newValue = [...value];
            newValue[index] = e.target.value;
            onChange(newValue.join(''));
          }}
          onKeyUp={e => handleKeyUp(e, index)}
        />
      ))}
    </div>
  );
};

const PasswordRecovery = () => {
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStep('otp');
    } catch (err) {
      setError('Failed to send verification code.');
    } finally {
      setLoading(false);
    }
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 5) {
      setError('Please enter the complete verification code.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStep('reset');
    } catch (err) {
      setError('Invalid verification code.');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStep('success');
    } catch (err) {
      setError('Failed to reset password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <button 
        onClick={() => {
          if (step === 'otp') setStep('email');
          else if (step === 'reset') setStep('otp');
          else window.location.href = '/';
        }}
        className="flex items-center text-gray-500 mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <div className="max-w-md mx-auto">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {step === 'email' && (
          <div>
            <h1 className="text-2xl font-semibold mb-2">Forgot Password</h1>
            <p className="text-gray-500 mb-8">Enter your email address to reset your password</p>
            
            <form onSubmit={handleEmailSubmit} className="space-y-6">
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

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                Continue
              </button>
            </form>
          </div>
        )}

        {step === 'otp' && (
          <div>
            <h1 className="text-2xl font-semibold mb-2">Enter OTP</h1>
            <p className="text-gray-500 mb-8">Enter the verification code sent to your email</p>

            <form onSubmit={handleOTPSubmit} className="space-y-6">
              <OTPInput value={otp} onChange={setOtp} />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                Verify
              </button>
            </form>
          </div>
        )}

        {step === 'reset' && (
          <div>
            <h1 className="text-2xl font-semibold mb-2">Reset Password</h1>
            <p className="text-gray-500 mb-8">Create a new password for your account</p>

            <form onSubmit={handlePasswordReset} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">New Password</label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Confirm Password</label>
                <div className="relative">
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                Reset Password
              </button>
            </form>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <h1 className="text-2xl font-semibold mb-2">Password Reset Successfully</h1>
            <p className="text-gray-500 mb-8">You can now sign in with your new password</p>
            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordRecovery;