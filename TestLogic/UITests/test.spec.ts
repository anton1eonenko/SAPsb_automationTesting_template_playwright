import {expect} from '@playwright/test';
import {test} from '../BaseTest';
import { SectionsEnum, SubscriptionsAndBillingEnum, PricingEnum, MasterDataAndConfigurationEnum, MonitoringEnum } from '../../Enums/Components/HeaderMenu/HomeModalEnums';

test.describe('abc', () => {
    test('abc', async ({pageManager, page}) => {
        await page.goto('https://test-idp.eu10.revenue.cloud.sap/launchpad#Shell-home')
        await pageManager.loginPage.LogIn('anton.leonenko@clarity.cx', 'Greedis9good'); 
        await pageManager.headerMenu.Buttons.Home.click(); 
        await pageManager.homeModal.ChooseSectionAndSubSectionOnTheHomeModal(SectionsEnum.Pricing, PricingEnum.ManageRatePlans); 
        await expect(page).toHaveURL('https://test-idp.eu10.revenue.cloud.sap/launchpad#RatePlans-list?sap-ui-app-id-hint=sap.ui.ngom.rateplanapp'); 
    });
});