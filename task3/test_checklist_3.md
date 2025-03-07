## Task 3: iOS - Strong Password Policy

### Functional Testing

1. Verify that the "Current password" and "New password" fields are visible and accept user input.
   * Expected Result: Both fields are displayed and users is allowed to enter passwords.

2. Verify that the new password meets all the requirement criteria:
   * Expected Results:
     * The new password must be at least 8 characters long.
     * The new password must contain at least one letter.
     * The new password must contain at least one numerical character.

3. Verify that the password criteria are displayed below the "New password" field and dynamically update as users type.
   * Expected Result: Each criterion turns green when fulfilled, matching the design.

4. Verify that the CTA activates only when:
   * The "Current password" field is filled.
   * The "New password" meets all criteria.
   * Expected Result: The CTA button remains grey (inactive) until both conditions are met, then it turns yellow (active).

5. Verify that clicking the "Save" button triggers validation for the current password.
   * Expected Result: Validation starts only after user taps "Save" button.

6. Verify the error message when the current password is incorrect.
   * Expected Result: A red error message ("Your password is incorrect, please check it") appears as per design.

7. Verify the success message when the current password is correct, and the new password meets all criteria.
   * Expected Results:
     * A green success message ("Your password was updated") appears as per design.
     * The user is redirected to the settings page.

8. Verify that users can toggle password visibility for both fields using the show/hide icon.
   * Expected Results:
     * Password toggles between hidden (dots) and visible text.
     * Icons update dynamically to reflect the current visibility state.


### UI/UX Testing

1. Verify that both fields match design specifications, including placeholder text, spacing, and icons for toggling visibility.
   * Expected Result: Fields look consistent with provided designs.

2. Verify smooth navigation to the settings page after a successful update.
   * Expected Result: Users are redirected without any delay.


### Boundary and Edge Cases

1. Enter a valid current password but a new password that fulfills only some criteria (e.g., missing a number or letter).
   * Expected Result: The criteria which are it met remain grey and CTA stays disabled.
