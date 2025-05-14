import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  // Mock user data
  const [user, setUser] = useState({
    name: "Alex Chen",
    email: "alex@example.com",
    preferences: {
      language: "English",
      contrastMode: "High Contrast",
      notificationSound: "Vibration Only",
    },
    accessibilityNeeds: ["Hearing Impairment", "Low Vision"],
  });

  // Edit mode toggle
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <h2><em>Welcome, <strong>{user.name}</strong>!</em></h2>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="avatar">A</div>
        
        {!isEditing ? (
          // Display Mode
          <div className="profile-info">
            <p><strong>Name:</strong> <strong>{user.name}</strong></p>
            <p><strong>Email:</strong> <strong>{user.email}</strong></p>
            <h3>Preferences</h3>
            <ul>
              <li><strong>Language:</strong> {user.preferences.language}</li>
              <li><strong>Contrast Mode:</strong> {user.preferences.contrastMode}</li>
              <li><strong>Notifications:</strong> {user.preferences.notificationSound}</li>
            </ul>
            <h3>Accessibility Needs</h3>
            <ul>
              {user.accessibilityNeeds.map((need, index) => (
                <li key={index}><strong>{need}</strong></li>
              ))}
            </ul>
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
        ) : (
          // Edit Mode
          <form className="edit-form">
            <label>
              <strong>Name:</strong>
              <input 
                type="text" 
                value={user.name} 
                onChange={(e) => setUser({...user, name: e.target.value})} 
              />
            </label>
            
            <label>
              <strong>Email:</strong>
              <input 
                type="email" 
                value={user.email} 
                onChange={(e) => setUser({...user, email: e.target.value})} 
              />
            </label>
            
            <h3>Preferences</h3>
            <label>
              <strong>Language:</strong>
              <select
                value={user.preferences.language}
                onChange={(e) => setUser({...user, preferences: {...user.preferences, language: e.target.value}})}
              >
                <option>English</option>
                <option>Spanish</option>
                <option>ASL</option>
              </select>
            </label>
            
            <div className="form-actions">
              <button type="button" onClick={() => setIsEditing(false)}>Save</button>
              <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;