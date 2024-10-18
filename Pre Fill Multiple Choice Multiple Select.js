// Qualtrics JavaScript for pre-selecting multiple-choice options based on an embedded data field

Qualtrics.SurveyEngine.addOnload(function() {
    // Retrieve the embedded data field 'YourEmbeddedDataField' from the survey flow
    var multi = "${e://Field/YourEmbeddedDataField}";

    // Split the embedded data field into an array by separating on ', '.
    // Important: Ensure that the answer choices do not contain commas, as Qualtrics stores multiple selections as a comma-separated list.
    var arr1 = multi.split(', ');

    // Loop through the array and set the choice values based on the embedded data values
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] == "Option1Value") this.setChoiceValue(1, true);  // Example: Option 1
        if (arr1[i] == "Option2Value") this.setChoiceValue(2, true);  // Example: Option 2
        if (arr1[i] == "Option3Value") this.setChoiceValue(3, true);  // Example: Option 3
        if (arr1[i] == "Option4Value") this.setChoiceValue(4, true);  // Example: Option 4
        if (arr1[i] == "Option5Value") this.setChoiceValue(5, true);  // Example: Option 5
        if (arr1[i] == "OtherValue") this.setChoiceValue(6, true);    // Example: Option 6
    }
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
   - Add an embedded data field (e.g., 'YourEmbeddedDataField') to your survey's 'Survey Flow'.
   - This embedded data should contain a comma-separated list of values based on respondent selections.
     For example: "Option1Value, Option2Value, Option3Value".
   - Ensure that no commas are used in the answer choices themselves. Qualtrics uses commas to separate multiple choices, 
     so having commas in the answer text would cause issues when splitting the list.

2. **Viewing Choice Codes:**
   - Click on the multiple-choice question in the Qualtrics editor.
   - On the left-hand panel, click 'Recode Values' to see the code numbers for each option. 
   - Even if options have been deleted or rearranged, the recode values may not be consecutive, so it’s essential to check these.

3. **Modify the JavaScript Code:**
   - Replace 'YourEmbeddedDataField' with the actual name of your embedded data field.
   - Ensure that the values in the `arr1[i] == "YourValue"` conditions match the possible values in your embedded data field.
     For example, if 'Option1Value' is a possible value in the 'YourEmbeddedDataField', you should have:
     `if (arr1[i] == "Option1Value") this.setChoiceValue(1, true);`
   - Update the `setChoiceValue()` numbers to match the recode values of your options, as seen in Step 2.

4. **How the Script Works:**
   - When the survey page loads, the embedded data field 'YourEmbeddedDataField' is split into an array of individual values.
   - The script loops through the array and compares each value to predefined values like "Option1Value", "Option2Value", etc.
   - For each match, the corresponding choice in the survey is automatically selected using `setChoiceValue()`.

5. **Testing:**
   - Test the survey to ensure that multiple selections are being pre-filled correctly based on the embedded data field.
   - If there are any issues, check the developer console in your browser for debugging.

This script allows multiple choices to be pre-selected based on data stored in an embedded field, making the survey more dynamic and personalized.
*/
