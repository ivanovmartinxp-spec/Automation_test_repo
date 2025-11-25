import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
    await page.goto("https://automationintesting.online/");
    console.log(await page.title());
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Restful-booker-platform demo");
});

test("get started link", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    //test commit
    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
        page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
});
