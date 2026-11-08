const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { addUncaughtExceptionCaptureCallback } = require('node:process');

test('User Should able to Login Successfully', async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoLoginPage();

    await login.login("rishabh@gmail.com", "123456789");

    // Assertions: verify user successfully logged in and dashboard navigation is visible
    //await expect(page).not.toHaveURL(/.*login/);
    //await expect(login.Loginbtn).not.toBeVisible();
    await expect(page.getByRole('link', { name: 'Settings' })).toBeVisible();
    await expect(page).toHaveURL('https://qa-owner-panel.netlify.app/dashboard');
    await expect(login.Loginbtn).not.toBeVisible();

    


});










