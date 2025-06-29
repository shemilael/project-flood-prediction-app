
# Flood Prediction Backend

This is the backend part of the Flood Prediction web application.

## Features:
- Fetches real-time flood prediction data from BMKG API.
- Provides an endpoint for the frontend to access flood prediction data.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/flood-prediction-backend.git
   cd flood-prediction-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the backend server:
   ```
   node server.js
   ```
   The server will run on `http://localhost:5000`.

## Technologies:
- Node.js
- Express.js
- Axios

## Dependencies:
- axios
- express

## API Endpoint:
- `GET /api/flood-prediction`: Fetches real-time flood prediction data from BMKG.
