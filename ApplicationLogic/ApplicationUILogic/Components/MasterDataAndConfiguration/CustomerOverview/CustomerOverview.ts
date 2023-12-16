import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage"; 

export class CustomerOverview extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[aria-label="Expanded header"]'), 
        CustomersContainer: this.page.locator('[id*="contentFitContainer"]')
    }; 

    InputFields = {
        CustomerName: this.Containers.FilterBarContainer.locator('[id*="customerNameFilterInput-inner"]'), 
        CustomerId: this.Containers.FilterBarContainer.locator('[id*="customerNumberFilterInput-inner"]'), 
        Email: this.Containers.FilterBarContainer.locator('[id*="emailFilterInput-inner"]'), 
        Phone: this.Containers.FilterBarContainer.locator('[id*="phoneFilterInput-inner"]'), 
        City: this.Containers.FilterBarContainer.locator('[id*="cityFilterInput-inner"]'), 
        Markets: this.Containers.FilterBarContainer.locator('[id*="FilterMultiComboBox-inner"]'),
    }; 

    Buttons = {
        // filter bar
        Go: this.Containers.FilterBarContainer.locator('"Go"'), 
        HideFilterBar: this.Containers.FilterBarContainer.locator('"Hide Filter Bar"'), 
        Filters: this.Containers.FilterBarContainer.locator('[id*="btnFilters-BDI"]'),
        CollapseBtn: this.Containers.FilterBarContainer.locator('[id*="collapseBtn-img"]'), 
        PinBtn: this.Containers.FilterBarContainer.locator('[id*="pinBtn-img"]'), 

        // customers
        Settings: this.Containers.CustomersContainer.locator('[id*="SettingButton-img"]'), 
    }; 

    DropDowns = {
        // filter bar
        CustomerType: this.Containers.FilterBarContainer.locator('[id*="customerTypeFilterSelect-arrow"]'),  // enum required 
        Markets: this.Containers.FilterBarContainer.locator('[aria-labelledby*="marketsFilterMultiComboBox-arrow-label"]'), // enum required 

        // customers
        Create: this.Containers.CustomersContainer.locator('"Create"'), // enum required 
    };

    async SelectCustomerType(type: string) {
        await this.DropDowns.CustomerType.click(); 
        await this.page.locator('[class*="sapMSelectListItemBaseHoverable"]').locator(`"${type}"`).click();
    }
}