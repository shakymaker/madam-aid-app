'use client';

import { useState } from 'react';
import { MapPin, Star, Heart, Settings, Edit, MoreVertical } from 'lucide-react';

const ProfileHeader = ({ user, onEdit }) => {
  return (
    <div className="bg-white p-6">
      <div className="flex items-start gap-4">
        <img
          src="/api/placeholder/80/80"
          alt={user.name}
          className="w-20 h-20 rounded-full"
        />
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl font-semibold">{user.name}</h1>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin size={16} />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{user.rating}</span>
                <span className="text-gray-500 text-sm">({user.reviews} reviews)</span>
              </div>
            </div>
            <button
              onClick={onEdit}
              className="text-green-600 hover:text-green-700"
            >
              <Edit size={20} />
            </button>
          </div>
          
          <button
            onClick={onEdit}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

const JobCard = ({ job, onEdit, onDelete }) => {
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
                  onEdit(job.id);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-50"
              >
                Edit
              </button>
              <button 
                onClick={() => {
                  onDelete(job.id);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-2 text-left text-red-500 hover:bg-gray-50"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <p className="text-gray-600 mb-3">{job.description}</p>

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
    </div>
  );
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [user] = useState({
    name: "Anastasia",
    location: "New York, USA",
    rating: 4.8,
    reviews: 156
  });

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Live-in Family Carer",
      description: "Looking for experienced carer...",
      tags: ["Full-time", "Live-in"],
    },
    {
      id: 2,
      title: "Part-time Care Assistant",
      description: "Weekend support needed...",
      tags: ["Part-time", "Weekends"],
    }
  ]);

  const handleEditJob = (id) => {
    window.location.href = `/jobs/${id}/edit`;
  };

  const handleDeleteJob = (jobId) => {
    setPosts(posts.filter(p => p.id !== jobId));
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-6">
      <ProfileHeader 
        user={user}
        onEdit={() => window.location.href = '/profile/edit'}
      />
      
      <div className="max-w-2xl mx-auto px-4 mt-6">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex-1 py-3 text-center ${
              activeTab === 'posts' 
                ? 'border-b-2 border-green-600 text-green-600'
                : 'text-gray-500'
            }`}
          >
            All Posts
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`flex-1 py-3 text-center ${
              activeTab === 'favorites'
                ? 'border-b-2 border-green-600 text-green-600'
                : 'text-gray-500'
            }`}
          >
            Favorite Posts
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {activeTab === 'posts' && posts.map((post) => (
            <JobCard
              key={post.id}
              job={post}
              onEdit={handleEditJob}
              onDelete={handleDeleteJob}
            />
          ))}

          {activeTab === 'favorites' && (
            <div className="text-center py-8 text-gray-500">
              No favorite posts yet
            </div>
          )}

          {activeTab === 'posts' && posts.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No posts yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;