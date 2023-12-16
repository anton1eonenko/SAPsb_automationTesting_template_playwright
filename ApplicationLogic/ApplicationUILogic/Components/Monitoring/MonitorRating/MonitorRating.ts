import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class MonitorRating extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[aria-label="Expanded header"]'), 
        MonitorContainer: this.page.locator('[id*="contentFitContainer"]'),
    }; 

    InputFields = {
        Message: this.Containers.FilterBarContainer.locator('[id*="messageFilterComboBox-inner"]'), 
        SubscriptionID: this.Containers.FilterBarContainer.locator('subscriptionIdInput-inner'), 
        Product: this.Containers.FilterBarContainer.locator('[id*="productInput-inner"]'), 
        Market: this.Containers.FilterBarContainer.locator('[id*="marketFilterComboBox-inner"]'), 
    }; 

    Buttons = {
         // filter bar 
         Go: this.Containers.FilterBarContainer.locator('"Go"'), 
         HideFilterBar: this.Containers.FilterBarContainer.locator('"Hide Filter Bar"'),
         Filters: this.Containers.FilterBarContainer.locator('[id*="btnFilters-BDI"]'),
         CollapseBtn: this.Containers.FilterBarContainer.locator('[id*="collapseBtn-img"]'), 
         PinBtn: this.Containers.FilterBarContainer.locator('[id*="pinBtn-img"]'), 

         // monitor 
         All: this.Containers.MonitorContainer.locator('//span[contains(text(), "All (")]'), 
         Errors: this.Containers.MonitorContainer.locator('//span[contains(text(), "Errors")]'), 
         Warnings: this.Containers.MonitorContainer.locator('//span[contains(text(), "Warnings")]'), 
         Retry: this.Containers.MonitorContainer.locator('"Retry"'), 
         GroupTheTable: this.Containers.MonitorContainer.locator('[id*="groupButton-img"]'), 
         Settings: this.Containers.MonitorContainer.locator('[id*="SettingsButton-img"]')
    };

    DropDowns = {
        // filter bar
        Message: this.Containers.FilterBarContainer.locator('[aria-labelledby*="messageFilterComboBox-arrow-label"]'), 
        Market: this.Containers.FilterBarContainer.locator('[aria-labelledby*="marketFilterComboBox-arrow-label"]'), 
        Time: this.Containers.FilterBarContainer.locator('[id*="timeFilterComboBox-arrow"]')
    }
}