import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage"; 

export class ManageRatePlanTemplates extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[aria-label="Expanded header"]'), 
        RatePlanTemplatesContainer: this.page.locator('[id*="contentFitContainer"]'),
    }; 

    InputFields = {
        Number: this.Containers.FilterBarContainer.locator('[id*="idInput-inner"]'),
        Description: this.Containers.FilterBarContainer.locator('[id*="descriptionInput-inner"]'),
        Tags: this.Containers.FilterBarContainer.locator('[id*="tagsSearch-inner"]'),
        PricingScheme: this.Containers.FilterBarContainer.locator('[id*="prSchemeFilterComboBox-inner"]')
    }; 

    Buttons = {
        // filter bar 
        Go: this.Containers.FilterBarContainer.locator('"Go"'), 
        HideFilterBar: this.Containers.FilterBarContainer.locator('"Hide Filter Bar"'),
        CollapseBtn: this.Containers.FilterBarContainer.locator('[id*="collapseBtn-img"]'), 
        PinBtn: this.Containers.FilterBarContainer.locator('[id*="pinBtn-img"]'), 

        // rate plan templates
        Sort: this.Containers.RatePlanTemplatesContainer.locator('[id*="btnSort-img"]'),
        Settings: this.Containers.RatePlanTemplatesContainer.locator('[id*="settings-img"]'), 
    }; 

    DropDowns = {
        PublishingStatus: this.Containers.FilterBarContainer.locator('[id*="statusFilterComboBox-arrow"]'), // enum required 
        PricingScheme: this.Containers.FilterBarContainer.locator('[aria-labelledby*="prSchemeFilterComboBox"]'),  // enum required 
        Create: this.Containers.RatePlanTemplatesContainer.locator('"Create"') // enum required 
    };
}