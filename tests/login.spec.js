const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('User Should able to Login Successfully', async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoLoginPage();

    await login.login("rishabh@gmail.com", "123456789");



});










