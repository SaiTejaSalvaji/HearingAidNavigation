import React, { useState } from 'react';

export default function NotificationSettings() {
  const stations = ['Station A','Station B','Station C'];
  const [subs, setSubs] = useState([]);

  const toggle = s =>
    setSubs(prev => prev.includes(s) ? prev.filter(x=>x!==s) : [...prev,s]);

  return (
    <div>
      <h2>Notification Settings</h2>
      {stations.map(s => (
        <label key={s} style={{display:'block',margin:'0.5rem 0'}}>
          <input
            type="checkbox"
            checked={subs.includes(s)}
            onChange={()=>toggle(s)}
          />{' '}
          {s}
        </label>
      ))}
    </div>
  );
}
