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
    const fieldParts = document.querySelectorAll("field-part");
    fieldParts.forEach(fieldPart => {
        fieldPart.addEventListener("click", () => {
            if (hoe.classList.contains("active")) {
                plow(fieldPart);
            }
            else if (wateringCan.classList.contains("active") && fieldPart.classList.contains("farmland")) {
                water(fieldPart);
            }
            else if (seeds.classList.contains("active") && fieldPart.classList.contains("hydrated")) {
                sow(fieldPart);
            }
        });
    });
}

function plow(fieldPart) {
    fieldPart.classList.remove("grass");
    fieldPart.classList.add("farmland");
}

function water(fieldPart) {
    fieldPart.classList.add("hydrated");
}

function sow(fieldPart) {
    fieldPart.dataset.seed = "1";
}

window.addEventListener("load", generateFields);
window.addEventListener("load", attachToolsEvent);
window.addEventListener("load", useToolsEvent);
