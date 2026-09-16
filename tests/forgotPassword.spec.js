const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ForgotPasswordPage } = require('../pages/ForgotPasswordPage');

test('User Should able to Forget Password Successfully', async ({ page }) => {


    const login = new LoginPage(page);
    const forgotpass = new ForgotPasswordPage(page);

    await login.gotoLoginPage();
    await forgotpass.ForgotPassword("Rish@gmail.com");

})