import { test, expect } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';

test("User should be able to Signup Successfully", async ({ page }) => {
    const signup = new SignupPage(page);
    await signup.gotoSignUp();
    await signup.signupAsNewUser();
});
