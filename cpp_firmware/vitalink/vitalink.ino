// Include the libraries we need
#include <OneWire.h>
#include <DallasTemperature.h>

// Data wire is plugged into port 2 on the Arduino
#define ONE_WIRE_BUS 25
#define TEMPERATURE_PRECISION 9

// Setup a oneWire instance to communicate with any OneWire devices (not just Maxim/Dallas temperature ICs)
OneWire oneWire(ONE_WIRE_BUS);

// Pass our oneWire reference to Dallas Temperature.
DallasTemperature sensors(&oneWire);

// arrays to hold device addresses
DeviceAddress insideThermometer, outsideThermometer;

// Assign address manually. The addresses below will need to be changed
// to valid device addresses on your bus. Device address can be retrieved
// by using either oneWire.search(deviceAddress) or individually via
// sensors.getAddress(deviceAddress, index)
// DeviceAddress insideThermometer = { 0x28, 0x1D, 0x39, 0x31, 0x2, 0x0, 0x0, 0xF0 };
// DeviceAddress outsideThermometer   = { 0x28, 0x3F, 0x1C, 0x31, 0x2, 0x0, 0x0, 0x2 };

void setup(void)
{
  // start serial port
  Serial.begin(9600);
  Serial.println("Dallas Temperature IC Control Library Demo");

  // Start up the library
  sensors.begin();

  // locate devices on the bus
  Serial.print("Locating devices...");
  Serial.print("Found ");
  Serial.print(sensors.getDeviceCount(), DEC);
  Serial.println(" devices.");

  // report parasite power requirements
  Serial.print("Parasite power is: ");
  if (sensors.isParasitePowerMode()) Serial.println("ON");
  else Serial.println("OFF");

  // Search for devices on the bus and assign based on an index. Ideally,
  // you would do this to initially discover addresses on the bus and then
  // use those addresses and manually assign them (see above) once you know
  // the devices on your bus (and assuming they don't change).
  //
  // method 1: by index
  if (!sensors.getAddress(insideThermometer, 0)) Serial.println("Unable to find address for Device 0");
  if (!sensors.getAddress(outsideThermometer, 1)) Serial.println("Unable to find address for Device 1");

  // method 2: search()
  // search() looks for the next device. Returns 1 if a new address has been
  // returned. A zero might mean that the bus is shorted, there are no devices,
  // or you have already retrieved all of them. It might be a good idea to
  // check the CRC to make sure you didn't get garbage. The order is
  // deterministic. You will always get the same devices in the same order
  //
  // Must be called before search()
  //oneWire.reset_search();
  // assigns the first address found to insideThermometer
  //if (!oneWire.search(insideThermometer)) Serial.println("Unable to find address for insideThermometer");
  // assigns the seconds address found to outsideThermometer
  //if (!oneWire.search(outsideThermometer)) Serial.println("Unable to find address for outsideThermometer");

  // show the addresses we found on the bus
  Serial.print("Device 0 Address: ");
  printAddress(insideThermometer);
  Serial.println();

  Serial.print("Device 1 Address: ");
  printAddress(outsideThermometer);
  Serial.println();

  // set the resolution to 9 bit per device
  sensors.setResolution(insideThermometer, TEMPERATURE_PRECISION);
  sensors.setResolution(outsideThermometer, TEMPERATURE_PRECISION);

  Serial.print("Device 0 Resolution: ");
  Serial.print(sensors.getResolution(insideThermometer), DEC);
  Serial.println();

  Serial.print("Device 1 Resolution: ");
  Serial.print(sensors.getResolution(outsideThermometer), DEC);
  Serial.println();
}

// function to print a device address
void printAddress(DeviceAddress deviceAddress)
{
  for (uint8_t i = 0; i < 8; i++)
  {
    // zero pad the address if necessary
    if (deviceAddress[i] < 16) Serial.print("0");
    Serial.print(deviceAddress[i], HEX);
  }
}

// function to print the temperature for a device
void printTemperature(DeviceAddress deviceAddress)
{
  float tempC = sensors.getTempC(deviceAddress);
  if (tempC == DEVICE_DISCONNECTED_C)
  {
    Serial.println("Error: Could not read temperature data");
    return;
  }
  Serial.print("Temp C: ");
  Serial.print(tempC);
  Serial.print(" Temp F: ");
  Serial.print(DallasTemperature::toFahrenheit(tempC));
}

// function to print a device's resolution
void printResolution(DeviceAddress deviceAddress)
{
  Serial.print("Resolution: ");
  Serial.print(sensors.getResolution(deviceAddress));
  Serial.println();
}

// main function to print information about a device
void printData(DeviceAddress deviceAddress)
{
  Serial.print("Device Address: ");
  printAddress(deviceAddress);
  Serial.print(" ");
  printTemperature(deviceAddress);
  Serial.println();
}

/*
   Main function, calls the temperatures in a loop.
*/
void loop(void)
{
  // call sensors.requestTemperatures() to issue a global temperature
  // request to all devices on the bus
  Serial.print("Requesting temperatures...");
  sensors.requestTemperatures();
  Serial.println("DONE");

  // print the device information
  printData(insideThermometer);
  printData(outsideThermometer);
}


/*!
 * @file SPO2.ino
 * @brief Display heart-rate and SPO2 on serial in real-time, normal SPO2 is within 95~100
 * @n Try to fix the sensor on your finger in using to avoid the effect of pressure change on data output.
 * @n This library supports mainboards: ESP8266, FireBeetle-M0, UNO, ESP32, Leonardo, Mega2560
 * @copyright  Copyright (c) 2010 DFRobot Co.Ltd (http://www.dfrobot.com)
 * @licence     The MIT License (MIT)
 * @author [YeHangYu](hangyu.ye@dfrobot.com)
 * @version  V0.1
 * @date  2020-05-29
 * @url https://github.com/DFRobot/DFRobot_MAX30102
 */

#include <DFRobot_MAX30102.h>

DFRobot_MAX30102 particleSensor;

/*
Macro definition options in sensor configuration
sampleAverage: SAMPLEAVG_1 SAMPLEAVG_2 SAMPLEAVG_4
               SAMPLEAVG_8 SAMPLEAVG_16 SAMPLEAVG_32
ledMode:       MODE_REDONLY  MODE_RED_IR  MODE_MULTILED
sampleRate:    PULSEWIDTH_69 PULSEWIDTH_118 PULSEWIDTH_215 PULSEWIDTH_411
pulseWidth:    SAMPLERATE_50 SAMPLERATE_100 SAMPLERATE_200 SAMPLERATE_400
               SAMPLERATE_800 SAMPLERATE_1000 SAMPLERATE_1600 SAMPLERATE_3200
adcRange:      ADCRANGE_2048 ADCRANGE_4096 ADCRANGE_8192 ADCRANGE_16384
*/
void setup()
{
  //Init serial
  Serial.begin(115200);
  /*!
   *@brief Init sensor 
   *@param pWire IIC bus pointer object and construction device, can both pass or not pass parameters (Wire in default)
   *@param i2cAddr Chip IIC address (0x57 in default)
   *@return true or false
   */
  while (!particleSensor.begin()) {
    Serial.println("MAX30102 was not found");
    delay(1000);
  }

  /*!
   *@brief Use macro definition to configure sensor 
   *@param ledBrightness LED brightness, default value: 0x1F（6.4mA), Range: 0~255（0=Off, 255=50mA）
   *@param sampleAverage Average multiple samples then draw once, reduce data throughput, default 4 samples average
   *@param ledMode LED mode, default to use red light and IR at the same time 
   *@param sampleRate Sampling rate, default 400 samples every second 
   *@param pulseWidth Pulse width: the longer the pulse width, the wider the detection range. Default to be Max range
   *@param adcRange ADC Measurement Range, default 4096 (nA), 15.63(pA) per LSB
   */
  particleSensor.sensorConfiguration(/*ledBrightness=*/50, /*sampleAverage=*/SAMPLEAVG_4, \
                        /*ledMode=*/MODE_MULTILED, /*sampleRate=*/SAMPLERATE_100, \
                        /*pulseWidth=*/PULSEWIDTH_411, /*adcRange=*/ADCRANGE_16384);
}

int32_t SPO2; //SPO2
int8_t SPO2Valid; //Flag to display if SPO2 calculation is valid
int32_t heartRate; //Heart-rate
int8_t heartRateValid; //Flag to display if heart-rate calculation is valid 

void loop()
{
  Serial.println(F("Wait about four seconds"));
  particleSensor.heartrateAndOxygenSaturation(/**SPO2=*/&SPO2, /**SPO2Valid=*/&SPO2Valid, /**heartRate=*/&heartRate, /**heartRateValid=*/&heartRateValid);
  //Print result 
  Serial.print(F("heartRate="));
  Serial.print(heartRate, DEC);
  Serial.print(F(", heartRateValid="));
  Serial.print(heartRateValid, DEC);
  Serial.print(F("; SPO2="));
  Serial.print(SPO2, DEC);
  Serial.print(F(", SPO2Valid="));
  Serial.println(SPO2Valid, DEC);
}


/*
  Firmware thats handles connection to the tscmonitor server at tscmonitor.pythonanywhere.com
  for push requests eg: http://tcsmonitor.pythonanywhere.com/push?data={states:[1,2,3],densities:[3,3,1],count:[1,2,5]}
    states: for each road 0-red, 1-yellow, 2-green
    density: for each road values from 0 to empty to 3-heavily congested
    count: count for each road in the last hour
*/

#define STOP 0
#define READY 1
#define GO 2

#include <NTPClient.h>
#include <ESP8266WiFi.h>
#include <WiFiUdp.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>


using namespace std;




const char *ssid     = "TCS";
const char *password = "12345678";

const long utcOffsetInSeconds = 3600; // UTC +1.00
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org", utcOffsetInSeconds);


struct IrSensor {
  int pin;
  int irState;
  int lastIrState = HIGH;
  unsigned long lastDebounceTime = 0;
  static const unsigned long debounceDelay = 50;

  IrSensor(int p): pin(p) {}

  void init() {
    pinMode(pin, INPUT);
  }

  bool getState() {
    int reading = digitalRead(pin);
    bool return_val = LOW;

    if (reading != lastIrState) {
      lastDebounceTime = millis();
    }

    if ((millis() - lastDebounceTime) > debounceDelay) {
      if (reading != irState) {
        irState = reading;

        if (irState == HIGH) return_val = HIGH;
      }
    }

    lastIrState = reading;
    return return_val;
  }

};


struct Road {
  IrSensor ir1, ir2;

  int16_t count = -2, density = 0, state = 0;
  uint8_t lastHour;
  int densityState;
  int lastDensityState = 0;
  unsigned long lastDebounceTime = 0;
  static const unsigned long debounceDelay = 5000;



  Road(uint8_t in1, uint8_t in2) : ir1(in1), ir2(in2) {}

  void init() {
    ir1.init();
    ir2.init();
    lastHour = timeClient.getHours();

  }

  void hourlyReset() {
    uint newHour = timeClient.getHours();
    if (lastHour != newHour) {
      count = 0;
      lastHour = newHour;
    }
  }

  void updateCount() {
    if (ir1.getState()) count++;
    if (ir2.getState()) count++;
  }

  void updateDensity() {
    int density_ = !digitalRead(ir1.pin) + !digitalRead(ir2.pin);

    if (density_ != lastDensityState) {
      lastDebounceTime = millis();
    }

    density = density_;

    if ((millis() - lastDebounceTime) > debounceDelay) {
      if (density_ != densityState) {
        densityState = density_;
      }

      if (densityState == 2) {
        density = 3;
      }
    }

    lastDensityState = density_;
  }

  void update() {
    updateCount();
    updateDensity();
  }
};


Road road1(13, 0), road2(14, 12), road3(5, 4);

vector<Road *> roads = {&road1, &road2, &road3};
unsigned long sendDataCounter = 0, pushDataCounter = 0;

void setup() {
  Serial.begin(9600);

  WiFi.begin(ssid, password);
  Serial.print("Searching for Wifi Network. SSID: TCS, KEY: 12345678.");

  while ( WiFi.status() != WL_CONNECTED ) {
    delay (500);
    Serial.print ( "." );
  }
  Serial.println("\nConnected.");

  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LOW);
  timeClient.begin();
  timeClient.update();

  for (Road *road : roads) road->init();

}


void loop() {
  if (Serial.available()) {
    JsonDocument data;
    String data_str = Serial.readStringUntil('\n');

    deserializeJson(data, data_str);

    for (int i = 0; i < 3; i++) {
      Road* road = roads[i];
      road->state = data["states"][i];
    }
  }

  for (Road *road : roads) road->update();
  
  WiFiClient client;
  HTTPClient http;
  
  if (millis() - sendDataCounter > 1000) {
    JsonDocument dense_road; // {"densities": [0, 1, 1]} bools
    String dense_road_str;
    JsonArray dense_road_arr = dense_road["densities"].to<JsonArray>();

    for (Road* road : roads) dense_road_arr.add(uint(road->density == 3));

    serializeJson(dense_road, dense_road_str);
    Serial.println("~"+dense_road_str);
    sendDataCounter = millis();
  }

  if (WiFi.status() == WL_CONNECTED) {
    digitalWrite(LED_BUILTIN, LOW);

    if (millis() - pushDataCounter > 500) {
      JsonDocument data; // data={states:[1,2,3],densities:[3,3,1],count:[1,2,5]}
      String data_str;

      JsonArray states = data["states"].to<JsonArray>();
      JsonArray densities = data["densities"].to<JsonArray>();
      JsonArray count = data["count"].to<JsonArray>();
    
      for (Road *road : roads) {
        states.add(road->state);
        densities.add(road->density);
        count.add(road->count);
      }

      serializeJson(data, data_str);

      Serial.println(data_str);
      Serial.println("[HTTP] begin..");
      if (http.begin(client, "http://tcsmonitor.pythonanywhere.com/push?data=" + data_str)) {
        int httpCode = http.GET();
        if (httpCode > 0) Serial.println(http.getString());
        else Serial.println("failed");
        http.end();
      }else Serial.println("Couldn't Connect");

      pushDataCounter = millis();
    }
  } else digitalWrite(LED_BUILTIN, HIGH);

}

