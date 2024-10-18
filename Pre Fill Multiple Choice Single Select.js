// Qualtrics JavaScript for auto-selecting a single-choice option based on an embedded data field

Qualtrics.SurveyEngine.addOnload(function() {
    // Retrieve the embedded data field value from the survey flow.
    // Replace 'YourEmbeddedDataField' with the name of your embedded data field.
    var embeddedValue = "${e://Field/YourEmbeddedDataField}";

    // Automatically select the choice based on the value of the embedded data field.
    // The numbers in setChoiceValue() correspond to the actual choice codes in Qualtrics.
    // Use the instructions below to view the actual codes, as they may not be consecutive.

    if (embeddedValue == "Option1Value") this.setChoiceValue(1, true);  // Example: Option 1
    if (embeddedValue == "Option2Value") this.setChoiceValue(2, true);  // Example: Option 2
    if (embeddedValue == "Option3Value") this.setChoiceValue(3, true);  // Example: Option 3
    if (embeddedValue == "Option4Value") this.setChoiceValue(4, true);  // Example: Option 4
    if (embeddedValue == "Option5Value") this.setChoiceValue(5, true);  // Example: Option 5
    if (embeddedValue == "OtherValue") this.setChoiceValue(6, true);    // Example: Option 6
});

Qualtrics.SurveyEngine.addOnReady(function() {
    // Code to run when the page is fully displayed (if needed)
});

Qualtrics.SurveyEngine.addOnUnload(function() {
    // Code to run when the page is unloaded (if needed)
});

/*
INSTRUCTIONS:

1. **Set Up the Embedded Data Field:**
   - Go to your survey's 'Survey Flow' in Qualtrics.
   - Add an 'Embedded Data' element at the start of the flow (or wherever it's relevant).
   - Name the embedded data field (for example, 'YourEmbeddedDataField').
   - Ensure this field captures the relevant data you need, such as through logic, previous questions, or URL parameters.

2. **Viewing Choice Codes (Important!):**
   - Open the multiple-choice question where you want to use this script.
   - Click on the question in the editor.
   - On the left-hand panel, find the option to 'Recode Values'. You don't need to change anything here; just click it to see the actual codes for each choice.
   - Note that these codes might not be consecutive, especially if options were deleted or moved.
   - Write down or take note of these codes to match them with your embedded data values in the script.
     For example:
     - Option 1 could have a recode value of 1,
     - Option 2 could have a recode value of 4 (if options were deleted or rearranged), and so on.

3. **Modify the JavaScript Code:**
   - Replace 'YourEmbeddedDataField' with the actual name of your embedded data field.
   - Replace 'Option1Value', 'Option2Value', etc., with the expected values of your embedded data field. 
     For example, if your embedded data captures a user's department, you might use values like 'HR', 'IT', 'Finance', etc.
   - Match each embedded data value to the corresponding choice code from the recode values you found in Step 2.
     - Example: If 'HR' corresponds to recode value 1, use:
       `if (embeddedValue == "HR") this.setChoiceValue(1, true);`

4. **How the Script Works:**
   - When the page loads, the script will check the embedded data field's value.
   - Based on that value, it will automatically select the corresponding choice by setting the appropriate choice value.
   - Ensure that the codes in `setChoiceValue()` match the actual recode values of your question's choices, not just their position on the list.

5. **Testing:**
   - Test the survey by using different values for the embedded data field to ensure that the correct option is selected each time.
   - Use browser developer tools (F12) to inspect for any issues or errors if necessary.

This script allows dynamic selection of a choice based on pre-loaded data, making your Qualtrics survey more personalized and efficient.
*/
