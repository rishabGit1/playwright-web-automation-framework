export class AddEventPage {


    constructor(page) {

        this.page = page;
        this.gotocalenderpage = page.getByRole('link', { name: 'Calender' });
        this.addeventbtn = page.getByRole('button', { name: 'Add Event' }).first();
        this.eventname = page.getByRole('textbox', { name: 'Enter event name' });
        this.selectdate = page.getByRole('textbox', { name: 'Select date' });
        this.date = page.getByRole('gridcell', { name: 'Choose Thursday, September 17th,' });
        this.starttime = page.getByRole('textbox').nth(3);
        this.endtime = page.getByRole('textbox').nth(4);
        this.favorite = page.getByRole('textbox', { name: 'Enter favorite' });
        this.add = page.getByRole('button', { name: 'Add', exact: true });



    }


    async addevent() {

        await this.gotocalenderpage.click();
        await this.addeventbtn.click();
        await this.eventname.fill('Test Event');
        await this.selectdate.click();
        await this.date.click();
        await this.starttime.fill('17:47');
        await this.endtime.fill('18:47');
        await this.favorite.fill('Test Favorite');
        await this.add.click();
        await this.page.waitForTimeout(2000);


    }








}