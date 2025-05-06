import React from 'react';
import NotificationSettings from '../components/NotificationSettings';

export default function SettingsPage() {
  return (
    <div className="grid">
      <section className="card fade-in">
        <NotificationSettings />
      </section>
    </div>
  );
}
