const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { KPIPage } = require('../pages/KpiPage');

test('Owner is able to Create New KPI Successfully', async ({ page }) => {


    const login = new LoginPage(page);
    const kpi = new KPIPage(page);

    await login.gotoLoginPage();
    await login.login("rishabh@gmail.com", "123456789");
    await kpi.createKpi();






});
