import { BaseApplicationPage } from '../../../Pages/BaseApplicationPage'; 

export class ManageUserRecords extends BaseApplicationPage {
    constructor(page) {
        super(page);
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[id*="UsagerecordDisplayPage-headerContent"]'), 
        UsageRecordsContainer: this.page.locator('[data-sap-ui*="TableObjectPageSection-"]')
    }; 

    Buttons = {
        // Filter bar 
        Go: this.Containers.FilterBarContainer.locator('"Go"'), 
        HideFilterBar: this.Containers.FilterBarContainer.locator('"Hide Filter Bar"'), 
        Filters: this.Containers.FilterBarContainer.locator('"Filters"'), 
        CollapseBtn: this.Containers.FilterBarContainer.locator('[data-sap-ui*="collapseBtn-"]'), 
        PinBtn: this.Containers.FilterBarContainer.locator('[data-sap-ui*="pinBtn-"]'), 

        // Usage records 
        Create: this.Containers.UsageRecordsContainer.locator('"Create"'), 
        UTC: this.Containers.UsageRecordsContainer.locator('"UTC"'), 
        LocalTime: this.Containers.UsageRecordsContainer.locator('"Local Time"'), 
        Sort: this.Containers.UsageRecordsContainer.locator('[id*="sortUsageRecordButton-img"]'), 
        Settings: this.Containers.UsageRecordsContainer.locator('[id*="tableSettingsButton-img"]'), 

        // other buttons 
        MeasuredUsageRecords: this.page.locator('//bdi[contains(text(), "Measured Usage Records")]'), 
        ForecastUsageRecords: this.page.locator('//bdi[contains(text(), "Forecast Usage Records")]')
    }; 

    InputFields = {
        TechnicalResourceType: this.page.locator('//label[contains(@title, "Technical Resource Type")]/../following-sibling::div//input[contains(@class, "Input")])]'),
        TechnicalResourceID: this.page.locator('//label[contains(@title, "Technical Resource ID")]/../following-sibling::div//input[contains(@class, "Input")]'),
        RateSubelement: this.page.locator('//label[contains(@title, "Rate Subelement")]/../following-sibling::div//input[contains(@class, "Input")]'), 
        SubscriptionID: this.page.locator('//label[contains(@title, "Subscription ID")]/../following-sibling::div//input[contains(@class, "Input")]'), 
        PeriodStartFrom: this.page.locator('//label[contains(@title, "Period Start")]/../following-sibling::div//input[contains(@class, "Input")]'), 
        PeriodEndTo: this.page.locator('//label[contains(@title, "Period End")]/../following-sibling::div//input[contains(@class, "Input")]')
    };
}