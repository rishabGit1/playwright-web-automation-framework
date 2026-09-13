export class LoginPage {


    constructor(page) {
        this.page = page;
        this.EmailtxtBox = page.getByRole('textbox', { name: 'Enter your email' });
        this.PasstxtBox = page.getByRole('textbox', { name: 'Enter your password' });
        this.Loginbtn = page.getByRole('button', { name: 'Login' });
    }

    async gotoLoginPage() {
        await this.page.goto("https://qa-owner-panel.netlify.app/");
    }


    async login(email, password) {

        await this.EmailtxtBox.click();
        await this.EmailtxtBox.fill(email);
        await this.PasstxtBox.click();
        await this.PasstxtBox.fill(password);
        await this.Loginbtn.click();

    }

}

