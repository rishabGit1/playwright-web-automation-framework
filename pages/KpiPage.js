export class KPIPage {


    constructor(page) {

        this.page = page;
        this.kpipage = page.getByRole('link', { name: 'KPIs' });
        this.kpicategory = page.getByText('KPI Category');
        this.addnewcategory = page.getByRole('button', { name: 'Add New Category' });
        this.categoryname = page.getByRole('textbox', { name: 'Enter category name' });
        this.savebutton = page.getByRole('button', { name: 'Save' });
        this.clickkpi = page.locator('div').filter({ hasText: /^KPIs$/ });
        this.addnewkpi = page.getByRole('button', { name: 'Add New KPI' });
        this.selectkpi = page.locator('.dropdown-selected').first();
        this.kpidropdown = page.getByRole('dialog').getByText('Productivity & Efficiency');
        this.kpi = page.getByRole('textbox', { name: 'Enter KPI name' });
        this.kpidatatype = page.locator('div:nth-child(3) > .common-dropdown > .dropdown-selected');
        this.kpidatatype1 = page.getByText('Number');
        this.kpicreatebutton = page.getByRole('button', { name: 'Create' });


    }


    async createKpi() {

        await this.kpipage.click();
        await this.kpicategory.click();
        await this.addnewcategory.click();
        await this.categoryname.click();
        await this.savebutton.click();
        await this.clickkpi.click();
        await this.addnewkpi.click();
        await this.selectkpi.click();
        await this.kpidropdown.click();
        await this.kpi.click();
        await this.kpidatatype.click();
        await this.kpidatatype1.click();
        await this.kpicreatebutton.click();


    }





}