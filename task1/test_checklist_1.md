# Task 1: Web - Add Sweden to Sign-up Dropdown

### General Notes:

*   The sign-up process is divided into multiple steps/sections.
*   The "Where's your company registered?" dropdown is on the third step of the signup form.

### I. Functional Testing:

1.  Verify that by default, "Germany" is selected in the "Where's your company registered?" dropdown field..
    *   Expected Result: "Germany" should be the default location.
  
2.  Verify that "Sweden" is present in the "Where's your company registered?" dropdown list on the sign-up page.
    *   Expected Result: "Sweden" is displayed in the dropdown in alphabetical order.

3.  Verify that the user can select "Sweden" from the dropdown.
    *   Expected Result: After selecting "Sweden," it should be displayed as the selected option in that field.

4.  Verify that the form can be successfully submitted when "Sweden" is selected as the company registration country.
    *   Expected Result: After selecting "Sweden" and adding all mandatory fields when user clicks "create an account" button then it successfully submits the information and proceeds the user to the next step.

5.  Verify that when user types "SWED" in the country field,it shows "Sweden" AND "Switzerland" as suggestions.
    *   Expected Result: When typing "SWED," both "Sweden" and "Switzerland" appear as suggestions as it is filtering the countries that *contain* "SWED" in sequential order. The matching sequence can start anywhere within the country name but it should be sequential.

6.  Verify that when typing letter are not in sequential order for eg "SDEW", it does not show Sweden or Switzerland.
    *   Expected Result: The dropdown does not show any suggestions when letters are typed out of order. This is to confirm that the search requires sequential matching of characters.

7.  Verify that pressing "Enter" after typing a country name (eg "Sweden") in the country field does not automatically select the country.
    *   Expected Result: Pressing "Enter" closes the dropdown and triggers the "Company registration country is required" error message if no country is explicitly selected from the list.

### II. UI/UX Testing:

8.  Verify that hovering over a country, highlights that particular option in the dropdown.
    *   Expected Result: When hovering over a country, its background color changes to indicate focus.

9.  Verify that selecting a country highlights it with a tick mark *within the dropdown list* and changes the text color.
    *   Expected Result: After selecting a country, the selected country inside the dropdown is highlighted with a tick mark next to it, and the text color is changed.

### III. Edge Cases/Negative Testing:

10. Verify that typing a non-existent country (e.g., "werwer") displays an appropriate message.
    *   Expected Result: The message "Can't find your country? Contact us." is displayed in the dropdown and  when user clicks "contact us" they are redirected to the contact page.

11. Verify that when user tried to create the account the form selecting a country then an error message.
    *   Expected Result: The error message "Company registration country is required" is displayed.

12. Verify that there are no duplicate entries for any countries in the dropdown list.
    *   Expected Result: Each country appears only once in the list.

13. Verify how the application handles invalid characters or special symbols entered as in input in country field.
    *   Expected Result: The application should handle invalid inputs smoothly without crashing or showing unexpected behavior.

### IV. Compatibility Testing:

14. If required, this feature should be tested on different browsers (Chrome, Firefox, Safari, Edge).
    *   Expected Result: The functionality works correctly and the UI appears as expected on all specified browsers.

15. If required, this feature should also work on the viewports (desktop, tablet and mobile)
    *   Expected Result: The functionality works correctly and the UI appears as expected on all specified viewports.
