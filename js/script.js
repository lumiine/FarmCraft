function generateFields() {
    const fieldParts = document.querySelector("field-parts");
    for(let i = 0; i < 25; i ++){
        const fieldPart = document.createElement("field-part");
        fieldPart.classList.add("grass");
        fieldParts.appendChild(fieldPart);
    }
}

function attachToolsEvent() {
    let lastTool = null;
    const tools = document.querySelectorAll("tool");
    tools.forEach(tool => {
        tool.addEventListener("click", () => {
            if (lastTool) {
                lastTool.classList.remove("active");
            }
            tool.classList.add("active");
            lastTool = tool;
        });
    });
}

function useToolsEvent() {
    const hoe = document.querySelector("#tool-hoe");
    const wateringCan = document.querySelector("#tool-water");
    const seeds = document.querySelector("#tool-sow");
    const scythe = document.querySelector("#tool-harvest");
    const fieldParts = document.querySelectorAll("field-part");
    fieldParts.forEach(fieldPart => {
        fieldPart.addEventListener("click", () => {
            if (hoe.classList.contains("active")) {
                plow(fieldPart);
            }
            else if (wateringCan.classList.contains("active") && fieldPart.classList.contains("farmland")) {
                water(fieldPart);
            }
            else if (seeds.classList.contains("active") && fieldPart.classList.contains("farmland")) {
                sow(fieldPart);
            }
            else if (scythe.classList.contains("active")) {
                harvest(fieldPart);
            }
        });
    });
}

function plow(fieldPart) {
    fieldPart.classList.remove("grass");
    fieldPart.classList.add("farmland");
    setInterval(() => {
        if (probability(0.01) && !fieldPart.classList.contains("hydrated")) {
            fieldPart.classList.remove("farmland");
            fieldPart.classList.add("grass");
        }
    }, 1000);
}

function water(fieldPart) {
    fieldPart.classList.add("hydrated");
    setInterval(() => {fieldPart.classList.remove("hydrated");}, 20000);
}

function sow(fieldPart) {
    fieldPart.dataset.seed = "1";
}

function harvest(fieldPart) {
    let stock = document.querySelector("stock");
    fieldPart.classList.remove("farmland");
    fieldPart.classList.remove("hydrated");
    fieldPart.classList.add("grass");
    if (fieldPart.dataset.seed === "7"){
        stock.textContent = Number(stock.textContent) + 1;
    }
    fieldPart.dataset.seed = "0";
}

function grow() {
    const fieldParts = document.querySelectorAll("field-part");
    fieldParts.forEach(fieldPart => {
        let data = Number(fieldPart.dataset.seed);
        if (data > 0 && data < 7) {
            if(fieldPart.classList.contains("hydrated")) {
                if(probability(0.3)){
                    fieldPart.dataset.seed = String(data + 1);
                }
            }
            else {
                if(probability(0.05)){
                    fieldPart.dataset.seed = String(data + 1);
                }
            }
        }
    });
}

function probability(n) {
    return Math.random() < n;
}

window.addEventListener("load", generateFields);
window.addEventListener("load", attachToolsEvent);
window.addEventListener("load", useToolsEvent);

setInterval(grow, 1000);
