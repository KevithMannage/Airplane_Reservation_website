import React, { useEffect, useState } from 'react';
import './UserDetails.css';
import {API_USERDETAILS} from '../Apicall/Apicall.jsx'

const UserDetails = () => {
  const [userData, setUserData] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [upcomingFlights, setUpcomingFlights] = useState([]);
  const email = localStorage.getItem('email');
  const token = localStorage.getItem('token'); 
  useEffect(() => {
    if (email && token) {
      const Apilink3=API_USERDETAILS;
      fetch(`${API_USERDETAILS}/${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      })
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, [email, token]);

  if (!userData) {
    return <p>Loading user details...</p>;
  }

  return (
    <div className="user-details-container">
      <div className="user-card">
        <h2 style={{ textAlign: 'center', margin: '0' }}>{userData.full_name}</h2>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Gender:</strong> {userData.gender}</p>
        <p><strong>Date of Birth:</strong> {userData.dob}</p>
        <p><strong>Passport Number:</strong> {userData.passport_number}</p>
        <p><strong>Mobile Number:</strong> {userData.mobile_num}</p>
        <p><strong>Flight Count:</strong> {userData.flight_count}</p>
        <p><strong>Tier:</strong> {userData.tier}</p>
        <p><strong>Frequent Flyer Miles:</strong> {userData.frequent_flyer_miles} miles</p>
      </div>
    </div>
  );
};

export default UserDetails;
