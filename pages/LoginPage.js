export class LoginPage {


    constructor(page) {
        this.page = page;
        this.EmailtxtBox = page.getByRole('textbox', { name: 'Enter your email' });
        this.PasstxtBox = page.getByRole('textbox', { name: 'Enter your password' });
        this.Loginbtn = page.getByRole('button', { name: 'Login' });
        this.otp1 = page.locator('#otp-0');
        this.otp2 = page.locator('#otp-1');
        this.otp3 = page.locator('#otp-2');
        this.otp4 = page.locator('#otp-3');
        this.otp5 = page.locator('#otp-4');
        this.otp6 = page.locator('#otp-5');
        this.verifyotpbtn = page.getByRole('button', { name: 'Verify OTP' });
        // this.hidepopup = page.locator('.c-pointer > .lucide');
        this.createbtntwo = page.getByRole('button', { name: 'Continue' });


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
        await this.otp1.click();
        await this.otp1.fill("1");
        await this.otp2.click();
        await this.otp2.fill("2");
        await this.otp3.click();
        await this.otp3.fill("3");
        await this.otp4.click();
        await this.otp4.fill("4");
        await this.otp5.click();
        await this.otp5.fill("5");
        await this.otp6.click();
        await this.otp6.fill("6");
        await this.verifyotpbtn.click();
        //await this.hidepopup.click();
        await this.createbtntwo.click();


    }

}

