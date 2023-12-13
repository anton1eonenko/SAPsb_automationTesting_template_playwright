import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class ManageAggregationCatalog extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[aria-label="Expanded header"]'), 
        AggregationsListContainer: this.page.locator('[class*="PageContentFitContainer"]'),
    }; 

    InputFields = {
        Search: this.Containers.FilterBarContainer.locator('[placeholder="Search"]'), 
        EditingStatus: this.Containers.FilterBarContainer.locator('[id*="EditingStatus-inner-inner"]'), 
        Code: this.Containers.FilterBarContainer.locator('[id*="FilterField::code-inner-inner"]'), 

    }; 

    Buttons = {
        // filter bar
        Share: this.page.locator('[aria-label*="Share"]'), 
        Code: this.Containers.FilterBarContainer.locator('[id*="FilterField::code-inner-vhi"]'), 
        Go: this.Containers.FilterBarContainer.locator('"Go"'), 
        AdaptFilters: this.Containers.FilterBarContainer.locator('[id*="Adapt-BDI"]'), 
        CollapseBtn: this.Containers.FilterBarContainer.locator('[id*="collapseBtn-img"]'), 
        PinBtn: this.Containers.FilterBarContainer.locator('[id*="pinBtn-img"]'), 

        // aggregation list 
        Copy: this.Containers.AggregationsListContainer.locator('"Copy"'), 
        Create: this.Containers.AggregationsListContainer.locator('"Create"'), 
        Delete: this.Containers.AggregationsListContainer.locator('"Delete"'), 
        Settings: this.Containers.AggregationsListContainer.locator('[id*="settings-img"]'), 
        ExportTable: this.Containers.AggregationsListContainer.locator('[id*="export-internalSplitBtn-textButton-img"]'),

    }; 

    DropDowns = {
        // filter bar
        EditigStatus: this.Containers.FilterBarContainer.locator('[id*="EditingStatus-inner-vhi"]'), // enum required 

        // aggregation list 
        ExportAs: this.Containers.AggregationsListContainer.locator('[id*="LineItem-export-internalSplitBtn-arrowButton-inner"]') // enum required 

    };
};