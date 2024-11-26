const axios = require('axios');

// API endpoint and configuration
const apiUrl = 'http://localhost:9997/v3/config/paths/delete/camera4';

async function deleteCameraConfiguration() {
  try {
    console.log('Sending delete request to API...');
    const response = await axios.delete(apiUrl);  // Using DELETE method
    console.log('Configuration successfully deleted:', response.statusText);
  } catch (error) {
    console.error('Error deleting configuration:', error.message);

    // Detailed error response
    if (error.response) {
      console.error('Response status:', error.response.status);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
  }
}

deleteCameraConfiguration();
