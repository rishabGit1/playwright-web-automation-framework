const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('User Should able to Login Successfully', async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoLoginPage();

    await login.login(process.env.USERNAME, process.env.PASSWORD);

    // Assertions: verify user successfully logged in and dashboard navigation is visible
    await expect(page.getByRole('link', { name: 'Settings' })).toBeVisible();
    await expect(page).toHaveURL(process.env.EXPECTED_URL);
    await expect(login.Loginbtn).not.toBeVisible();

});
