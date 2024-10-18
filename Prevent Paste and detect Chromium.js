// JavaScript for Qualtrics to Disable Paste and Detect Selenium WebDriver (for automated testing)

// Instructions:
// 1. First, add two embedded data fields in your Survey Flow: `PasteAttempted` and `IsWebDriver`.
// 2. Copy and paste this entire script into the "Add JavaScript" section of the desired Qualtrics question(s).
// 3. This script will disable paste functionality in all text input and text area fields, and detect if Selenium WebDriver (used in automated testing) is running.
// 4. Test your survey to ensure the embedded data fields are populated as expected.

Qualtrics.SurveyEngine.addOnload(function() {
    // Step 1: Disable paste for all text inputs and textareas
    var inputs = document.querySelectorAll('input[type="text"], textarea'); // Select all text inputs and text areas
    inputs.forEach(function(input) {
        input.addEventListener('paste', function(e) { // Add paste event listener to each input
            // Step 2: If paste is attempted, set the 'PasteAttempted' embedded data field to "True"
            Qualtrics.SurveyEngine.setEmbeddedData("PasteAttempted", "True");
            e.preventDefault(); // Prevent the paste action
        });
    });

    // Step 3: Detect if Selenium WebDriver (automated testing environment like Chromium) is being used
    var isWebDriver = navigator.webdriver; // Check for WebDriver via navigator.webdriver property
    // Step 4: Set the 'IsWebDriver' embedded data field to "True" or "False"
    Qualtrics.SurveyEngine.setEmbeddedData("IsWebDriver", isWebDriver ? "True" : "False");
});

// INSTRUCTIONS:
//
// 1. Set Up Embedded Data Fields:
//    - Go to Survey Flow in your Qualtrics survey.
//    - Click + Add a New Element Here and select Embedded Data.
//    - Add two fields: PasteAttempted and IsWebDriver. Leave the values blank, as they will be populated dynamically by the script.
//    - Click Save Flow.
//
// 2. Adding the JavaScript to the Survey:
//    - Open the specific question where you want to disable paste and detect WebDriver usage.
//    - Click on the gear icon for the question, and select Add JavaScript from the dropdown.
//    - Copy and paste this entire script into the JavaScript editor.
//
// 3. How the Code Works:
//    - Disabling Paste:
//      - The script will find all text input fields (input[type="text"]) and text areas (textarea) and attach a listener to detect paste attempts.
//      - If a paste attempt is detected, it is blocked (e.preventDefault()), and the embedded data field PasteAttempted is set to "True". You can use this field to track paste attempts.
//    - Detecting Selenium WebDriver:
//      - The script checks if the browser is being controlled by Selenium WebDriver (via navigator.webdriver), a property used for automated testing in environments like Chromium.
//      - If WebDriver is detected, the embedded data field IsWebDriver is set to "True". Otherwise, it is set to "False".
//
// 4. Testing the Survey:
//    - Preview the survey and attempt to paste into a text input or text area. The paste action should be blocked, and PasteAttempted should be set to "True" in the survey response data.
//    - Test the WebDriver detection by running the survey in an automated testing environment (e.g., Selenium or Chromium). The IsWebDriver embedded data field should reflect "True" in the response data.
//
// 5. Using Embedded Data in Logic:
//    - Once the script is in place and the embedded data fields are being populated, you can add logic to your survey based on the values of PasteAttempted or IsWebDriver.
//      - For example, show a warning message or block submission if a paste attempt is detected or if WebDriver is being used.
//
// 6. Optional Enhancements:
//    - You can add additional logic in the paste event to show a message:
//      alert("Pasting is disabled for this field.");
//    - You can also add conditional logic to block submission or take specific actions based on WebDriver detection.
//
// This script will allow you to block paste functionality in a Qualtrics survey and detect automated testing tools.

