fetch("https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/cpu.json", {
    method: "GET",
})
.then(function(response){
    response.json()
    .then(function(converted){
        displayCPUs(converted); // Affiche tous les CPUs initialement
    }) 
});

function displayCPUs(cpuData) {
    const dropdown = document.getElementById("CPU");

    // Supprime toutes les options actuelles du dropdown
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
            // Filtrer les CPUs en fonction de la case à cocher
            const filteredCPUs = converted.filter(function(cpu) {
                // Utilisez `String.prototype.includes` pour vérifier si "Intel" ou "AMD" est présent dans le nom
                return (checkboxCPU.checked && cpu.name.includes("Intel")) ||
                       (!checkboxCPU.checked && cpu.name.includes("AMD"));
            });

            displayCPUs(filteredCPUs);
        }) 
    });
}
