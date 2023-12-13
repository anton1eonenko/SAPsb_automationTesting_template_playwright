import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage"; 

export class ManagePricingSchemes extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[aria-label="Expanded header"]'), 
        PricingSchemesContainer: this.page.locator('[id*="contentFitContainer"]')
    }; 

    InputFields = {
        Search: this.Containers.FilterBarContainer.locator('[type="search"]'), 
        EditingStatus: this.Containers.FilterBarContainer.locator('[id*="EditingStatus-inner-inner"]'), 
        Code: this.Containers.FilterBarContainer.locator('[id*="FilterField::code-inner-inner"]'), 
        Name: this.Containers.FilterBarContainer.locator('[id*="name-inner-inner"]')
    }; 

    Buttons = {
        // filter bar 
        Share: this.page.locator('[aria-label*="Share"]'),
        Code: this.Containers.FilterBarContainer.locator('[data-sap-ui*="FilterField::code-inner-vhi"]'), 
        Name: this.Containers.FilterBarContainer.locator('[data-sap-ui*="name-inner-vhi"]'),
        Go: this.Containers.FilterBarContainer.locator('"Go"'), 
        AdaptFilters: this.Containers.FilterBarContainer.locator('[id*="Adapt-BDI"]'), 
        CollapseBtn: this.Containers.FilterBarContainer.locator('[id*="collapseBtn-img"]'), 
        PinBtn: this.Containers.FilterBarContainer.locator('[id*="pinBtn-img"]'), 

        // price schemes
        Copy: this.Containers.PricingSchemesContainer.locator('"Copy"'), 
        Create: this.Containers.PricingSchemesContainer.locator('"Create"'), 
        Delete: this.Containers.PricingSchemesContainer.locator('"Delete"'), 
        Settings: this.Containers.PricingSchemesContainer.locator('[id*="settings-img"]'), 
        ExportTable: this.Containers.PricingSchemesContainer.locator('[id*="export-internalSplitBtn-textButton-img"]')
    }; 

    DropDowns = {
        // filter bar
        EditingStatus: this.Containers.FilterBarContainer.locator('[id*="EditingStatus-inner-vhi"]'),  // enum required 

        // price schemes
        ExportAs: this.Containers.PricingSchemesContainer.locator('[id*="LineItem-export-internalSplitBtn-arrowButton-inner"]'), // enum required 
    }
}