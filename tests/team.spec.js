const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { TeamPage } = require('../pages/TeamPage');

test('User Should able to create Role & Team Member Successfully ', async ({ page }) => {


    const login = new LoginPage(page);
    const team = new TeamPage(page);


    await login.gotoLoginPage();
    await login.login("rishabhgg@gmail.com", "123456789");
    await team.createteammamber("Admin Role", "Alex Smith", "alex@example.com");

    // Assertions: verify add member modal closed and new member is visible in the list
    await expect(team.clickonaddmember).not.toBeVisible();
    await expect(page.getByText('Isla')).toBeVisible();

})