
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const labsData = {
    "ELECTRONICS LAB": { components:
        ["AC – DC voltage regulator using SCR",
"Ammeter",
"Analog Multimeter",
"AM & FM trainer kit",
"Audio Power meter",
"CRO",
"Class-B push pull amplifier kit",
"Complementary Symmetry amplifier",
"Computers",
"DCB",
"Digital Ammeter",
"Digital IC trainer kit tester",
"Digital Micro",
"Digital Multimeter",
"Digital Storage Oscilloscope","oscilloscope",
"Digital storage adaptor",
"Dual Power Supply (0-30V)","power supply",
"Dual Tracking Power Supply +/-15V",
"DRB",
"Fixed Power supply",
"FPGA kit",
"FM transmitter and receiver trainer kit",
"Function Generator",
"Hartley Oscillator",
"Oscillator",
"High Current power supply kit",
"Instrumentation Amplifier",
"LCR meter","power supply","wires","jumper wire","capacitor","dso","led","multimeter",
"Micro – 86 Microprocessor Design",
"Multi output powersupply",
"NV 4500 NANO kit",
"PLC trainer kit",
"Power Supply (0-30V)",
"PowerSupply 0-300V","breadboad",
"Process control timer",
"RC amplifier kit",
"RC phase shift Oscillator",
"Robotic ARM kit",
"Single power supply (0-30)V, 5A",
"Soldering Station",
"Solar Kit",
"Switch mode power supply",
"Tuned Amplifier kit","capacitor",
"Wein Bridge Oscillator",
"Wireless Data Modem","resistor","multimeter",], 
        location: "ECE Old Block,Right Wing,First Floor" 
    },
    
    
"LIC LAB":{ components: ["Analog Multimeter","resistor","inductor","power supply","diodes","transistor","potentiometer","wires","jumper wire","capacitor","dso","led","multimeter", "CRO", "Decade Inductance Box", "Decade Resistance Box", "Desktop", "Digital IC Trainer", "Digital Multimeter", "Digital to Analog IC Tester", "DSO 100MHz", "Function Generator", "HP Laser jet 1020 plus", "IC Tester", "LCR Meter", "Power Supply (0-30V)", "Pulse Generator", "Scanner", "Wheat Stone Bridge"], location :"ECE Old Block,Left Wing,Ground Floor"},


"DSP LAB":{components:["ADSP BF 533 EZ", "ADSP VI - 2181", "Computers Core i5","computer","desktop", "Digital Multimeter", "Digital Storage Oscilloscope", "DSK TMS320C6416 Kit", "DSK TMS320C6713 Kit", "DSP Color Camera", "DSP Processor - 2181", "DSP Processor - 5416", "Function Generator", "LAN Trainer Kits", "MICRO 50eb kit", "NVIDIA Jetson Xavier NX Development Board", "OMAPL 138/6748 Kit", "Printer (Laser)", "RP LIDAR A2M8 360 Degree 12 Meter Range Scanner", "Server(Intel Xeon Six Core)", "TMS32063X", "Wireless LAN Trainer Kits"
],location:"ECE Old Block,Left Wing,Ground Floor"},


"MICROPROCESSORS AND EMBEDDED SYSTEMS LAB":{components:["ADC Interface Board with MUX-12 bit",
"Advanced Kit-ESA-85","microscope",
"Arduino Board","arduino","aurdino",
"ARM Development Board","microsontrollers",
"ARM Trainer Kit-7","ARM kit",
"ARM Trainer Kit-9",
"Display Interface-8 Digit -7 segment",
"Digital clock Interface",
"Digital Multimeter",
"Development System-8051",
"Evaluation Board for ARM Cortex-M3 (ESA Keil MCB1760-ED)",
"Evaluation Slicker AVR Advanced DBM Board AVR",
"Fire Bird V P89V51RD2 Robotic Research Platform",
"FPGA Trainer kit (Model: SP3E250K)",
"GSM Modem",
"I2C Interface Board (EPROM)",
"IN-Circuit Emulator FOR 8051",
"Interrupt Controller Board-8259",
"Keyboard Interface",
"Key Board and Display Interface Board",
"Laser Jet Printer",
"LVDT Position Control",
"Logic Controller",
"Micro 8085 Trainer Kit",
"Microcontroller 8051/31",
"Microcontroller – In Circuit Debugger",
"Microcontroller – PIC- 16F877",
"PIC Development kit 32 kit",
"PIC Kit In Circuits Debugger",
"PCI DIOT","sensor","led",
"PC Base 32 Channel Logic Analyzer",
"PC Based Universal Speed Control",
"Power supply for Stepper Motor","power supply",
"Programmer board-EPROM",
"Raspberry Pi4 Model B Combo Kit","raspberry","raspberry pi",
"Stepper Motor Interface","stepper motor",
"Temperature Control Kit",
"Temprature Sensor Interfacing board",
"Top View Trainer – Embedded System For 8031",
"Traffic Light Interface",
"Timer Study Card-8253",
"Trainer Kit-68HC11",
"Trainer Kit-8086","usb","pendrive",
"USB PIC Programmer kit",
"Universal Programmer Board",
"LCD Interface Board-16X2",
"Kit with PS-6800",
"Digital Multimeter",
"FPGA Trainer kit (Model: SP3E250K)",
"LCD Interface Board-16X2",
"Trainer Kit-68HC11"], location:" ECE Old Block,Right Wing,First Floor"},

"MICROWAVE AND FIBRE OPTIC LAB" :{components:["90º Twist", "Accessories for 1GHz Microstrip components", "Adaptor", "Advanced Motorized Measurement Trainer", "APD Module", "Broad band Horn Antenna", "CRO", "Comp for Polar Pattern & gain Characteristics of Horn Antenna", "Computers", "Connector", "Connectorisation & Splicing tool kit", "Crystal (mounted with detector)", "DSO", "Dual Power Supply(0-30V)", "E-Plane Tee", "Fiber Optic Light Source", "Fiber Optic Trainer Kit", "Fixed Attenuator", "Frequency Meter (Direct reading type)", "Frequency Meter (micrometer type)", "Function Generator", "Gunn diode", "Gunn Oscillator", "Gunn Power Supply", "HP Laser Printer", "H-Plane Tee", "Isolator/Circulator", "Klystron Mount with tube", "Klystron Power Supply", "Ku Band Optimum Standard Gain Horn-20 dB Freq:15GHz", "Ku band Waveguide section with Flange on Both side-80 mm", "Laserjet printer", "Link- A Fiber Optic Trainer module", "Liquid Dielectric Cell", "MicroWave Trainer Kit(MT9000)", "MicroWave Trainer Kit(MT9001)", "Microstrip Inductor Capacitor and Impedance Matching Circuits", "Microstrip Transmission line trainer kit", "Multihole Directional Coupler", "Multimeter", "Network analyzer 1.5 GHZ", "Numerical Aperture (PMMA fiber)", "Optical Fiber Systems", "Optical Power Meter", "Parabolic Antenna", "Pin diode", "Pin Modulator", "RF cables (5m, 1m )", "Scanner", "Slide Screw Tuner", "Slide Termination", "Single mode fiber cable", "Slotted Section With Probe Carriage", "Solid Dielectric Cell", "Spike Buster (6 way)", "spare  crystal", "S/N:AS394", "S/N:BP116", "SDK-AC0S6/02 Development Kit V2", "SDK-ACR39U-U1/101  Software  Development Kit V2", "Telnet model BTM-20B", "Tripod Stand", "Tunable Probe", "VSWR meter", "Wave Guide Detector Mount", "Wave Guide Stand", "Wave Guide to Coaxial adaptor - Ku band", "Wave Guide to Coaxial adaptor - X band", "Wooden telescopic stand", "Wireless Digital Communication Training System", "X Band Optimum Standard Gain Horn-20 dB Freq:10GHz", "X band Waveguide section with Flange on Both side-115 mm"
],location:"ECE Old Block,Right Wing,Ground Floor"},

"VLSI LAB":{components:["1.Raspberry Pi 3B module-(5nos)", "2.WiFi Module node MCUESP8266-(4nos)", "3.blue tooth module(2 nos)", "Altera kits: DK-DE2-2C35N/UNIV", "Altera kits: DK-DSP-2C70N/UNIV", "Altera kits: UP2-DEV KIT/UNIV", "Altera kits: UP3-DK-1C12/UNIV", "Altera kits: UP3-DK-1C6/UNIV", "Computer", "Computer", "Computer", "DE-115 ALTERA development board", "Digital storage Oscilloscope","oscilloscope",
    
    "DSO(X2002A)-Digital storage Oscilloscope", "FPGA Spartan Trainer kit with USB model", "FPGA Trainer Kit SPARTAN-3E, with Traffic Light Controller, and RTC boards", "FPGA ZED BOARD", "HP Laser Printer (1020)", "HP Printer", "HP Scanner", "LCD Interface card", "Nexys A7 FPGA Trainer board", "Power supply(0-30V) & Multimeter", "power supply","UP3 FPGA Board with traffic light control and real time clock boards", "VLSI DSP Trainer kits", "VLSI Embedded Tool :ALTERA family", "VLSI Trainer Kits (FPGA)", "VLSI Trainer Kits (FPGA)", "VLSI Trainer Kits (FPGA)"
],location:"ECE Old Block,Left Wing,First Floor"},

"COMMUNICATION LAB":{components:["AM/FM Synthesized Signal Signal Generator-150 MHz", "AM Transmitter Kit (Modulation - ACL-01)","am","fm", "AM Receiver Kit (Modulation - ACL-02)", "ATS-2002-A Add On Antenna", "ASK, FSK, PSK Modulation & Demodulation Kit", "B&W TV CCD Camera", "B&W TV Table TV Miniature", "Color TV CCD Camera", "Computers", "Data Formatting & Carrier Demodulation Transmitter", "Data Formatting & Carrier Modulation Transmitter", "Delta, Adaptive Delta & Delta Sigma Modulation/Demodulation Trainer (ST 2105) (DCL -07)", "DPCM/ADPCM Modulation/Demodulation Kit (ADCL 07)", "Digital Multimeter", "Dual Tracking Power Supply-+-15V", "power supply","FDM Trainer Kit", "FM Transmitter Kit (Modulation - ACL-03)", "FM Receiver Kit (Demodulation - ACL-04)", "Function Generator", "Function Generator-Pulse Generator-2MHz", "HP Laser Printer 1020", "Probability Amplified Analyser", "PLC Trainer Kit", "Pulse Generator", "QPSK/DQPSK Modulation Kit (ADCL 02)", "QPSK/DQPSK Demodulation Kit (ADCL 03)", "Sampling and Reconstruction Kit-ST 2101", "Spectrum Analyzer", "Tripple Output Regulated DC Power Supply", "Tripple Power Supply","power supply", "Transmission Line Trainer", "Variable Binary Data Generator for ST 2106/ST 2107-8 Bit"
],location:"ECE Old Block,Right Wing,Ground Floor"},


"LOW POWER SYSTEMS AND COMPUTING LAB":{components:[ "Alterea Kit", "Arduino Board & Raspberry Pi 2 Model","arm","arduino","raspberry pi", "ARM 7 with Interfacing Board", "ARM 9 Evaluation Board", "ARM Trainer Kit", "DC Motor Interface Module", "DSP Starter Kit", "FPGA Trainer Kit", "GSM Module", "GPS Module", "Intel ATOM - Evaluation Module - Donated","laser", "Laser Jet Printer", "Logic Tech Keyboard", "Logic Tech Web Camera", "Microcontroller Kit- 8051","MSP 430 Experimental Board", "PIC Development Board MP Trainer Kit", "Power Supply for ARM Processor", "Raspberry Pi 4 Model B with 4GB RAM with Case", "Web Camera", "Xilinx Spartan 3E FPGA Kit 250K", "Xilinx Spartan 3E FPGA Kit 500E", "Zigbee Module"],location:"ECE Old Block,Left Wing,First Floor"},

"RESEARCH PROJECT LAB":{components:["Arduino-UNO R3 ATMEGA 328P", "Armtronix LoRa WAN", "CC3200 Launchpad", "Computer", "Gas Sensor Unit", "LoRa Gateway Indore Dual Channel", "Node MCU-ESP8266","computer", "Personal Computer-Server", "Personal Computers-(ADS)", "Personal Computers-(synopsis)", "Printer - Laserjet 1020 Plus", "printer","Printer-Laserjet", "Raspberry Pi-3", "Seed Studio Frove IoT Development Kit (Microsoft Azure Edition)", "Signal Analyser-Equipment-set"],location:"ECE Old Block,Right Wing,Ground Floor"},

"PG LAB-II":{components:["Desktop","printer", "HP Laser Printer", "raspberry pi","Raspberry Pi 4 Model B Board (4 GB RAM) with Accessories"],location:"ECE Old Block,Left Wing,First Floor"},

"RESEARCH PROJECT LAB II": {components:["AD-080GE Multispectral Camera with Cables and Mounting Jai","camera","cables", "Antenna Turn Table with MAST","antenna", "C Motes", "Debuggers", "MSO 1.5 GHz", "Mictor Probe-Single Ended, with 40-Pin Cable Connector-E5346A","connector", "Motorized Rotation Stage", "Network Analyzer Integration", "Portable Logic Analyzer-16801A 34-Channel", "RF Cable (2mtr, 1mtr)", "RF Laminates", "RF Termination", "Rotary Joint", "Sensor Board", "Signle Ended Active Probe", "ubi DAC", "WINGZ Multiprotocal Gateway", "WSN Test Bed Components"], location:"ECE Old Block,Right Wing,Ground Floor"},

"WIRELESS TECHNOLOGY LAB":{components:["144MHz, 400MHz and 1200MHz Tri Band 7-inch Vertical Antenna","antenna","power supply", "6V DC 3A Power Supply 100-240VAC IN 50-60Hz", "power supply","PSE Certified", "Academic Lab VIEW Premium Suite (1 User) ASL 1 Seat(s) NOT CONCURRENT 1 year(s) Academic Site License Research Standard Service Program", "Cable Assembly SMA to SMA - 1m", "Communication Systems MIMO Teaching Bundle, 2x USRP-2901, Cables, Courseware", "Dual Band 2.4-2.48 GHz and 4.9-5.9 GHz Vertical Antenna 3dBi Gain", "Software Radio Educational Lab Station: Two NI USRP-2920 Bundles with Lab Materials", "Vert900: 824-960MHz, 1710-1990MHz Dual Band Cellular and ISM Vertical Antenna"], location:"ECE Old Block,Right Wing,Ground Floor"},

"MATERIAL AND MEMS LAB":{components:["2 KVA Servo Voltage Stabilizer", "Basic Plasma Cleaner 230 V", "Centrifuge for Laboratory Purpose", "Computer", "Desiccator 8", "Digital Hot Air Oven", "Eleotrochemical Workstation","printer", "FabX-3D Printer", "Fumehood with 2 Meters Duct Pipe", "High Temperature Refractory Muffle Furnace","furnance", "HIS-119, Heating Mandle with Regulator, 500ml Capacity", "Lineup Flow EZ Microfluidic Pressure Controller", "Remi Make 1Ltr Capacity Magnetic Stirrer with Hot Plate", "Rotary HI Vacuum Pumps & Belt Drive Pump","pump", "Spin Coater - DELTASPIN-I", "Ultrasonic Water Bath Cleaner (2L)", "UM2 YAG Laser Marketing Systems (MI 17482965)", "Weighing Machine: Infra Make", "Z-Axis Lab Jack", "Z-Axis Mounting Stand W/Focusing LED"], location:"ECE Old Block,Right Wing,First Floor"},

"UNDER WATER ACOUSTIC & RESEARCH LAB":{components:["6 Element Array Hydrophone", "8 Channel Data Acquisition System", "Acoustic Amplifier","amplifier","transmitter", "Acoustic Transmitter", "Computer","power supply", "Dual Regulated Power Supply", "Fixtures Arrangements", "Floats", "Hp Laserjet Printer", "Insulation Tester", "Lenovo Z 510 (Intel Core i7 Processor, 8 GB DDR 3)", "Mooring Hardwares", "Mooring Rope", "Portable UPS", "Server System", "Sinker Weight", "Side Scan Sonar & Their Parts", "Sound Velocity Profiler", "Swift SVP", "Transit Case", "Underwater Test Tank (48''x30''x24'')", "Underground Test Tank (88''x11.8''x11.8'')"], location:"ECE Annexure Block,Ground Floor"},

"MICROWAVE TEST FACILTY LAB":{components:["Broadband Horn Antenna JR 12 [1-12GHz]","antenna", "Co-axial to W.G Adapter C-7061","adapter", "DELL Precision 7820 Intel Xeon Silver", "Dielectric Probe Kit 85070E", "Performance Probe with Probe Stand", "Plywood Stand", "RF Absorbers JVMFU12", "RF Absorbers Room Size", "Recurring Charges for Installation and Commissioning", "Recurring Charges Including Accessories", "Standard Gain Horn Antenna -C-5041", "Sylard 184 Silicone Elastometer Kit", "Upgradation of Anechoic Chamber","anechoic chamber", "X-Band Optimum Standard Gain Horn Antenna"], location:"ECE Annexure Block,Ground Floor"},

"TEXTRONIXS DESIGN AND DEVELOPMENT LAB":{components:["HP Z440 Workstation SGH816RD2B, HP V223 (2.15” FHD) LED Backlit LCD Monitor","monitor", "Multi-layer Electronics Fabrication Unit", "Special Purpose Weaving Machine", "Supply for Frame Support for Automatic Weaving Machine"], location:"ECE Annexure Block,Ground Floor"},


}


const componentToLab = {};
for (const lab in labsData) {
    labsData[lab].components.forEach(component => {
        if (!componentToLab[component.toUpperCase()]) componentToLab[component.toUpperCase()] = [];
        componentToLab[component.toUpperCase()].push(lab);
    });
}


function addMessage(content, sender) {
    const message = document.createElement("div");
    message.className = `chat-message ${sender}`;
    message.innerHTML = content;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}


function formatComponentsList(components) {
    return `<ul style="padding-left: 20px; margin-top: 5px;">` +
        components.map(component => `<li>${component}</li>`).join('') +
        `</ul>`;
}




function handleUserInput() {
    const input = userInput.value.trim();
    if (input === '') return;
    
    addMessage(input, "user");

   
    const labMatch = findClosestMatch(input.toUpperCase(), Object.keys(labsData));
    if (labsData[labMatch]) {
        const lab = labsData[labMatch];
        addMessage(
            `<strong>Lab:</strong> ${labMatch}<br>` +
            `<strong>Components:</strong> ${formatComponentsList(lab.components)}<br>` +
            `<strong>Location:</strong> ${lab.location}`,
            "bot"
        );
    }
   
    else {
        const componentMatch = findClosestMatch(input.toUpperCase(), Object.keys(componentToLab));
        if (componentMatch && componentToLab[componentMatch]) {
            const labs = componentToLab[componentMatch];
            addMessage(`<strong>Component:</strong> ${componentMatch}<br><strong>Found in Labs:</strong> ${labs.join(', ')}`, "bot");
        } 
     
        else if (labMatch) {
            addMessage(`Did you mean <strong>${labMatch}</strong>?`, "bot");
            createConfirmationButtons(labMatch);
        } else if (componentMatch) {
            addMessage(`Did you mean <strong>${componentMatch}</strong>?`, "bot");
            createConfirmationButtons(componentMatch, true);
        } else {
            addMessage("Sorry, I couldn't find that lab or component. Please try again.", "bot");
        }
    }

    userInput.value = '';
}

window.addEventListener('scroll', function(event) {
    event.preventDefault();
});

function levenshteinDistance(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));

    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,         
                matrix[i][j - 1] + 1,         
                matrix[i - 1][j - 1] + cost   
            );
        }
    }

    return matrix[a.length][b.length];
}


function similarityScore(input, option) {
    const distance = levenshteinDistance(input.toLowerCase(), option.toLowerCase());
    const maxLength = Math.max(input.length, option.length);
    return 1 - distance / maxLength;
}


function findClosestMatch(input, options) {
    const threshold = 0.4; 
    let bestMatch = '';
    let bestScore = 0;

    options.forEach(option => {
        const score = similarityScore(input, option);

        if (score > bestScore && score >= threshold) {
            bestScore = score;
            bestMatch = option;
        }
    });

    return bestMatch || null;
}



function createConfirmationButtons(suggestedItem, isComponent = false) {
    const confirmationDiv = document.createElement("div");
    confirmationDiv.className = "chat-message bot";
    
    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.onclick = () => {
        if (isComponent) {
            const labs = componentToLab[suggestedItem];
            addMessage(`<strong>Component:</strong> ${suggestedItem}<br><strong>Found in Labs:</strong> ${labs.join(', ')}`, "bot");
        } else {
            const lab = labsData[suggestedItem];
            addMessage(`<strong>Lab:</strong> ${suggestedItem}<br><strong>Components:</strong> ${formatComponentsList(lab.components)}<br><strong>Location:</strong> ${lab.location}`, "bot");
        }
        confirmationDiv.remove();
    };
    
    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.onclick = () => {
        addMessage("Please re-enter the lab or component name.", "bot");
        confirmationDiv.remove();
    };

    confirmationDiv.appendChild(yesButton);
    confirmationDiv.appendChild(noButton);
    chatBox.appendChild(confirmationDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}


sendBtn.addEventListener("click", handleUserInput);
userInput.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') handleUserInput();
});
