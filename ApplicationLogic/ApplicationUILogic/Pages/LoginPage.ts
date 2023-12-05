import { BasePage } from '../../BasePage'

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
    }; 

    InputFields = {
        Login: this.page.locator('[id="j_username"]'), 
        Password: this.page.locator('[id="password"]')

    }; 

    Buttons = {
        LoginContinue: this.page.locator('[class="fn-button__text"]'), 
        SignIn: this.page.locator('[class*="submit-button"]'),
        ForgotPassword: this.page.locator('[class*="uid-link "]'),
    }; 

    async LogIn(login: string, password: string) {
        await this.InputFields.Login.fill(login);
        await this.Buttons.LoginContinue.click({timeout: 3000}); 
        await this.InputFields.Password.fill(password); 
        await this.Buttons.SignIn.click(); 
    }
}