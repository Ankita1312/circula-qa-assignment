## Task 2: Android - Add Error Message for Character Limit in Purpose Field

### Functional Testing

1. Verify that character counter is not displayed when the Purpose field has less than 500 characters.
   * Expected Result: The character counter is hidden.

2. Verify that the character counter appears when you reach 500 characters in the Purpose field.
   * Expected Result: 
     * A character counter appears below the purpose field as soon as charater count reaches to "500".
     * The counter updates immediately as you add or remove characters, withoutany delay.

3. Verify that suggestions is no longer displayed after entering more than 100 characters in the Purpose field.
   - Expected Result: No suggestions are displayed after surpassing 100 characters.

4. Verify CTA button enables/disables based on the Purpose field content:
   - Expected Results:
     * When the Purpose field is empty, CTA is disabled .
     * When more than 1000 characters are entered, CTA is disabled .
     * When the Purpose box has 1000 or less characters, CTA is enabled.

5. Verify how the error state appears when the field has more than 1000 characters and how it behaves when reducing the characters back to 1000 or less.
   * Expected Results:
     * All text in the Purpose field and character counter turn red on exceeding 1000 characters.
     * The error state disappears (text returns to normal color) once the character count is 1000 or less.

6. Verify that the field remains editable after reaching the maximum limit (1000 characters).
   * Expected Result: You can still add, delete, or edit text even after reaching the limit.

### UI/UX Testing

1. Verify the appearance of the CTA button based on its state:
   * Expected Results:
     * CTA button is yellow when active.
     * CTA button is grey when inactive.

2. Verify that the character counter is according to the design specifications.
   * Expected Result: The counter's position, font style, size, and color is according to the provided design specifications.

3. Verify word wrap functionality in the Purpose field:
   * Expected Results:
     * Text wraps correctly to new lines without cutting words midway.
     * Wrapped text remains readable and properly spaced between lines.
     * Word wrap behavior is consistent across different Android devices and screen sizes.

### Boundary and Edge Cases

1. Test entering exactly 999, 1000, and 1001 characters to ensure correct error states and CTA behavior:
   * Expected Results:
     * 999 characters: No error state, CTA enabled (yellow).
     * 1000 characters: No error state, CTA enabled (yellow).
     * 1001 characters: Error state triggered (text & counter red), CTA disabled (grey).
