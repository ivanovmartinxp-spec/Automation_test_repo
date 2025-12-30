<div align="center">

# 🎭 Playwright E2E Test Suite

A comprehensive automation suite built with Playwright and TypeScript to ensure application quality.

<!--[![Build Status](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/playwright.yml/badge.svg)](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/playwright.yml)-->
[![Playwright](https://img.shields.io/badge/powered%20by-Playwright-2EAD33?logo=playwright)](https://playwright.dev/)
![TypeScript](https://img.shields.io/badge/written%20in-TypeScript-3178C6?logo=typescript)

</div>

---

### **📖 Table of Contents**
- [About The Project](#-about-the-project)
- [🚀 Getting Started](#-getting-started)
- [🧪 Running Tests](#-running-tests)
- [📂 Project Structure](#-project-structure)

---

### **🎯 About The Project**

This project provides a robust framework for end-to-end testing of a web application. It leverages the power of Playwright for reliable and fast browser automation, with a clean structure based on Page Object Models (POM).

**Key Features:**
- **Modern Tech:** Utilizes TypeScript for type safety and Playwright for its modern features.
- **Page Objects:** Clear separation of concerns with a well-defined Page Object Model structure.
- **CI/CD Ready:** Includes a GitHub Actions workflow for automated test execution.
- **Comprehensive Scenarios:** Covers core functionalities like login, booking, and form submissions.

---

### **🚀 Getting Started**

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd Automation_test_repo
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

---

### **🧪 Running Tests**

Execute the full test suite with a single command. Playwright's UI Mode is also great for debugging.

- **Run all tests (headless):**
  ```sh
  npx playwright test
  ```
- **Run tests in UI Mode:**
  ```sh
  npx playwright test --ui
  ```
- **Run a specific test file:**
  ```sh
  npx playwright test tests/e2e/001-login.spec.ts
  ```

---

### **📂 Project Structure**

The project follows a standard convention for Playwright tests. The file structure is organized as follows:

<details>
<summary>Click to expand</summary>

```
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── src_Pages/
│   ├── admin-login-page.ts
│   ├── admin-page.ts
│   ├── home_page.ts
│   ├── hotel_app_page.ts
│   └── src_components/
│       ├── booking_form.component.ts
│       ├── check_availability.component.ts
│       ├── contact_form.component.ts
│       ├── home_page.components.ts
│       └── rooms.component.ts
├── tests/
│   ├── e2e/
│   │   ├── 001-login.spec.ts
│   │   ├── 002-booking.spec.ts
│   │   ├── 003-contact_form.spec.ts
│   │   └── 004-room_creation.spec.ts
│   ├── fixtures/
│   │   ├── login_fixtures.ts
│   │   └── test_fixtures.ts
│   └── validations/
│       ├── 001-contact_validations.spec.ts
│       ├── 003-bookings_validations.spec.ts
│       ├── 004-login_page_validations.spec.ts
│       └── 004-room_creation_validations.spec.ts
├── .gitignore
├── package-lock.json
├── package.json
└── playwright.config.ts
```

</details>
