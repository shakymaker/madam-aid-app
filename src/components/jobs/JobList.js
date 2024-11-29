'use client';

import { useState } from 'react';
import { Heart, MoreVertical, Star, Trash2, Plus } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const JobCard = ({ job, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex justify-between mb-3">
        <h3 className="font-semibold">{job.title}</h3>
        <div className="relative">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="p-1"
          >
            <MoreVertical size={20} />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-1 bg-white rounded-lg shadow-lg py-1 z-10">
              <button 
                onClick={() => {
                  onDelete(job.id);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left text-red-500 hover:bg-gray-50 flex items-center gap-2"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <p className="text-gray-600 mb-3">{job.description}</p>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {job.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="text-red-500">
          <Heart size={20} />
        </button>
      </div>
    </div>
  );
};

const JobList = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Live-in Family Carer",
      description: "Looking for an experienced carer to provide live-in support for elderly parent. Must have previous experience with dementia care.",
      tags: ["Full-time", "Live-in"],
      status: 'active'
    },
    {
      id: 2,
      title: "Part-time Carer",
      description: "Need a compassionate carer for weekend support. Basic medical knowledge required.",
      tags: ["Part-time", "Weekends"],
      status: 'active'
    },
    {
      id: 3,
      title: "Senior Care Assistant",
      description: "Seeking qualified care assistant for day shifts. Must be able to assist with medication management.",
      tags: ["Full-time", "Day Shift"],
      status: 'completed'
    }
  ]);

  const [showAlert, setShowAlert] = useState(false);

  const handleDeleteJob = (jobId) => {
    setJobs(jobs.filter(job => job.id !== jobId));
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const filteredJobs = jobs.filter(job => 
    (activeTab === 'active' && job.status === 'active') ||
    (activeTab === 'posted' && job.status === 'posted') ||
    (activeTab === 'completed' && job.status === 'completed')
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {showAlert && (
        <Alert className="mb-4 fixed top-4 right-4 w-auto">
          <AlertDescription>Job deleted successfully</AlertDescription>
        </Alert>
      )}

      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">My Jobs</h1>
          <button 
            onClick={() => window.location.href = '/jobs/new'}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Plus size={20} />
            Post New Job
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          {['active', 'posted', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full capitalize ${
                activeTab === tab 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <JobCard 
              key={job.id} 
              job={job} 
              onDelete={handleDeleteJob}
            />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No jobs found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;