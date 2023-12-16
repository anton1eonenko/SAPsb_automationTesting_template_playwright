import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class LicenseRelevantRevenue extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[aria-label="Expanded header"]'), 
        LicenseRelevantContainer: this.page.locator('[id*="contentFitContainer"]'),
    }; 

    InputFields = {
        FromDate: this.Containers.FilterBarContainer.locator('[title="From Date"]'), 
        ToDate: this.Containers.FilterBarContainer.locator('[title="To Date"]'), 
        Currency: this.Containers.FilterBarContainer.locator('[title="Currency"]'),
    }; 

    Buttons = {
         // filter bar 
         Go: this.Containers.FilterBarContainer.locator('"Go"'), 
         HideFilterBar: this.Containers.FilterBarContainer.locator('"Hide Filter Bar"'),
         CollapseBtn: this.Containers.FilterBarContainer.locator('[id*="collapseBtn-img"]'), 
         PinBtn: this.Containers.FilterBarContainer.locator('[id*="pinBtn-img"]'), 

         // license relevant 
         ShowChartView: this.Containers.LicenseRelevantContainer.locator('[title="Show Chart View"]'), 
         ShowTableView: this.Containers.LicenseRelevantContainer.locator('[title="Show Table View"]'),
    };

    DropDowns = {
        Currency: this.Containers.FilterBarContainer.locator('[aria-labelledby*="currencySelector-arrow-label"]'), 
        DisplayBy: this.Containers.LicenseRelevantContainer.locator('[id*="groupBySelector-arrow"]'),
    }
}