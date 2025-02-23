Vitalink: Remote Patient Monitoring System with AI Driven Insight

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Django%20%7C%20TensorFlow%20%7C%20ESP32-brightgreen)

A real-time, AI-driven remote patient monitoring system for tracking SpO₂, heart rate, temperature, and blood pressure trends. Built for affordability and clinical empowerment.

---

  Features
- Real-Time Vitals Monitoring: ESP32 sensors stream SpO₂, heart rate, and temperature.
- AI-Powered Blood Pressure Prediction: TensorFlow model estimates SBP/DBP without a cuff.
- Clinician Dashboard: React/Tailwind interface with prioritized alerts and trends.
- Offline-First Design: ESP32 stores data locally during connectivity gaps.

---
 Installation

Prerequisites
- Node.js v18 & npm (Frontend)
- Python  3.10 (Backend) including Django and Tensorflow 
- Arduino IDE & C++ espressif framework(ESP32)

Frontend Setup
bash
git clone [git@github.com:Cavista-Hackathon-2025/vitalink.git](https://github.com/Cavista-Hackathon-2025/vitalink.git)
cd vitalink/frontend
npm install
npm run dev 


Backend Setup
-access backend with http://vitalink.pythonanywhere.com
-django setup
-tensorflow on jupyter notebook
-hosting on pythonanywhere.com


---

Hardware Setup (ESP32)

Components
- ESP32 Dev Board
- MAX30102 Pulse Oximeter
- DS18B20 Temperature Sensor
- Jumper Wires
- SIM 900 arduino shield

  
Configuration
Tensorflow model is an Multilayer peceptron with 5 input neurons, a normalizer, 3 hidden layers and 2 two output
the model tries to use age, gender, oxygen saturation, heartbeat rate, and body temperature to approximate the Blood pressure both diastolic and systolic



AI/ML Integration
Blood Pressure Prediction Model
- Inputs: Heart rate, SpO₂, temperature.
- Datasets: kaggle medical vitals dataset with over 200,000 records.

Overview
uses and esp32 to read values from provided sensors and send those values to the backendserver at http://vitalink.pythonanywhere.com
which stores and displays on it panel. both as tabular (admin panel) and Asthetically (hosted Locally).

   

---

Directory Structure

vitalink/
├── frontend/           # React app
│   ├── public/
│   └── src/
│       ├── components/ # Dashboard, Charts, Alerts
│       └── App.js
├── backend/            # Django API
│   ├── vitals/         # Models, serializers, views
│   └── manage.py
├── hardware/           # ESP32 code
│   └── esp32_sensor.ino
└── README.md


---

 📜 License
MIT License. See [LICENSE](LICENSE) for details.

---

 Acknowledgements
- Kaggke Medical Vitals dataset(https://www.kaggle.com/datasets/nasirayub2/human-vital-sign-dataset) for clinical validation.
- [Adafruit MAX3010x Library](https://github.com/adafruit/Adafruit_MAX3010x) for sensor integration.

---

 Built with ❤ by Stack UnderFlow 

