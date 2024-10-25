document.addEventListener("DOMContentLoaded", function () {
    // Generate random code
    function generateRandomCode() {
        let generatedCode = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedCode += characters[randomIndex];
        }

        return generatedCode;
    }

    // Display the generated code
    const codeElement = document.getElementById("generated-code");
    const generatedCode = generateRandomCode();
    codeElement.textContent = generatedCode;

    // Disable the submit button initially
    const submitButton = document.getElementById("submit-button");
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "grey";

    // Enable submit button when the correct code is entered
    const codeInput = document.getElementById("code-input");
    codeInput.addEventListener("input", function () {
        if (codeInput.value === generatedCode) {
            submitButton.disabled = false;
            submitButton.style.backgroundColor = "";
        } else {
            submitButton.disabled = true;
            submitButton.style.backgroundColor = "grey";
        }
    });
});
