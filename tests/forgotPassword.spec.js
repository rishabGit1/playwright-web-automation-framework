const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ForgotPasswordPage } = require('../pages/ForgotPasswordPage');

test('User Should able to Forget Password Successfully', async ({ page }) => {


    const login = new LoginPage(page);
    const forgotpass = new ForgotPasswordPage(page);

    await login.gotoLoginPage();
    await forgotpass.ForgotPassword("Rish@gmail.com");

    // Assertions: verify password reset submitted and returned to login screen
    await expect(forgotpass.resetbtn).not.toBeVisible();
    await expect(login.EmailtxtBox).toBeVisible();
    await expect(login.Loginbtn).toBeVisible();

})