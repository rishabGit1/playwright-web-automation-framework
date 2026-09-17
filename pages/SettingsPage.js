export class SettingsPage {



    constructor(page) {
        this.page = page;
        this.clickosettingpage = page.getByRole('link', { name: 'Settings' });
        this.clickeditdetails = page.locator('.mt-4 > .settings-card > .card-header > .d-flex > .edit-btn > svg').first();
        this.busignessname = page.getByRole('textbox', { name: 'Enter business name' });
        this.address = page.getByRole('textbox', { name: 'Enter address' });
        this.zipcode = page.getByRole('textbox', { name: 'Enter zip code' });
        this.clicksave = page.getByRole('button', { name: 'Save' }).first();
        this.clickonedittimeoff = page.locator('div:nth-child(6) > .settings-card > .card-header > .d-flex > .edit-btn > svg');
        this.timeofflimt = page.getByRole('textbox', { name: 'Enter time off limit yearly' });
        this.clickupgrade = page.getByRole('button', { name: 'Upgrade' }).nth(1);


    }


    async editdetails() {

        await this.clickosettingpage.click();
        await this.clickeditdetails.click();
        await this.busignessname.click();
        await this.busignessname.fill("Business Name");
        await this.address.click();
        await this.address.fill("Address");
        await this.zipcode.click();
        await this.zipcode.fill("123456");
        await this.clicksave.click();
        await this.clickonedittimeoff.click();
        await this.timeofflimt.click();
        await this.timeofflimt.fill("12");
        await this.clickupgrade.click();

    }






}















