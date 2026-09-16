export class ForgotPasswordPage {


    constructor(page) {

        this.page = page;
        this.forgotemailbtn = page.getByText('Forgot Password?');
        this.forgotemailtxt = page.getByRole('textbox', { name: 'Enter your registered email' });
        this.submitbtn = page.getByRole('button', { name: 'Submit' });
        this.otp1 = page.getByRole('textbox', { name: '-' }).first();
        this.otp2 = page.getByRole('textbox', { name: '-' }).nth(1);
        this.otp3 = page.getByRole('textbox', { name: '-' }).nth(2);
        this.otp4 = page.getByRole('textbox', { name: '-' }).nth(3);
        this.otp5 = page.getByRole('textbox', { name: '-' }).nth(4);
        this.otp6 = page.getByRole('textbox', { name: '-' }).nth(5);
        this.verifybtn = page.getByRole('button', { name: 'Verify OTP' });
        this.newpasswordtxt = page.getByRole('textbox', { name: 'Enter new password' });
        this.reenterpasswordtxt = page.getByRole('textbox', { name: 'Re-enter password' });
        this.resetbtn = page.getByRole('button', { name: 'Reset' });
        this.loginbtn = page.getByRole('button', { name: 'Log in' });


    }


    async ForgotPassword(email) {

        await this.forgotemailbtn.click();
        await this.forgotemailtxt.fill(email);
        await this.submitbtn.click();
        await this.otp1.fill("1");
        await this.otp2.fill("2");
        await this.otp3.fill("3");
        await this.otp4.fill("4");
        await this.otp5.fill("5");
        await this.otp6.fill("6");
        await this.verifybtn.click();
        await this.newpasswordtxt.fill("Test@123");
        await this.reenterpasswordtxt.fill("Test@123");
        await this.resetbtn.click();
        await this.loginbtn.click();


    }




}