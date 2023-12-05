import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class HomeModal extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 

    Containers = {
        MainContainer: this.page.locator('[id="allMyAppsView"]')
    }; 

    Sections = {
        HomePageApps: this.Containers.MainContainer.locator('"Home Page Apps"'), 
        SubscriptionsAndBilling: this.Containers.MainContainer.locator('"Subscriptions and Billing"'), 
        Pricing: this.Containers.MainContainer.locator('"Pricing"'), 
        MasterDataAndConfiguration: this.Containers.MainContainer.locator('"Master Data and Configuration"'), 
        Monitoring: this.Containers.MainContainer.locator('"Monitoring"')
    }; 

    // else subsections, but not necessary, there is a method given below 

    async ChooseSectionAndSubSectionOnTheHomeModal (section: string, subsection: string) {
        await this.Containers.MainContainer.locator(`"${section}"`).click(); 
        await this.Containers.MainContainer.locator(`"${subsection}"`).click();
    }
}