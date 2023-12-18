import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage"; 

export class BusinessConfiguratorSideMenu extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 

    Containers = {
        ConfiguratorContainer: this.page.locator('[id*="sideNavigationList"]')
    }; 

    Buttons = {
        CollapseBtn: this.Containers.ConfiguratorContainer.locator('[id*="admin-component---app--collapseExpand-a"]')
    }; 

    async ChooseNecessaryNavigationItem (itemName: string) {
        await this.Containers.ConfiguratorContainer.locator(`"${itemName}"`).click(); 
    }
}