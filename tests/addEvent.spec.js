const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { AddEventPage } = require('../pages/AddEventPage');


test('User is able to create Successfully New Event', async ({ page }) => {


    const login = new LoginPage(page);
    const addevent = new AddEventPage(page);


    await login.gotoLoginPage();
    await login.login('TestUser1@gmail.com', 'Abinav@123')
    await addevent.addevent();





})
