import React, { useEffect, useState } from 'react';
import { fetchMetroUpdates } from '../services/apiService';

export default function RealTimeUpdates() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetchMetroUpdates()
      .then(setUpdates)
      .catch(()=>{/* ignore for now */});
  }, []);

  return (
    <div>
      <h2>Real‑Time Updates</h2>
      <ul>
        {updates.map((u,i) => <li key={i}>{u.message}</li>)}
      </ul>
    </div>
  );
}
