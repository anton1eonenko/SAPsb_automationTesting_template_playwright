import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage"; 

export class ManageProducts extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[id*="PageId-headerWrapper"]'), 
        ProductsContainer: this.page.locator('[id*="dynamicPageId-contentFitContainer"]')
    }; 

    InputFields = {
        Search: this.Containers.FilterBarContainer.locator('[id*="btnBasicSearch-I"]'), 
        Market: this.Containers.FilterBarContainer.locator('[id*="comboBoxMarket-inner"]'), 
        CustomReferenceType: this.Containers.FilterBarContainer.locator('[id*="customReferenceTypeSelect-inner"]'), 
        CustomReferenceID: this.Containers.FilterBarContainer.locator('[id*="customReferenceIdInput-inner"]'),
    }; 

    Buttons = {
        // filter bar
        Go: this.Containers.FilterBarContainer.locator('"Go"'), 
        CollapseBtn: this.Containers.FilterBarContainer.locator('[id*="collapseBtn-inner"]'), 
        PinBtn: this.Containers.FilterBarContainer.locator('[id*="pinBtn-img"]'), 

        // products
        Create: this.Containers.ProductsContainer.locator('"Create"'), 
    }; 

    DropDowns = {
        // filter bar
        PublushingStatus: this.Containers.FilterBarContainer.locator('[id*="publishingStatusSelect-arrow"]'),  // enum required 
        Market: this.Containers.FilterBarContainer.locator('[aria-labelledby*="comboBoxMarket-arrow-label"]'), // enum required 
        CustomReferenceType: this.Containers.FilterBarContainer.locator('[aria-labelledby*="customReferenceTypeSelect-arrow-label"]'), // enum required 
    };
};