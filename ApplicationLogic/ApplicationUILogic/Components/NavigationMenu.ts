import { BaseApplicationPage } from "../Pages/BaseApplicationPage";

export class NavigationMenu extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Buttons = {
        SubscriptionsAndBilling: this.MainContainers.NavigationMenuContainer.locator('"Subscriptions and Billing"'), 
        Pricing: this.MainContainers.NavigationMenuContainer.locator('"Pricing"'), 
        MasterDataAndConfiguration: this.MainContainers.NavigationMenuContainer.locator('"Master Data and Configuration"'), 
        Monitoring: this.MainContainers.NavigationMenuContainer.locator('"Monitoring"'), 
    }; 

    async ClickOnNecessaryButtonOnNavigationMenu (text: string) {
        await this.MainContainers.NavigationMenuContainer.locator(`"${text}"`).click(); 
    };
};