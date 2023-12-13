import { Locator } from "@playwright/test";
import { BaseApplicationPage } from "../../../Pages/BaseApplicationPage";

export class ManageBillingData extends BaseApplicationPage {
    constructor(page) {
        super(page); 
    }; 

    Containers = {
        FilterBarContainer: this.page.locator('[id*="headerWrapper"]'),
        BillsContainer: this.page.locator('[class="sapFDynamicPageContent"]')
    }; 

    Buttons = {
        // Filter bar
        Go: this.Containers.FilterBarContainer.locator('"Go"'),  // [id*="btnGo-BDI"]
        HideFilterBar: this.Containers.FilterBarContainer.locator('"Hide Filter Bar"'), 
        Filters: this.Containers.FilterBarContainer.locator('"Hide Filter Bar"'), 
        CollapseBtn: this.Containers.FilterBarContainer.locator('[data-sap-ui*="collapseBtn-img"]'), 
        PinHeader: this.Containers.FilterBarContainer.locator('[id*="pinBtn-img"]'), 


        // Bills 
        ResetTransferStatus: this.Containers.BillsContainer.locator('"Reset Transfer Status"'), 
        Close: this.Containers.BillsContainer.locator('"Close"'), 
        Sort: this.Containers.BillsContainer.locator('[id*="BillSortButton-img"]'),
        Settings: this.Containers.BillsContainer.locator('[id*="Personalization-img"]'),
        ShowTableView: this.Containers.BillsContainer.locator('[title="Show Table View"]'), 
        ShowChartView: this.Containers.BillsContainer.locator('[title="Show Chart View"]')
    }; 

    InputFields = {
        BillNumber: this.Containers.FilterBarContainer.locator('[aria-labelledby*="billNumber"]'), 
        BillStatus: this.Containers.FilterBarContainer.locator('[aria-labelledby*="billStatus"]').first(), 
        TransferStatus: this.Containers.FilterBarContainer.locator('[aria-labelledby*="transferStatus"]').first(), 
        Markets: this.Containers.FilterBarContainer.locator('[aria-labelledby*="markets"]').first(), 
        Year: this.Containers.FilterBarContainer.locator('[aria-labelledby*="year"]').first(), 
        Month: this.Containers.FilterBarContainer.locator('[aria-labelledby*="month"]').first(), 
        SubscriptionID: this.Containers.FilterBarContainer.locator('[aria-labelledby*="subscriptionNumber"]'), 
        Customer: this.Containers.FilterBarContainer.locator('[aria-labelledby*="customer"]'),
        SplitELement: this.Containers.FilterBarContainer.locator('[aria-labelledby*="splitElement"]'), 
        Product: this.Containers.FilterBarContainer.locator('[aria-labelledby*="productFilterItem"]'), 
    }; 

    DropDowns = {
        BillStatus: this.Containers.FilterBarContainer.locator('[aria-labelledby*="billStatusSelector"]'),    // enum is required 
        TransferStatus: this.Containers.FilterBarContainer.locator('[aria-labelledby*="transferStatusSelector"]'),  // enum is required 
        Markets: this.Containers.FilterBarContainer.locator('[aria-labelledby*="marketsSelector"]'),  // enum is required 
        Year: this.Containers.FilterBarContainer.locator('[aria-labelledby*="newYearSelector"]'),  // enum is required 
        BillingType: this.Containers.FilterBarContainer.locator('[aria-labelledby*="chargeOrCredit"]'),  // enum is required 
        DeletionState: this.Containers.FilterBarContainer.locator('[aria-labelledby*="deletableStateFilter"]') // enum is required 
    }; 

    async InputAndPressEnter (inputField: Locator, value: string) {
        await inputField.fill(value); 
        await this.page.keyboard.press('Enter');
    };

    async InputCustomerMarketYearMonthAndClickGo(customer: string, market: string, year: string, month: string) {
        await this.InputAndPressEnter(this.InputFields.Customer, customer); 
        await this.InputAndPressEnter(this.InputFields.Markets, market); 
        await this.InputAndPressEnter(this.InputFields.Year, year); 
        await this.InputAndPressEnter(this.InputFields.Month, month); 
    };
}