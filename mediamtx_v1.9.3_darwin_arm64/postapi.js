require('dotenv').config();
const axios = require('axios');

// API endpoint and configuration
const apiUrl = 'http://localhost:9997/v3/config/paths/add/camera4';
const payload = {
  "name": "camera4",
  "source": process.env.camera4,
  "sourceFingerprint": "",
  "sourceOnDemand": false,
  "sourceOnDemandStartTimeout": "10s",
  "sourceOnDemandCloseAfter": "10s",
  "maxReaders": 0,
  "srtReadPassphrase": "",
  "fallback": "",
  "record": false,
  "recordPath": "./recordings/%path/%Y-%m-%d_%H-%M-%S-%f",
  "recordFormat": "fmp4",
  "recordPartDuration": "1s",
  "recordSegmentDuration": "1h0m0s",
  "recordDeleteAfter": "24h0m0s",
  "overridePublisher": true,
  "srtPublishPassphrase": "",
  "rtspTransport": "automatic",
  "rtspAnyPort": false,
  "rtspRangeType": "",
  "rtspRangeStart": "",
  "sourceRedirect": "",
  "rpiCameraCamID": 0,
  "rpiCameraWidth": 1920,
  "rpiCameraHeight": 1080,
  "rpiCameraHFlip": false,
  "rpiCameraVFlip": false,
  "rpiCameraBrightness": 0,
  "rpiCameraContrast": 1,
  "rpiCameraSaturation": 1,
  "rpiCameraSharpness": 1,
  "rpiCameraExposure": "normal",
  "rpiCameraAWB": "auto",
  "rpiCameraAWBGains": [
    0,
    0
  ],
  "rpiCameraDenoise": "off",
  "rpiCameraShutter": 0,
  "rpiCameraMetering": "centre",
  "rpiCameraGain": 0,
  "rpiCameraEV": 0,
  "rpiCameraROI": "",
  "rpiCameraHDR": false,
  "rpiCameraTuningFile": "",
  "rpiCameraMode": "",
  "rpiCameraFPS": 30,
  "rpiCameraAfMode": "continuous",
  "rpiCameraAfRange": "normal",
  "rpiCameraAfSpeed": "normal",
  "rpiCameraLensPosition": 0,
  "rpiCameraAfWindow": "",
  "rpiCameraFlickerPeriod": 0,
  "rpiCameraTextOverlayEnable": false,
  "rpiCameraTextOverlay": "%Y-%m-%d %H:%M:%S - MediaMTX",
  "rpiCameraCodec": "auto",
  "rpiCameraIDRPeriod": 60,
  "rpiCameraBitrate": 1000000,
  "rpiCameraProfile": "main",
  "rpiCameraLevel": "4.1",
  "runOnInit": "",
  "runOnInitRestart": false,
  "runOnDemand": "",
  "runOnDemandRestart": false,
  "runOnDemandStartTimeout": "10s",
  "runOnDemandCloseAfter": "10s",
  "runOnUnDemand": "",
  "runOnReady": "",
  "runOnReadyRestart": false,
  "runOnNotReady": "",
  "runOnRead": "",
  "runOnReadRestart": false,
  "runOnUnread": "",
  "runOnRecordSegmentCreate": "",
  "runOnRecordSegmentComplete": ""
};

async function addCameraConfiguration() {
  try {
    console.log('Sending configuration to API...');
    const response = await axios.post(apiUrl, payload);
    console.log('Configuration successfully added:', response.statusText);
  } catch (error) {
    console.error('Error adding configuration:', error.message);

    // Detailed error response
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
  }
}

addCameraConfiguration();
