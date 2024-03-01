import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Moment from 'moment-timezone'
import { v4 as uuidv4 } from 'uuid'; // Import uuid to generate unique IDs

function App() {
  const [Timezone, setTimezone] = useState('Asia/Kolkata');
  const [currentWeekStart, setCurrentWeekStart] = useState(moment().startOf('week'));
  const [selectedTimings, setSelectedTimings] = useState({}); // State to track selected timings

  useEffect(() => {
    // Save selected timings whenever selectedTimings state changes
    saveSelectedTimings();
  }, [selectedTimings]);

  const goToPreviousWeek = () => {
    setCurrentWeekStart(prev => moment(prev).subtract(1, 'week').startOf('week'));
  };

  const goToNextWeek = () => {
    setCurrentWeekStart(prev => moment(prev).add(1, 'week').startOf('week'));
  };

  const handleTimezone = (e) => {
    setTimezone(e.target.value);
  };

  const handleCheckboxChange = (e, formattedTime) => {
    setSelectedTimings(prevState => ({
      ...prevState,
      [formattedTime]: e.target.checked
    }));
  };

  const saveSelectedTimings = () => {
    const selectedTimingsData = Object.entries(selectedTimings)
      .filter(([formattedTime, checked]) => checked)
      .map(([formattedTime]) => ({
        id: uuidv4(),
        timing: formattedTime,
        date: moment().format('YYYY-MM-DD') // Add the date when the timing is selected
      }));
    // Here you would typically send the selectedTimingsData to your server or save it to local storage
    // For demonstration purposes, let's log it to console
    console.log(selectedTimingsData);
  };

  const generateWeekdays = () => {
    const weekdays = [];
    const currentDate = moment(currentWeekStart).tz(Timezone);
    for (let i = 1; i <= 5; i++) {
      const dateObj = currentDate.clone().weekday(i);
      const weekday = dateObj.format('dddd');
      const date = dateObj.format('D/MM');
      const isCurrentDate = dateObj.isSame(moment(), 'day');
      const isPast = dateObj.isBefore(moment(), 'day');
      const content = isPast ? 'Past' : renderTimeSlots(dateObj); // Pass dateObj to renderTimeSlots
      weekdays.push({ weekday, date, content, isCurrentDate });
    }
    return weekdays;
  };

  const renderTimeSlots = (dateObj) => {
    const timeSlots = [];
    for (let hour = 8; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 23 && minute === 30) {
          continue;
        }
        const formattedTime = moment(dateObj).startOf('day').add(hour, 'hours').add(minute, 'minutes').format('h:mm A');
        timeSlots.push(
          <div key={`${hour}-${minute}`}>
            <input
              type="checkbox"
              id={`time-${formattedTime}`}
              name={`time-${formattedTime}`}
              value={formattedTime}
              onChange={(e) => handleCheckboxChange(e, formattedTime)}
            />
            <label htmlFor={`time-${formattedTime}`}>{formattedTime}</label>
          </div>
        );
      }
    }
    return timeSlots;
  };

  return (
    <>
      <div className='flex justify-between p-5 bg-blue-300 text-white font-bold'>
        <div className='flex gap-16'>
          <button onClick={goToPreviousWeek}>Previous Week</button>
          <p>{moment().tz(Timezone).format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
        <div>
          <button onClick={goToNextWeek}>Next Week</button>
        </div>
      </div>

      <div className='flex flex-col p-5 bg-pink-200'>
        <label htmlFor="Timezone">Timezone</label>
        <select value={Timezone} id="Timezone" onChange={handleTimezone}>
          <option value="UTC">UTC</option>
          <option value="America/New_York">America/New_York</option>
          <option value="Asia/Kolkata">Asia/Kolkata</option>
        </select>
      </div>

      <div className='Table'>
        {generateWeekdays().map((day, index) => (
          <div key={index} className={`flex gap-5 p-2 ${day.isCurrentDate ? 'bg-yellow-200' : ''}`}>
            <div>
              <div>{day.weekday}</div>
              <div>{day.date}</div>
            </div>
            <div className='flex flex-wrap gap-4'>{day.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App