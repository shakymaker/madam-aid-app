'use client';

import { useState } from 'react';
import { ArrowLeft, Check, Star } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const PricingCard = ({ plan, isSelected, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(plan)}
      className={`
        w-full p-6 rounded-lg text-left transition-all
        ${isSelected ? 'ring-2 ring-green-600 bg-green-50' : 'bg-white hover:shadow-md'}
      `}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
          <p className="text-sm text-gray-500">{plan.description}</p>
        </div>
        <div className="flex">
          {[1, 2, 3].map((star) => (
            <Star
              key={star}
              size={16}
              className="text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <span className="text-2xl font-bold text-gray-900">
          ${plan.price}
        </span>
        <span className="text-gray-500">/month</span>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check size={16} className="text-green-600" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </button>
  );
};

const PaymentForm = ({ onBack }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = '/subscription/success';
    } catch (err) {
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <button className="w-full p-4 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
          <img src="/api/placeholder/24/24" alt="Google Pay" />
          Pay with Google Pay
        </button>
        <button className="w-full p-4 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
          <img src="/api/placeholder/24/24" alt="Apple Pay" />
          Pay with Apple Pay
        </button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative text-center">
          <span className="px-4 text-sm text-gray-500 bg-white">Or pay with card</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div>
          <label className="block text-sm text-gray-600 mb-1">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">CVC</label>
            <input
              type="text"
              placeholder="123"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>

        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Subscribe Now'}
        </button>
      </form>
    </div>
  );
};

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  
  const plans = [
    {
      name: '7 Days Free Trial',
      description: 'Try our platform for free',
      price: 0,
      features: ['Basic Job Posting', 'Limited Chat', 'View Applications']
    },
    {
      name: 'Basic Package',
      description: 'Perfect for occasional hiring',
      price: 9.99,
      features: ['5 Job Posts/month', 'Chat with Applicants', 'Basic Support']
    },
    {
      name: 'Standard Package',
      description: 'Most popular choice',
      price: 19.99,
      features: ['Unlimited Posts', 'Priority Support', 'Advanced Filtering']
    },
    {
      name: 'Premium Package',
      description: 'For professional agencies',
      price: 29.99,
      features: ['Unlimited Everything', 'Featured Posts', 'Dedicated Support']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <button 
        onClick={() => showPayment ? setShowPayment(false) : window.history.back()}
        className="flex items-center text-gray-500 mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <div className="max-w-2xl mx-auto">
        {!showPayment ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold mb-2">Choose Your Plan</h1>
              <p className="text-gray-600">
                Select the plan that best suits your needs
              </p>
            </div>

            <div className="grid gap-4">
              {plans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  plan={plan}
                  isSelected={selectedPlan?.name === plan.name}
                  onSelect={(plan) => {
                    setSelectedPlan(plan);
                    setShowPayment(true);
                  }}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Payment Details</h2>
              <p className="text-gray-500">
                Selected plan: {selectedPlan?.name} - ${selectedPlan?.price}/month
              </p>
            </div>
            <PaymentForm onBack={() => setShowPayment(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPlans;