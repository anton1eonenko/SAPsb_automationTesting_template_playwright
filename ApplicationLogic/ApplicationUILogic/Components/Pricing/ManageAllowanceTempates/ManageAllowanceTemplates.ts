import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage"; 

export class ManageAllowanceTemplates extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[aria-label="Expanded header"]'), 
        AllowanceTemplatesContainer: this.page.locator('[id*="contentFitContainer"]'),
    }; 

    InputFields = {
        Number: this.Containers.FilterBarContainer.locator('[id*="numberFilterInput-inner"]'),
        Description: this.Containers.FilterBarContainer.locator('[id*="descriptionFilterInput-inner"]'),
        TechnicalResourceType: this.Containers.FilterBarContainer.locator('[id*="ResourceTypeFilterMultiComboBox-inner"]'),
        Market: this.Containers.FilterBarContainer.locator('[id*="marketFilterMultiComboBox-inner"]'), 
    }; 

    Buttons = {
        // filter bar 
        Go: this.Containers.FilterBarContainer.locator('"Go"'), 
        HideFilterBar: this.Containers.FilterBarContainer.locator('"Hide Filter Bar"'),
        Filters: this.Containers.FilterBarContainer.locator('[id*="Filters-inner"]'),
        CollapseBtn: this.Containers.FilterBarContainer.locator('[id*="listPageHeader-collapseBtn-img"]'), 
        PinBtn: this.Containers.FilterBarContainer.locator('[id*="pinBtn-img"]'), 

        // alowance templates
        Create: this.Containers.AllowanceTemplatesContainer.locator('"Create"'),
    }; 

    DropDowns = {
        TechnicalResuourceType: this.Containers.FilterBarContainer.locator('[aria-labelledby*="technicalResourceTypeFilterMulti"]'), // enum required 
        Market: this.Containers.FilterBarContainer.locator('[aria-labelledby*="marketFilter"]'), // enum required 
        Status: this.Containers.FilterBarContainer.locator('[id*="statusSelect-arrow"]'), // enum required 
    };
}