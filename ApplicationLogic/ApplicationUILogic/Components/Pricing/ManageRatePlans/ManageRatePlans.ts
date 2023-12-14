import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class ManageRatePlans extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[aria-label="Expanded header"]'), 
        RatePlansContainer: this.page.locator('[id*="contentFitContainer"]'),
    }; 

    InputFields = {
        Id: this.Containers.FilterBarContainer.locator('[id*="idInput-inner"]'),
        Description: this.Containers.FilterBarContainer.locator('[id*="descriptionInput-inner"]'),
        Tags: this.Containers.FilterBarContainer.locator('[id*="tagsSearch-inner"]'),
        Market: this.Containers.FilterBarContainer.locator('[id*="marketSelect-inner"]'), 
        RatePlanTemplate: this.Containers.FilterBarContainer.locator('[id*="ratePlanTemplateSelectionFilter-inner"]'),
    }; 

    Buttons = {
        // filter bar 
        Go: this.Containers.FilterBarContainer.locator('"Go"'), 
        HideFilterBar: this.Containers.FilterBarContainer.locator('"Hide Filter Bar"'),
        Filters: this.Containers.FilterBarContainer.locator('"Filters"'),
        RatePlanTemplate: this.Containers.FilterBarContainer.locator('[id*="SelectionFilter-vhi"]'),
        CollapseBtn: this.Containers.FilterBarContainer.locator('[id*="collapseBtn-img"]'), 
        PinBtn: this.Containers.FilterBarContainer.locator('[id*="pinBtn-img"]'), 

        // rate plans 
        Create: this.Containers.RatePlansContainer.locator('"Create"'),
        Settings: this.Containers.RatePlansContainer.locator('[id*="settings-img"]'), 
    }; 

    DropDowns = {
        Market: this.Containers.FilterBarContainer.locator('[aria-labelledby*="marketSelect-arrow-label"]'), // enum required 
    };
}