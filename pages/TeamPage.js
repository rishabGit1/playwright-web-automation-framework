export class TeamPage {



    constructor(page) {




        this.page = page;
        this.clickonteampage = page.getByRole('link', { name: 'Team' });
        this.clickonroles = page.getByText('Roles');
        this.clickonaddrole = page.getByRole('button', { name: 'Add Role' });
        this.enterrolename = page.getByRole('textbox', { name: 'Enter role name' });
        this.clickonaddbutton = page.getByRole('button', { name: 'Add', exact: true });
        this.clickonteammember = page.getByText('Team Members');
        this.clickonnewmember = page.getByRole('button', { name: 'New Member' });
        this.entername = page.getByRole('textbox', { name: 'Enter Name' });
        this.enteremail = page.getByRole('textbox', { name: 'Enter Email' });
        this.clickondropdown = page.locator('.dropdown-selected');
        this.clickonestheticians = page.getByRole('dialog').getByText('Estheticians');
        this.clickonselecthiringdate = page.getByRole('textbox', { name: 'Select hiring date' });
        this.clickongridcell = page.getByRole('gridcell', { name: 'Choose Thursday, September 24th,' });
        this.clickonaddmember = page.getByRole('button', { name: 'Add Member' });

    }




    async createteammamber(roleName, memberName, email) {
        await this.clickonteampage.click();
        await this.clickonroles.click();
        await this.clickonaddrole.click();
        await this.enterrolename.fill(roleName);
        await this.clickonaddbutton.click();
        await this.clickonteammember.click();
        await this.clickonnewmember.click();
        await this.entername.fill(memberName);
        await this.enteremail.fill(email);
        await this.clickondropdown.click();
        await this.clickonestheticians.click();
        await this.clickonselecthiringdate.click();
        await this.clickongridcell.click();
        await this.clickonaddmember.click();
    }


}