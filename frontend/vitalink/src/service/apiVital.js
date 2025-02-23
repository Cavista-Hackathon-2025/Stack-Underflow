import { useEffect, useState } from "react";

export function useVitalData() {
  const [vitalData, setVitalData] = useState({
    spo2: 0,
    bpm: 0,
    temp: 0,
    sbp: 0,
    dbp: 0,
    alert: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://vitalink.pythonanywhere.com/pull", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data); // Debug log
        setVitalData(data);
      } catch (error) {
        console.error("Error fetching vital data:", error);
        // Keep the default values in case of error
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return vitalData;
}
