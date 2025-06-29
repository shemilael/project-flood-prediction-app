
    import React, { useEffect, useState } from 'react';
    import './App.css';
    import L from 'leaflet';
    import axios from 'axios';

    const App = () => {
      const [floodData, setFloodData] = useState(null);
      const [error, setError] = useState(null);

      useEffect(() => {
        axios.get('http://localhost:5000/api/flood-prediction')
          .then(response => {
            setFloodData(response.data);
          })
          .catch(err => {
            setError('Gagal mengambil data dari API BMKG.');
            console.error(err);
          });
      }, []);

      const renderMap = () => {
        if (!floodData) return;
        const map = L.map('map').setView([4.5725, 96.2924], 7); // Koordinat Aceh

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Menambahkan marker lokasi banjir
        floodData.locations.forEach(location => {
          L.marker([location.latitude, location.longitude])
            .addTo(map)
            .bindPopup(`<b>${location.name}</b><br>${location.prediction}`);
        });
      };

      useEffect(() => {
        renderMap();
      }, [floodData]);

      return (
        <div className="App">
          <h1>Prediksi Banjir di Provinsi Aceh</h1>
          {error && <p>{error}</p>}
          <div id="map" style={{ height: '500px', width: '100%' }}></div>
        </div>
      );
    };

    export default App;
    