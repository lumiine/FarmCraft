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
            tool.classList.add("active");
            if (lastTool) {
                lastTool.classList.remove("active");
            }
            lastTool = tool;
        });
    });
}

window.addEventListener("load", generateFields);
window.addEventListener("load", attachToolsEvent);