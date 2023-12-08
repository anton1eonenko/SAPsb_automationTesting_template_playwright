import { BaseApplicationPage } from '../../../Pages/BaseApplicationPage'; 

export class ManageSubscriptions extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[class="sapFDynamicPageHeaderWrapper"]'), 
        SubscriptionsListContainer: this.page.locator('[id*="contentFitContainer"]')
    }; 

    InputFields = {
        SubscriptionID: this.Containers.FilterBarContainer.locator('[aria-labelledby*="filterDocumentNumber"]'), 
        Customer: this.Containers.FilterBarContainer.locator('[aria-labelledby*="CustomerName"]'), 
        MainProduct: this.Containers.FilterBarContainer.locator('[aria-labelledby*="filterProductName"]'), 
        CreatedBetween: this.Containers.FilterBarContainer.locator('[aria-labelledby*="filterCreatedDateRange"]'), 
        ExpiresBetween: this.Containers.FilterBarContainer.locator('[aria-labelledby*="ExpireDateRange"]')
    }; 

    Buttons = {
        Go: this.Containers.FilterBarContainer.locator('[id*="Go"]').first(), // ?
        HideFilterBar: this.Containers.FilterBarContainer.locator('[id*="ShowHide"]').last(), 
        CollapseBtn: this.Containers.FilterBarContainer.locator('[data-sap-ui*="collapseBtn-"]'),
        PinBtn: this.Containers.FilterBarContainer.locator('[data-sap-ui*="pinBtn-"]'), 
        
        // Subscriptions List
        Create: this.Containers.SubscriptionsListContainer.locator('"Create"'), 
        Sort: this.Containers.SubscriptionsListContainer.locator('[aria-label*="Sort"]'), 
        Settings: this.Containers.SubscriptionsListContainer.locator('[aria-label*="Settings"]')
    }; 

    DropDowns = {
        Filters: this.Containers.FilterBarContainer.locator('[id*="filterBar-btnFilters-BDI-content"]'),
        Market: this.Containers.FilterBarContainer.locator('[aria-labelledby*="filterMarketName"]').last(),
        Status: this.Containers.FilterBarContainer.locator('[aria-labelledby*="filterStatus"]').last(), 
        CreatedBetween: this.Containers.FilterBarContainer.locator('[id*="CreatedDateRange"][aria-label="Open Picker"]'), 
        ExpiresBetween: this.Containers.FilterBarContainer.locator('[id*="ExpireDateRange"][aria-label="Open Picker"]')
    }
}