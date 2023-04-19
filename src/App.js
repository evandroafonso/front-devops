// App.js

import React, { useState } from 'react';
import moment from 'moment-timezone';
import './App.css';

function App() {
  const [localTime, setLocalTime] = useState(moment());
  const [foreignTimezone, setForeignTimezone] = useState('America/New_York');

  const handleTimezoneChange = (event) => {
    setForeignTimezone(event.target.value);
  };

  const formatTime = (time) => {
    return moment(time).format('h:mm A');
  };

  const getForeignTime = () => {
    return moment(localTime).tz(foreignTimezone);
  };

  return (
    <div className="App">
      <h1>Time Converter</h1>
      <label>
        Local Time: {formatTime(localTime)}
        <input type="time" value={formatTime(localTime)} onChange={(event) => setLocalTime(moment(event.target.value, 'hh:MM'))} />
      </label>
      <br />
      <label>
        Foreign Timezone:
        <select value={foreignTimezone} onChange={handleTimezoneChange}>
          <option value="America/New_York">New York</option>
          <option value="Europe/London">London</option>
          <option value="Asia/Tokyo">Tokyo</option>
        </select>
      </label>
      <br />
      <p>Time in {foreignTimezone}: {formatTime(getForeignTime())}</p>
    </div>
  );
}

export default App;
