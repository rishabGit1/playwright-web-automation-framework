const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/LoginPage';
import { SettingsPage } from '../pages/SettingsPage';

test('User Should able to update Setting Page Successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const settingsPage = new SettingsPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login("rish@gmail.com", "Test@123");
    await settingsPage.editdetails();
});
