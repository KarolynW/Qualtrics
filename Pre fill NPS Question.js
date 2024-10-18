// Qualtrics JavaScript for Prefilling an NPS Question Based on Embedded Data

// Instructions:
// 1. First, ensure that the NPS score is being captured in an embedded data field (e.g., 'NPSScore') in your Survey Flow.
// 2. Copy and paste this script into the "Add JavaScript" section of your NPS question in Qualtrics.
// 3. This script will prefill the NPS question based on the embedded data field, selecting the corresponding NPS score (0-10).
// 4. Test your survey to ensure the NPS question is correctly prefilled based on the embedded data value.

Qualtrics.SurveyEngine.addOnload(function() {
    // Step 1: Fetch the NPS score from the embedded data field
    var npsScore = "${e://Field/NPSScore}"; // Embedded data field storing the NPS score (generic name 'NPSScore')

    // Step 2: Preselect the corresponding radio button based on the NPS score (0-10)
    // The NPS score ranges from 0 to 10, so we use 'setChoiceValue()' to automatically select the appropriate option.
    if(npsScore == "0") this.setChoiceValue(0, true); // Selects the first option (0)
    if(npsScore == "1") this.setChoiceValue(1, true); // Selects option 1
    if(npsScore == "2") this.setChoiceValue(2, true); // Selects option 2
    if(npsScore == "3") this.setChoiceValue(3, true); // Selects option 3
    if(npsScore == "4") this.setChoiceValue(4, true); // Selects option 4
    if(npsScore == "5") this.setChoiceValue(5, true); // Selects option 5
    if(npsScore == "6") this.setChoiceValue(6, true); // Selects option 6
    if(npsScore == "7") this.setChoiceValue(7, true); // Selects option 7
    if(npsScore == "8") this.setChoiceValue(8, true); // Selects option 8
    if(npsScore == "9") this.setChoiceValue(9, true); // Selects option 9
    if(npsScore == "10") this.setChoiceValue(10, true); // Selects option 10
});

Qualtrics.SurveyEngine.addOnReady(function() {
    // Optional: Place additional JavaScript here if you need something to run when the page is fully displayed
});

Qualtrics.SurveyEngine.addOnUnload(function() {
    // Optional: Place additional JavaScript here if you need something to run when the page is unloaded
});

/*
INSTRUCTIONS:

1. **Setting Up the Embedded Data:**
   - Go to your **Survey Flow** in Qualtrics.
   - Ensure that you have an embedded data field named `NPSScore` (or a similar generic name) that stores the NPS score.
   - This embedded data should be populated either through previous logic, survey questions, or imported data.

2. **Adding the JavaScript to the NPS Question:**
   - Open the NPS question in your survey where you want to prefill the score.
   - Click on the **gear icon** for the question and select **Add JavaScript**.
   - Paste this script into the **JavaScript editor**.
   
3. **How the Script Works:**
   - The script fetches the value from the embedded data field (`NPSScore` in this example) and then matches it to the corresponding radio button for the NPS question.
   - It uses the `setChoiceValue()` function, which is a built-in Qualtrics method, to automatically select the appropriate option based on the NPS score.

4. **Testing:**
   - Preview your survey and ensure that the NPS question is being prefilled based on the embedded data value.
   - Test different embedded data values (from 0 to 10) to confirm that the correct radio button is selected each time.

5. **Customizing the Script:**
   - If your embedded data field has a different name (other than `NPSScore`), modify the line:
     ```javascript
     var npsScore = "${e://Field/NPSScore}";
     ```
     Replace `NPSScore` with the name of your embedded data field.

6. **Additional JavaScript:**
   - You can place additional JavaScript within the `addOnReady` or `addOnUnload` functions to run scripts when the page loads fully or unloads.
   
This script will automatically prefill the NPS score (from 0-10) based on data you've collected earlier in the survey or imported as embedded data.
*/
