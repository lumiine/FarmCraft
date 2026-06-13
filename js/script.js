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

function plow() {
    const hoe = document.querySelector("#tool-hoe");
    const fieldParts = document.querySelectorAll("field-part");

    fieldParts.forEach(fieldPart => {
        fieldPart.addEventListener("click", () => {
            if (hoe.classList.contains("active")) {
                fieldPart.classList.remove("grass");
                fieldPart.classList.add("farmland");
            }
        })
    })
}

window.addEventListener("load", generateFields);
window.addEventListener("load", attachToolsEvent);
window.addEventListener("load", plow);