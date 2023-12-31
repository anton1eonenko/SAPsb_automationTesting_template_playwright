import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage"; 

export class ManagePriceElementSpecifications extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[aria-label="Expanded header"]'), 
        PriceElementSpecificationsContainer: this.page.locator('[id*="contentFitContainer"]')
    }; 

    InputFields = {
        Search: this.Containers.FilterBarContainer.locator('[type="search"]'), 
        EditingStatus: this.Containers.FilterBarContainer.locator('[id*="EditingStatus-inner-inner"]'), 
        Code: this.Containers.FilterBarContainer.locator('[id*="FilterField::code-inner-inner"]')
    }; 

    Buttons = {
        // filter bar 
        Share: this.page.locator('[aria-label*="Share"]'),
        Code: this.Containers.FilterBarContainer.locator('[data-sap-ui*="FilterField::code-inner-vhi"]'), 
        Go: this.Containers.FilterBarContainer.locator('"Go"'), 
        AdaptFilters: this.Containers.FilterBarContainer.locator('[id*="Adapt-BDI"]'), 
        CollapseBtn: this.Containers.FilterBarContainer.locator('[id*="collapseBtn-img"]'), 
        PinBtn: this.Containers.FilterBarContainer.locator('[id*="pinBtn-img"]'), 

        // price element specs 
        Copy: this.Containers.PriceElementSpecificationsContainer.locator('"Copy"'), 
        Create: this.Containers.PriceElementSpecificationsContainer.locator('"Create"'), 
        Delete: this.Containers.PriceElementSpecificationsContainer.locator('"Delete"'), 
        Settings: this.Containers.PriceElementSpecificationsContainer.locator('[id*="settings-img"]'), 
        ExportTable: this.Containers.PriceElementSpecificationsContainer.locator('[id*="export-internalSplitBtn-textButton-img"]')
    }; 

    DropDowns = {
        // filter bar
        EditingStatus: this.Containers.FilterBarContainer.locator('[id*="EditingStatus-inner-vhi"]'),  // enum required 

        // price elemnt specs 
        ExportAs: this.Containers.PriceElementSpecificationsContainer.locator('[id*="LineItem-export-internalSplitBtn-arrowButton-inner"]'), // enum required 
    }
}