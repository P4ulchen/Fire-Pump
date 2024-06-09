let gameStarted = false;

// Game variables
let waterLevel = 100; // percentage
let geodeticSuctionHeight = 10; // meters
let suctionHeight = 5; // meters
let hoseBlockage = 0; // percentage
let inputPressure = 0; // bar
let outputPressure = 0; // bar
let waterDemand = 0; // liters per minute
let heat = 0; // degrees Celsius

document.getElementById('start-button').addEventListener('click', function() {
    gameStarted = true;
    alert('Game started: ' + gameStarted);

    // Hide the button container and show the pump interface
    document.getElementById('button-container').style.display = 'none';
    document.getElementById('pump-interface').style.display = 'flex';

    // Initialize game variables
    initializeVariables();
});

document.getElementById('output-pressure').addEventListener('input', function() {
    outputPressure = parseFloat(this.value);
    updatePressureDisplay(outputPressure);
});

function initializeVariables() {
    waterLevel = 100;
    geodeticSuctionHeight = 10;
    suctionHeight = 5;
    hoseBlockage = 0;
    inputPressure = 0;
    outputPressure = 0;
    waterDemand = 0;
    heat = 0;

    updatePressureDisplay(outputPressure);

    console.log('Game variables initialized:');
    console.log('Water Level:', waterLevel);
    console.log('Geodetic Suction Height:', geodeticSuctionHeight);
    console.log('Suction Height:', suctionHeight);
    console.log('Hose Blockage:', hoseBlockage);
    console.log('Input Pressure:', inputPressure);
    console.log('Output Pressure:', outputPressure);
    console.log('Water Demand:', waterDemand);
    console.log('Heat:', heat);
}

function updatePressureDisplay(pressure) {
    const pressureBar = document.getElementById('pressure-bar');
    const pressureText = document.getElementById('current-pressure');
    const maxBarWidth = 200; // Width of the pressure bar container in pixels
    const newBarWidth = (pressure / 16) * maxBarWidth;
    pressureBar.style.width = `${newBarWidth}px`;
    pressureText.textContent = pressure.toFixed(2) + ' bar';
}
