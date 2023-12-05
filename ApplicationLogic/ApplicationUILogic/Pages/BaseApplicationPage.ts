import {BasePage} from "../../BasePage"; 

export class BaseApplicationPage extends BasePage {
    constructor(page) {
        super(page); 
    }; 

    MainContainers = {
        HeaderContainer: this.page.locator('[id="shell-header"]'), 
        NavigationMenuContainer: this.page.locator('[id="anchorNavigationBar"]'), 
        SubscriptionsAndBillingContainer: this.page.locator('//h2[@title="Subscriptions and Billing"]/../../..//ul'), 
        PricingContainer: this.page.locator('//h2[@title="Pricing"]/../../..//ul'), 
        MasterDataAndConfigurationContainer: this.page.locator('//h2[@title="Master Data and Configuration"]/../../..//ul'), 
        MonitoringContainer: this.page.locator('//h2[@title="Monitoring"]/../../..//ul')
    };

    Tiles = {
        // Subscription and billing  
        ManageSubscriptins: this.MainContainers.SubscriptionsAndBillingContainer.locator('//a[contains(@aria-label, "Manage Subscriptions")]'), 
        ManageBillingData: this.MainContainers.SubscriptionsAndBillingContainer.locator('//a[contains(@aria-label, "Manage Billing Data")]'), 
        ManageUsageRecords: this.MainContainers.SubscriptionsAndBillingContainer.locator('//a[contains(@aria-label, "Manage Usage Records")]'), 

        // Pricing 
        ManageFieldCatalog: this.MainContainers.PricingContainer.locator('//a[contains(@aria-label, "Manage Field Catalog")]'), 
        ManageAggregationCatalog: this.MainContainers.PricingContainer.locator('//a[contains(@aria-label, "Manage Aggregation Catalog")]'), 
        ManageLookupTables: this.MainContainers.PricingContainer.locator('//a[contains(@aria-label, "Manage Lookup Tables")]'), 
        ManagePriceElementSpecifications: this.MainContainers.PricingContainer.locator('//a[contains(@aria-label, "Manage Price Element Specifications")]'), 
        ManagePricingSchemes: this.MainContainers.PricingContainer.locator('//a[contains(@aria-label, "Manage Pricing Schemes")]'), 
        ManageRatePlanTemplats: this.MainContainers.PricingContainer.locator('//a[contains(@aria-label, "Manage Rate Plan Templates")]'), 
        ManageRatePlans: this.MainContainers.PricingContainer.locator('//a[contains(@aria-label, "Manage Rate Plans")]'), 
        ManageAllowanceTemplates: this.MainContainers.PricingContainer.locator('//a[contains(@aria-label, "Manage Allowance Templates")]'), 

        // Master Data and Configuration 
        CustomerOverview: this.MainContainers.MasterDataAndConfigurationContainer.locator('//a[contains(@aria-label, "Customer Overview")]'), 
        ManageProducts: this.MainContainers.MasterDataAndConfigurationContainer.locator('//a[contains(@aria-label, "Manage Products")]'), 
        ManageLookupTableData: this.MainContainers.MasterDataAndConfigurationContainer.locator('//a[contains(@aria-label, "Manage Lookup Table Data")]'), 
        ManageBusinessConfiguration: this.MainContainers.MasterDataAndConfigurationContainer.locator('//a[contains(@aria-label, "Manage Business Configuration")]'), 

        // Monitoring 
        LicenseRelevantRevenue: this.MainContainers.MonitoringContainer.locator('//a[contains(@aria-label, "License-Relevant Revenue")]'), 
        MonitorRating: this.MainContainers.MonitoringContainer.locator('//a[contains(@aria-label, "Monitor Rating")]'),
    };
};