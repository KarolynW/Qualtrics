//<!-- Step 1: Include jQuery and Moment.js in the header of your Qualtrics survey -->
//<!-- Go to Look & Feel > Advanced > Header in your Qualtrics survey and add the following: -->

//<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
//<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>

//<!-- Step 2: Add this JavaScript to the Date of Birth question in Qualtrics -->
Qualtrics.SurveyEngine.addOnPageSubmit(function() {
    // Get the Date of Birth value from the text entry box
    var dob = jQuery("#" + this.questionId + " .InputText").val();

    // Use Moment.js to calculate the age in years
    // The format 'DD/MM/YYYY' is for UK date format (day/month/year)
    var Age = moment().diff(moment(dob, 'DD/MM/YYYY', true), 'years');
    
    var AgeGroup;

    // Determine the age group based on the calculated age
    if (Age >= 18 && Age <= 24) {
        AgeGroup = '18-24';
    } else if (Age >= 25 && Age <= 34) {
        AgeGroup = '25-34';
    } else if (Age >= 35 && Age <= 44) {
        AgeGroup = '35-44';
    } else if (Age >= 45 && Age <= 54) {
        AgeGroup = '45-54';
    } else if (Age >= 55 && Age <= 64) {
        AgeGroup = '55-64';
    } else if (Age >= 65 && Age <= 74) {
        AgeGroup = '65-74';
    } else if (Age >= 75) {
        AgeGroup = '75+';
    }

    // Set the embedded data fields for Age and AgeGroup
    if (AgeGroup) {
        Qualtrics.SurveyEngine.setEmbeddedData('Age', Age);  // Store the calculated age
        Qualtrics.SurveyEngine.setEmbeddedData('AgeGroup', AgeGroup);  // Store the age group
    } else {
        // Optional: If needed, handle respondents under 18 or invalid inputs
        // For example, you could display an error message or prevent form submission.
    }
});

/*
Step 3: Instructions for use:

1. **Add jQuery and Moment.js:**
   - Go to **Look & Feel** in your Qualtrics survey.
   - Click on the **Advanced** tab and add the following to the **Header**:
     <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>

2. **Create a Date of Birth Question:**
   - Add a **Text Entry** question to capture the respondent’s Date of Birth.
   - In the **Validation Type** settings for the question, select **Date** and choose the appropriate date format. For UK format, choose **DD/MM/YYYY**.

3. **Set up Embedded Data Fields:**
   - In the **Survey Flow**, add two embedded data fields called `Age` and `AgeGroup` to store the respondent’s calculated age and age group.
   - This will allow you to use these values later in the survey or in reports.

4. **Add the JavaScript to the Date of Birth question:**
   - Click on the gear icon for the Date of Birth question and select **Add JavaScript**.
   - Paste the JavaScript code provided above into the **JavaScript editor**.

5. **Adjust for Date Format (if necessary):**
   - The script currently uses the UK date format ('DD/MM/YYYY'). 
   - If you're using a different format (like US format 'MM/DD/YYYY'), update this line:
     var Age = moment().diff(moment(dob, 'DD/MM/YYYY', true), 'years');
     Change 'DD/MM/YYYY' to the appropriate format, such as 'MM/DD/YYYY' for US.

6. **Testing:**
   - After setting up the script, test the survey to ensure the age is calculated correctly and the correct age group is assigned.
   - Check the embedded data in the survey responses to verify that the data fields `Age` and `AgeGroup` are being set as expected.
*/

