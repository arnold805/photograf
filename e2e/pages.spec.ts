import { test, expect } from "@playwright/test";

test("should navigate to the home page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/home");
  // Find an element with the text 'About Page' and click on it
  await page.getByText("Welcome to Photograf").click();
  // The new url should be "/about" (baseURL is used there)
});
test("should navigate to the login page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/home");
  // Find an element with the text 'About Page' and click on it
  await page.getByText("Login Page").click();
  // The new url should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("/home/login");
  // The new page should contain an h1 with "About Page"
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Login Page",
  );
});

