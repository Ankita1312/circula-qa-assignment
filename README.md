# circula-qa-assignment

## Introduction

This repository contains the solution to the QA Analyst home assignment. It includes manual test checklists for Tasks 1, 2, and 3, as well as automated tests (using Playwright with JavaScript) for Task 1.


## Manual QA Tasks

### Task 1: Web - Add Sweden to Sign-up Dropdown

`test_checklist_1.md` contains a detailed test checklist for verifying the correct implementation of adding Sweden to the "Where's your company registered?" dropdown on the sign-up page. The checklist includes functional, UI/UX, localization, and edge case/negative testing.

### Task 2: Android - Add Error Message for Character Limit

`test_checklist_2.md` contains a detailed test checklist for verifying the correct implementation of the error message for the character limit in the purpose field of an expense in the Android app. The checklist includes verifying the display of the character counter, the character limit enforcement, the error state, and the CTA behavior.

### Task 3: iOS - Strong Password Policy

`test_checklist_3.md` contains a detailed test checklist for verifying the correct implementation of the strong password policy in the iOS app. The checklist includes verifying the old password field, the new password criteria (length, numerical character, letter), the CTA activation, and the error/success messages.

## Automated Tests (Task 1)

The `test_automation/` folder contains automated tests for Task 1, implemented using Playwright with JavaScript.

## How to Run the Tests (Task 1 Automation)

### Prerequisites:

*   Node.js and npm installed.

### Steps:

1.  Clone the repository.
2.  Navigate to the `test_automation/` folder:

    ```
    cd task1/test_automation
    ```

3.  Install the dependencies:

    ```
    npm install
    ```

4.  Run the tests:

    ```
    npx playwright test
    ```

    You can run the tests in different modes:

    *   **Headless mode (default):** Runs tests without opening a browser window.

        ```
        npx playwright test
        ```

    *   **Headed mode:** Opens a browser window to show the tests running.

        ```
        npx playwright test --headed
        ```

    *   **UI mode:** Opens the Playwright UI for interactive test exploration and debugging.

        ```
        npx playwright test --ui
        ```


  