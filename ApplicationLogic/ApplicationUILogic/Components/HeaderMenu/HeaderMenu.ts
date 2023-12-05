import { BaseApplicationPage } from "../../Pages/BaseApplicationPage";

export class HeaderMenu extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Buttons = {
        NavigateToHomeImg: this.MainContainers.HeaderContainer.locator('[title="Navigate to Home"]'), 
        Home: this.MainContainers.HeaderContainer.locator('[id="shellAppTitle-button"]'), 
        Search: this.MainContainers.HeaderContainer.locator('[title="Open Search"]'), 
        Support: this.MainContainers.HeaderContainer.locator('[title="Built-In Support"]'), 
        Help: this.MainContainers.HeaderContainer.locator('[title="Open Help"]'), 
        Profile: this.MainContainers.HeaderContainer.locator('[title*="Profile of"]'),
    }
}