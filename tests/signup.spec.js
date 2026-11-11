import { test, expect } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';

test("User Should able to Signup Successfully", async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.gotoSignUp();
    await signup.signupAsNewUser();

    // Assertions: verify signup completed and onboarding popup closed
    await expect(signup.signupbtn).not.toBeVisible();
    await expect(signup.hidepopup).not.toBeVisible();
    await expect(page).toHaveURL(process.env.EXPECTED_URL);
});
