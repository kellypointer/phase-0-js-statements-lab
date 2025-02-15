const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;
if (temperature > 80) {
    console.log("Watering on");
    
} else {
    console.log("Watering off");

}
let lightstatus;
if (timeOfDay === "evening") {
    lightstatus = "Lights on";

} else if (timeOfDay === "night") {
    lightstatus = "Lights on"; 

} else {
    lightstatus = "Lights off";

}
    console.log(lightstatus)
    
while (soilMoisture <= 40) {
        console.log(soilMoisture);
        soilMoisture += 5
      }

