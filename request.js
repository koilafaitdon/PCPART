fetch("https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/cpu.json", {
    method: "GET",
})
.then(function(response){
    response.json()
    .then(function(converted){
        displayCPUs(converted); 
    }) 
});

function displayCPUs(cpuData) {
    const dropdown = document.getElementById("CPU");
    
    dropdown.innerHTML = "";

    for (var cpu = 0; cpu < cpuData.length; cpu++) {
        let expandingList = document.createElement("option");
        expandingList.value = cpuData[cpu].name;
        expandingList.innerText = cpuData[cpu].name;
        dropdown.appendChild(expandingList);
    }
}

function checkBox() {
    const checkboxCPU = document.getElementById("cpu-checkbox");
    const dropdown = document.getElementById("CPU");

    fetch("https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/cpu.json", {
        method: "GET",
    })
    .then(function(response){
        response.json()
        .then(function(converted){
            const filteredCPUs = converted.filter(function(cpu) {
                return (checkboxCPU.checked && cpu.name.includes("Intel")) ||
                       (!checkboxCPU.checked && cpu.name.includes("AMD"));
            });

            displayCPUs(filteredCPUs);
        }) 
    });
}
