let generatedCode = '';
let codeInput, submitButton, getCode, btnValue;

function disableButton(isDisabled) {
    submitButton.disabled = isDisabled;

    // Change button appearance based on disabled state
    if (isDisabled) {
        submitButton.style.backgroundColor = "grey";
        submitButton.style.cursor = "not-allowed";
        submitButton.style.opacity = "0.7";
    } else {
        submitButton.style.backgroundColor = "";
        submitButton.style.cursor = "pointer";
        submitButton.style.opacity = "1";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Generate random code
    generatedCode = generateRandomCode();
    codeInput = document.getElementById("code-input");
    submitButton = document.getElementById("submit-button");

    const codeElement = document.getElementById("generated-code");
    codeElement.textContent = generatedCode;

    // Disable the submit button initially
    disableButton(true);

    // Add event listener to evaluate code input
    codeInput.addEventListener("input", function () {
        evaluateCode();
    });
});

// Generate random code function
function generateRandomCode() {
    let generatedCode = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedCode += characters[randomIndex];
    }

    return generatedCode;
}

// Evaluate the code input function
function evaluateCode() {
    getCode = codeInput.value.trim();
    const cleanedGeneratedCode = generatedCode.trim();

    // If the entered code matches the generated code, enable the submit button
    if (getCode === cleanedGeneratedCode) {
        disableButton(false);
    } else {
        disableButton(true);
    }
}
