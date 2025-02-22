Vitalink: Remote Patient Monitoring System

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
- Python  3.10 (Backend)
- PlatformIO/Arduino IDE (ESP32)

Frontend Setup
bash
git clone [git@github.com:Cavista-Hackathon-2025/vitalink.git](https://github.com/Cavista-Hackathon-2025/vitalink.git)
cd vitalink/frontend
npm install
npm run dev 


Backend Setup
bash
cd vitalink/backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 

---

Hardware Setup (ESP32)

Components
- ESP32 Dev Board
- MAX30102 Pulse Oximeter
- DS18B20 Temperature Sensor
- Jumper Wires

Configuration
1. Wiring:
   - MAX30102: Connect SDA/SCL to ESP32 pins 21/22.
   - DS18B20: Connect data pin to ESP32 GPIO 4.
2. Libraries:
   - Install `Adafruit_MAX3010x`, `OneWire`, and `DallasTemperature` via Arduino Library Manager.
3. Code:
   - Flash `esp32_sensor.ino` to ESP32 (update WiFi credentials in code).



AI/ML Integration
Blood Pressure Prediction Model
- Inputs: Heart rate, SpO₂, temperature.
---

 Usage
1. Start Services:
   - Frontend: `npm run dev`
   - Backend: `python manage.py runserver`
   - ESP32: Power on and connect to WiFi.
2. Dashboard:
   - View real-time vitals at `http://localhost:3000`.
   

---

Directory Structure

healthguardian/
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
- [MIMIC-III Dataset](https://physionet.org/content/mimiciii/) for clinical validation.
- [Adafruit MAX3010x Library](https://github.com/adafruit/Adafruit_MAX3010x) for sensor integration.

---

 Built with ❤ by Stack UnderFlow 

