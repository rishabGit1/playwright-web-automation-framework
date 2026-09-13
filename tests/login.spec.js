const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Testing Url link should open Successfully', async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoLoginPage();

    await login.login("rishabh@gmail.com", "123456789");



});










