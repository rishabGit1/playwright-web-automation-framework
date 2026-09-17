export class VendorsPage {

    constructor(page) {

        this.page = page;
        this.clickonvendorpage = page.getByRole('link', { name: 'Vendors' });
        this.clickonaddvendor = page.getByRole('button', { name: 'Add Vendor' });
        this.clickoncompanyname = page.getByRole('textbox', { name: 'Enter company name' });
        this.clickonrepname = page.getByRole('textbox', { name: 'Enter rep name' });
        this.clickonemail = page.getByRole('textbox', { name: 'Enter email' });
        this.clickoncountrycode = page.locator('.lucide.lucide-chevron-down').first();
        this.clickonuscode = page.getByText('US (+1)');
        this.clickonphonenumber = page.getByRole('textbox', { name: '-000-0000' });
        this.clickonvendorcategory = page.locator('.dropdown-selected');
        this.clickonplumbercategory = page.getByText('Plumber').nth(3);
        this.clickonnotes = page.getByRole('textbox', { name: 'Enter notes' });
        this.clickonaddvendorbutton = page.getByRole('button', { name: 'Add', exact: true });
    }

    async createVendorsPage() {


        await this.clickonvendorpage.click();
        await this.clickonaddvendor.click();
        await this.clickoncompanyname.click();
        await this.clickoncompanyname.fill("Test Company");
        await this.clickonrepname.click();
        await this.clickonrepname.fill("Test Rep");
        await this.clickonemail.click();
        await this.clickonemail.fill("[EMAIL_ADDRESS]");
        await this.clickoncountrycode.click();
        await this.clickonuscode.click();
        await this.clickonphonenumber.click();
        await this.clickonphonenumber.fill("1234567890");
        await this.clickonvendorcategory.click();
        await this.clickonplumbercategory.click();
        await this.clickonnotes.click();
        await this.clickonnotes.fill("Test Notes");
        await this.clickonaddvendorbutton.click();


    }








}  