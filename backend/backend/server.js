
    const express = require('express');
    const axios = require('axios');
    const app = express();

    const BMKG_API_URL = 'https://data.bmkg.go.id/prakiraan-cuaca/';  // Gantilah dengan URL API BMKG yang sesuai

    app.get('/api/flood-prediction', async (req, res) => {
      try {
        const response = await axios.get(BMKG_API_URL);
        res.json(response.data);
      } catch (error) {
        console.error('Error fetching data from BMKG API', error);
        res.status(500).send('Failed to fetch data');
      }
    });

    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
    