'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const OnboardingStep = ({ title, description, image, index, total }) => (
  <div className="flex flex-col items-center px-6 pt-6">
    <button className="self-start p-2">
      <ArrowLeft className="w-6 h-6 text-gray-500" />
    </button>
    
    <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto text-center">
      <img 
        src={image} 
        alt={title}
        className="w-64 h-64 mb-8"
      />
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-8">{description}</p>
      
      <div className="flex gap-2 mb-8">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? 'bg-green-600 w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  </div>
);

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: "Create Job Post",
      description: "Create your job post for free",
      image: "/images/onboarding/create-job.png"
    },
    {
      title: "Review Applications",
      description: "Review applications from Family Carers matching your criteria",
      image: "/images/onboarding/review-applications.png"
    },
    {
      title: "Contact Family Carers",
      description: "Directly contact or search suitable family carers",
      image: "/images/onboarding/contact-carers.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <OnboardingStep
        {...steps[currentStep]}
        index={currentStep}
        total={steps.length}
      />
      
      <div className="p-6">
        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="w-full bg-green-600 text-white rounded-lg py-3 font-medium"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => window.location.href = '/login'}
            className="w-full bg-green-600 text-white rounded-lg py-3 font-medium"
          >
            Let's Start
          </button>
        )}
        
        <button 
          onClick={() => window.location.href = '/login'}
          className="w-full text-gray-500 py-3 mt-2"
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default Onboarding;