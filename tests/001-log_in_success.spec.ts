import { test, expect } from "@playwright/test";

test.only("has title", async ({ page }) => {
    await page.goto("https://automationintesting.online/");
    console.log(await page.title());
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Restful-booker-platform demo");
});

test("get started link", async ({ page }) => {
    await page.goto("https://automationintesting.online/");



    
    await page.getByRole("link", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
        page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
});
