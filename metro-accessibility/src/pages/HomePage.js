import React from 'react';
import RealTimeUpdates from '../components/RealTimeUpdates';
import NotificationSettings from '../components/NotificationSettings';

export default function HomePage() {
  return (
    <div className="grid">
      {/* Real-Time Updates Card */}
      <section className="card fade-in">
        <RealTimeUpdates />
      </section>

      {/* Notification Settings Card */}
      <section className="card fade-in">
        <NotificationSettings />
      </section>
    </div>
  );
}
