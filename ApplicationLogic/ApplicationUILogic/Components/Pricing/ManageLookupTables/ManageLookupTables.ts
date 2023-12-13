import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class ManageLookupTables extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[aria-label="Expanded header"]'), 
        LookupTablesContainer: this.page.locator('[id*="contentFitContainer"]')
    }; 

    InputFields = {
        Search: this.Containers.FilterBarContainer.locator('[type="search"]'), 
        EditingStatus: this.Containers.FilterBarContainer.locator('[id*="EditingStatus-inner-inner"]'), 
        Code: this.Containers.FilterBarContainer.locator('[id*="FilterField::code-inner-inner"]')
    }; 

    Buttons = {
        // filter bar
        Code: this.Containers.FilterBarContainer.locator('[data-sap-ui*="FilterField::code-inner-vhi"]'),
        Share: this.page.locator('[aria-label*="Share"]'), 
        Go: this.Containers.FilterBarContainer.locator('"Go"'), 
        AdaptFilters: this.Containers.FilterBarContainer.locator('[id*="Adapt-BDI"]'), 
        CollapseBtn: this.Containers.FilterBarContainer.locator('[id*="collapseBtn-img"]'), 
        PinBtn: this.Containers.FilterBarContainer.locator('[id*="pinBtn-img"]'), 

        // lookup tables 
        Copy: this.Containers.LookupTablesContainer.locator('"Copy"'), 
        Create: this.Containers.LookupTablesContainer.locator('"Create"'), 
        Delete: this.Containers.LookupTablesContainer.locator('"Delete"'), 
        Settings: this.Containers.LookupTablesContainer.locator('[id*="settings-img"]'), 
        ExportTable: this.Containers.LookupTablesContainer.locator('[id*="export-internalSplitBtn-textButton-img"]')
    }; 

    DropDowns = {
        // filter bar
        EditingStatus: this.Containers.FilterBarContainer.locator('[id*="EditingStatus-inner-vhi"]'),  // enum required 

        // lookup tables 
        ExportAs: this.Containers.LookupTablesContainer.locator('[id*="LineItem-export-internalSplitBtn-arrowButton-inner"]'), // enum required 
    }
}