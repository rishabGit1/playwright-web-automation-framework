const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { AddEventPage } = require('../pages/AddEventPage');


test('User Should able to Create New Event Successfully', async ({ page }) => {


    const login = new LoginPage(page);
    const addevent = new AddEventPage(page);


    await login.gotoLoginPage();
    await login.login('TestUser1@gmail.com', 'Abinav@123')
    await addevent.addevent();

    // Assertions: verify event modal closed and event appears on the calendar
    await expect(addevent.add).not.toBeVisible();
    await expect(page.getByText('Add Event').first()).toBeVisible();

})
