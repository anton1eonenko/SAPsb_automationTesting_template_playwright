import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage"; 

export class ManageLookupTableData extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[aria-label="Expanded header"]'), 
        LookupTablesContainer: this.page.locator('[id*="contentFitContainer"]')
    }; 

    InputFields = {
        Search: this.Containers.FilterBarContainer.locator('[type="search"]'), 
        Code: this.Containers.FilterBarContainer.locator('[id*="FilterField::code-inner-inner"]'),
    };

    Buttons = {
        // filter bar 
        Share: this.page.locator('[aria-label*="Share"]'), 
        Code: this.Containers.FilterBarContainer.locator('[id*="code-inner-vhi"]'),
        Go: this.Containers.FilterBarContainer.locator('"Go"'), 
        AdaptFilters: this.Containers.FilterBarContainer.locator('[id*="btnAdapt-BDI"]'),
        CollapseBtn: this.Containers.FilterBarContainer.locator('[id*="collapseBtn-img"]'), 
        PinBtn: this.Containers.FilterBarContainer.locator('[id*="pinBtn-img"]'),

        // lookup tables  
        Settings: this.Containers.LookupTablesContainer.locator('[id*="settings-img"]'), 
        ExportTable: this.page.locator('//span[contains(@data-sap-ui, "export-internalSplitBtn-textButton-img")]'), 
    };

    DropDowns = {
        ExportAs: this.page.locator('//span[contains(@id, "export-internalSplitBtn-arrowButton-img")]'), // enum is required 
    }; 
}