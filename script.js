const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

const getRandomColor = () => {
    // Generating a random color in hexadecimal format
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    if (isRandom) {
        // If isRandom is true, update the color inputs value with random color
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    // Creating a gradient string using the color input values 
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`
    gradientBox.style.background = gradient;
    textarea.value = `background: ${gradient};`;
}

const copyCode = () => {
    // Copying text area value and updating the copy button text
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Code copied";
    setTimeout(() => copyBtn.innerText = "Copy Code", 1600)
}

colorInputs.forEach(input => {
    // Calling generateGradient on each color input clicks
    input.addEventListener('input', () => generateGradient(false));
});

selectMenu.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode)

