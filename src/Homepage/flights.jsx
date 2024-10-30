import React from 'react';
import './flights.css'; // Link to the CSS file

const Flights = () => {
  const aircrafts = [
    {
      name: 'Boeing 737 MAX 10',
      imgSrc: 'boeing.jpeg', // Replace with the actual image path
      passengerCapacity: 186,
      fuelCapacity: '25941.00 L',
      maxLoad: '88300.00 Kg',
      avgSpeed: '838 Kmph',
      manufacturer: 'Boeing Commercial'
    },
    {
      name: 'Boeing 757 300',
      imgSrc: 'boeing2.jpeg',
      passengerCapacity: 242,
      fuelCapacity: '43400.00 L',
      maxLoad: '123980.00 Kg',
      avgSpeed: '918 Kmph',
      manufacturer: 'Boeing Commercial'
    },
    {
      name: 'Airbus A380 800',
      imgSrc: 'aibus.jpg',
      passengerCapacity: 568,
      fuelCapacity: '323546.00 L',
      maxLoad: '575000.00 Kg',
      avgSpeed: '903 Kmph',
      manufacturer: 'Airbus'
    },
    {
      name: 'Boeing 767',
      imgSrc: 'Boeing-767.jpg',
      passengerCapacity: 269,
      fuelCapacity: '91100.00 L',
      maxLoad: '186880.00 Kg',
      avgSpeed: '851 Kmph',
      manufacturer: 'Boeing Commercial'
    },
    {
      name: 'Embraer E195',
      imgSrc: 'Embraer.jpg',
      passengerCapacity: 184,
      fuelCapacity: '13306.00 L',
      maxLoad: '49800.00 Kg',
      avgSpeed: '870 Kmph',
      manufacturer: 'Embraer'
    },
    {
      name: 'Bombardier CRJ900',
      imgSrc: 'bombardier.jpg',
      passengerCapacity: 190,
      fuelCapacity: '8717.00 L',
      maxLoad: '34200.00 Kg',
      avgSpeed: '828 Kmph',
      manufacturer: 'Bombardier'
    },
    {
      name: 'Airbus A330',
      imgSrc: 'Airbus-330.jpg',
      passengerCapacity: 277,
      fuelCapacity: '139090.00 L',
      maxLoad: '242000.00 Kg',
      avgSpeed: '871 Kmph',
      manufacturer: 'Airbus'
    },
    {
      name: 'Airbus A380',
      imgSrc: 'Airbus-380.jpg',
      passengerCapacity: 453,
      fuelCapacity: '320000.00 L',
      maxLoad: '560000.00 Kg',
      avgSpeed: '903 Kmph',
      manufacturer: 'Airbus'
    }
    

  ];

  return (
    
    <div className="flights-page">
      <header className="header">
        <h1>Aircraft Details</h1>
        <p>Home - Aircraft Models</p>
      </header>
      <div className="aircraft-container">
        {aircrafts.map((aircraft, index) => (
          <div key={index} className="aircraft-card">
            <img src={aircraft.imgSrc} alt={aircraft.name} />
            <h3>{aircraft.name}</h3>
            <ul>
              <li><i className="icon"></i>Max Passenger Capacity: {aircraft.passengerCapacity}</li>
              <li><i className="icon"></i>Fuel Capacity: {aircraft.fuelCapacity}</li>
              <li><i className="icon"></i>Max Load: {aircraft.maxLoad}</li>
              <li><i className="icon"></i>Avg Air Speed: {aircraft.avgSpeed}</li>
              <li><i className="icon"></i>Manufacturer: {aircraft.manufacturer}</li>
            </ul>
          </div>
        ))}

    </div>
</div>
   
  );
 
};

export default Flights;
