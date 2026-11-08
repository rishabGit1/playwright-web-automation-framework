const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { VendorsPage } = require('../pages/VendorsPage');


test('User Should able to Create Vendor Successfully', async ({ page }) => {



    const login = new LoginPage(page);
    const vendorsPage = new VendorsPage(page);
    await login.gotoLoginPage();

    await login.login("rishabh@gmail.com", "Test@123");
    await vendorsPage.createVendorsPage();

    // Assertions: verify add vendor modal closed and company appears in the vendor list
    await expect(vendorsPage.clickonaddvendorbutton).not.toBeVisible();
    await expect(page.getByText('ABC Logistics').first()).toBeVisible();

})

