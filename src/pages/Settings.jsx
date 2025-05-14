import '../pages/Settings.css';
import React, { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState({
    serviceUpdates: true,
    delayAlerts: true,
    promotionalMessages: false,
  });
  const [theme, setTheme] = useState("light");

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const saveSettings = () => {
    // Here you can add logic to save settings to localStorage, or send to an API
    console.log("Settings saved:", { notifications, theme });
    alert("Settings saved successfully!");
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <div className="settings-section">
        <h3>Notifications</h3>
        <label>
          <input
            type="checkbox"
            name="serviceUpdates"
            checked={notifications.serviceUpdates}
            onChange={handleNotificationChange}
          />
          Real-Time Service Updates
        </label>
        <label>
          <input
            type="checkbox"
            name="delayAlerts"
            checked={notifications.delayAlerts}
            onChange={handleNotificationChange}
          />
          Delay Alerts
        </label>
        <label>
          <input
            type="checkbox"
            name="promotionalMessages"
            checked={notifications.promotionalMessages}
            onChange={handleNotificationChange}
          />
          Promotional Messages
        </label>
      </div>

      <div className="settings-section">
        <h3>Theme</h3>
        <label>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === "light"}
            onChange={handleThemeChange}
          />
          Light
        </label>
        <label>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            onChange={handleThemeChange}
          />
          Dark
        </label>
      </div>

      <button onClick={saveSettings} className="save-button">
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
