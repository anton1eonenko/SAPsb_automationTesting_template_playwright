import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class ProfileModal extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 

    Containers = {
        MainContainer: this.page.locator('[class="sapMPopoverScroll"]'), 
    };

    Buttons = {
        AppFinder: this.Containers.MainContainer.locator('"App Finder"'), 
        Settings: this.Containers.MainContainer.locator('"Settings"'), 
        EditHomePage: this.Containers.MainContainer.locator('"Edit Home Page"'), 
        About: this.Containers.MainContainer.locator('"About"'), 
        SignOut: this.Containers.MainContainer.locator('"Sign Out"')
    }; 
};