'use client';

import { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import Header from '@/components/common/Header';

const StepIndicator = ({ currentStep }) => {
  const steps = [
    'Job Information',
    'Other Information',
    'Services Information',
    'Relationship Information',
    'Availability'
  ];

  return (
    <div className="mb-8">

  <Header />      

<div className="flex justify-between mb-2">
        {steps.map((label, index) => (
          <div key={index} className="flex flex-col items-center w-1/5">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center mb-2
              ${index < currentStep ? 'bg-green-600 text-white' : 
                index === currentStep ? 'bg-green-600 text-white' : 
                'bg-gray-200 text-gray-500'}
            `}>
              {index < currentStep ? <Check size={16} /> : index + 1}
            </div>
            <span className="text-xs text-center text-gray-600">{label}</span>
          </div>
        ))}
      </div>
      <div className="relative h-1 bg-gray-200 rounded">
        <div 
          className="absolute h-1 bg-green-600 rounded transition-all duration-300"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
};

const JobPost = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    jobTitle: '',
    expectedSalary: '',
    jobDescription: '',
    age: '',
    city: '',
    country: '',
    drivingLicense: '',
    languages: [],
    services: [],
    relationship: '',
    additionalInfo: '',
    schedule: {
      monday: { morning: false, afternoon: false, night: false },
      tuesday: { morning: false, afternoon: false, night: false },
      wednesday: { morning: false, afternoon: false, night: false },
      thursday: { morning: false, afternoon: false, night: false },
      friday: { morning: false, afternoon: false, night: false },
      saturday: { morning: false, afternoon: false, night: false },
      sunday: { morning: false, afternoon: false, night: false }
    },
    startingDate: ''
  });

  const updateFormData = (fields) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const JobInformationStep = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Title
        </label>
        <input
          type="text"
          value={formData.jobTitle}
          onChange={(e) => updateFormData({ jobTitle: e.target.value })}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          placeholder="Enter job title"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Expected Salary
        </label>
        <input
          type="number"
          value={formData.expectedSalary}
          onChange={(e) => updateFormData({ expectedSalary: e.target.value })}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          placeholder="Enter expected salary"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Job Description
        </label>
        <textarea
          value={formData.jobDescription}
          onChange={(e) => updateFormData({ jobDescription: e.target.value })}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 min-h-[120px]"
          placeholder="Enter job description"
          required
        />
      </div>
    </div>
  );

  const OtherInformationStep = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          City
        </label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => updateFormData({ city: e.target.value })}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          placeholder="Enter city"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Country
        </label>
        <input
          type="text"
          value={formData.country}
          onChange={(e) => updateFormData({ country: e.target.value })}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          placeholder="Enter country"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Driving License Required?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="drivingLicense"
              value="yes"
              checked={formData.drivingLicense === 'yes'}
              onChange={(e) => updateFormData({ drivingLicense: e.target.value })}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="drivingLicense"
              value="no"
              checked={formData.drivingLicense === 'no'}
              onChange={(e) => updateFormData({ drivingLicense: e.target.value })}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>
    </div>
  );

  const ServicesInformationStep = () => {
    const servicesList = [
      'Personal Care',
      'Medication Management',
      'Meal Preparation',
      'Light Housekeeping',
      'Transportation',
      'Companionship'
    ];

    return (
      <div className="space-y-4">
        <h3 className="font-medium mb-2">Select Required Services</h3>
        <div className="space-y-2">
          {servicesList.map((service) => (
            <label key={service} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={(e) => {
                  const updatedServices = e.target.checked
                    ? [...formData.services, service]
                    : formData.services.filter(s => s !== service);
                  updateFormData({ services: updatedServices });
                }}
                className="mr-3"
              />
              {service}
            </label>
          ))}
        </div>
      </div>
    );
  };

  const RelationshipInformationStep = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Relationship with Patient
        </label>
        <select
          value={formData.relationship}
          onChange={(e) => updateFormData({ relationship: e.target.value })}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="">Select relationship</option>
          <option value="family">Family Member</option>
          <option value="guardian">Legal Guardian</option>
          <option value="friend">Friend</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Information
        </label>
        <textarea
          value={formData.additionalInfo}
          onChange={(e) => updateFormData({ additionalInfo: e.target.value })}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 min-h-[120px]"
          placeholder="Any other relevant information..."
        />
      </div>
    </div>
  );

  const AvailabilityStep = () => {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const shifts = ['morning', 'afternoon', 'night'];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-4">Schedule Availability</h3>
          <div className="space-y-4">
            {days.map((day) => (
              <div key={day} className="flex items-center justify-between">
                <span className="capitalize w-24">{day}</span>
                <div className="flex gap-4">
                  {shifts.map((shift) => (
                    <label key={shift} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.schedule[day][shift]}
                        onChange={(e) => {
                          const newSchedule = { ...formData.schedule };
                          newSchedule[day][shift] = e.target.checked;
                          updateFormData({ schedule: newSchedule });
                        }}
                        className="mr-2"
                      />
                      {shift}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Starting Date
          </label>
          <input
            type="date"
            value={formData.startingDate}
            onChange={(e) => updateFormData({ startingDate: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
      </div>
    );
  };

  const steps = [
    JobInformationStep,
    OtherInformationStep,
    ServicesInformationStep,
    RelationshipInformationStep,
    AvailabilityStep,
  ];

  const CurrentStep = steps[step];

  const handleSubmit = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.href = '/jobs';
    } catch (error) {
      console.error('Error submitting job post:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <button 
        onClick={() => step > 0 ? setStep(step - 1) : window.location.href = '/jobs'}
        className="flex items-center text-gray-500 mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <div className="max-w-2xl mx-auto">
        <StepIndicator currentStep={step} />

        <CurrentStep />

        <div className="flex justify-between mt-8">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 py-2 border border-green-600 text-green-600 rounded-lg"
            >
              Previous
            </button>
          )}

          <button
            onClick={() => {
              if (step === steps.length - 1) {
                handleSubmit();
              } else {
                setStep(step + 1);
              }
            }}
            className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            {step === steps.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPost;