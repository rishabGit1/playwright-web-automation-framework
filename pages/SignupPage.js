export class SignupPage {


    constructor(page) {

        this.page = page;
        this.signupbtn = page.getByText('SignUp');
        this.signupbtntwo = page.getByRole('button', { name: 'Sign Up' });
        this.namefield = page.getByRole('textbox', { name: 'Enter your name' });
        this.emailfield = page.getByRole('textbox', { name: 'Enter your email' });
        this.agreeterms = page.locator('.trust-checkbox').first();
        this.otp1 = page.locator('#otp-0');
        this.otp2 = page.locator('#otp-1');
        this.otp3 = page.locator('#otp-2');
        this.otp4 = page.locator('#otp-3');
        this.otp5 = page.locator('#otp-4');
        this.otp6 = page.locator('#otp-5');
        this.verifyotpbtn = page.getByRole('button', { name: 'Verify OTP' });
        this.whatbringsyouhereselectbox = page.getByRole('button', { name: 'Continue' });
        this.selectplanbtn = page.getByRole('button', { name: 'Select this plan' }).nth(1);

        this.cardfirstnamefield = page.getByRole('textbox', { name: 'Enter your first name' });
        this.cardlastnamefield = page.getByRole('textbox', { name: 'Enter your last name' });
        this.cardemailfield = page.getByRole('textbox', { name: 'Enter email' });
        this.cardnofield = page.getByRole('textbox', { name: '0000 0000 0000' });
        this.cardexpirefield = page.getByRole('textbox', { name: '/00' });
        this.cardcvvfield = page.getByRole('textbox', { name: '000', exact: true });
        this.paynowbtn = page.getByRole('button', { name: 'Pay Now' });



        this.agreetermsandcondition = page.locator('.trust-checkbox').first();
        this.lastpagecontinuebtn = page.getByRole('button', { name: 'Continue' });
        this.hearaboutuscheckbox = page.locator('.trust-checkbox').first();
        this.hearaboutuscheckboxcontunuebtn = page.getByRole('button', { name: 'Continue' });
        this.passwordfield = page.getByRole('textbox', { name: 'Enter password', exact: true });
        this.conformpasswordfield = page.getByRole('textbox', { name: 'Re-enter password' })
        this.createbtn = page.getByRole('button', { name: 'Create' })
        this.createbtntwo = page.getByRole('button', { name: 'Continue' })
        this.selectsection = page.getByText('Build Your Training SystemCreate role-specific training built for performance.');
        this.hidepopup = page.locator('.c-pointer > .lucide');




    }

    async gotoSignUp() {
        await this.page.goto('https://qa-owner-panel.netlify.app/');
    }



    async signupAsNewUser() {
        await this.signupbtn.click();
        await this.namefield.click();
        await this.namefield.fill("Rishabh");
        await this.emailfield.click();
        await this.emailfield.fill("rishabh@gmail.com");
        await this.agreeterms.click();
        await this.signupbtntwo.click();
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
        await this.agreeterms.click();
        await this.whatbringsyouhereselectbox.click();
        await this.selectplanbtn.click();
        await this.cardfirstnamefield.click();
        await this.cardfirstnamefield.fill("Rishabh");
        await this.cardlastnamefield.click();
        await this.cardlastnamefield.fill("Sharma");
        await this.cardemailfield.click();
        await this.cardemailfield.fill("rishabh@gmail.com");
        await this.cardnofield.click();
        await this.cardnofield.fill("1234567890");
        await this.cardexpirefield.click();
        await this.cardexpirefield.fill("1234");
        await this.cardcvvfield.click();
        await this.cardcvvfield.fill("123");
        await this.agreetermsandcondition.click();
        await this.paynowbtn.click();
        await this.lastpagecontinuebtn.click();
        await this.hearaboutuscheckbox.click();
        await this.hearaboutuscheckboxcontunuebtn.click();
        await this.passwordfield.click();
        await this.passwordfield.fill("1234567890");
        await this.conformpasswordfield.click();
        await this.conformpasswordfield.fill("1234567890");
        await this.createbtn.click();
        await this.createbtntwo.click();
        await this.selectsection.click();
        await this.hidepopup.click();
    }


}














