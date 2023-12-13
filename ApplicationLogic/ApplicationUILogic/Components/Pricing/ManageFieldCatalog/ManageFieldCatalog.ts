import { BaseApplicationPage } from '../../../Pages/BaseApplicationPage'; 

export class ManageFieldCatalog extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[aria-label="Expanded header"]'), 
        FieldsListContainer: this.page.locator('[id*="contentFitContainer"]')
    }; 

    InputFields = {
        Search: this.Containers.FilterBarContainer.locator('[type="search"]'), 
        EditingStatus: this.Containers.FilterBarContainer.locator('[id*="EditingStatus-inner-inner"]'), 
        Code: this.Containers.FilterBarContainer.locator('[id*="FilterField::code-inner-inner"]'),
        FieldType: this.Containers.FilterBarContainer.locator('[id*="fieldType_code-inner-inner"]'),
        Source: this.Containers.FilterBarContainer.locator('[id*="source_code-inner-inner"]')
    };

    DropDowns = {
        // Filter bar 
        EditingStatus: this.Containers.FilterBarContainer.locator('[id*="DraftEditingStatus-inner-vhi"]'), // enum is required 
        FieldType: this.Containers.FilterBarContainer.locator('[id*="fieldType_code-inner-vhi"]'),  // enum is required 
        Source: this.Containers.FilterBarContainer.locator('[id*="source_code-inner-vhi"]'),  // enum is required 

        // fields list 
        ExportAs: this.page.locator('//span[contains(@id, "export-internalSplitBtn-arrowButton-img")]').first() // // enum is required 
    }; 

    Buttons = {
        // filter bar 
        Share: this.page.locator('[aria-label*="Share"]'), 
        Go: this.Containers.FilterBarContainer.locator('"Go"'), 
        AdaptFilters: this.Containers.FilterBarContainer.locator('"Adapt Filters"'),
        CollapseBtn: this.Containers.FilterBarContainer.locator('[id*="collapseBtn-img"]'), 
        PinBtn: this.Containers.FilterBarContainer.locator('[id*="pinBtn-img"]'),

        // fields list 
        Copy: this.Containers.FieldsListContainer.locator('"Copy"'), 
        Create: this.Containers.FieldsListContainer.locator('"Create"'), 
        Delete: this.Containers.FieldsListContainer.locator('"Delete"'), 
        Settings: this.Containers.FieldsListContainer.locator('[id*="settings-img"]'), 
        ExportTable: this.page.locator('//span[contains(@data-sap-ui, "export-internalSplitBtn-textButton-img")]').first(), 
    };
};