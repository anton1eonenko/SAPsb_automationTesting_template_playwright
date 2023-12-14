import {expect} from '@playwright/test';
import {test} from '../BaseTest';

test.describe('abc', async() => {
    test('abc', async ({pageManager, page}) => {
        await page.goto('https://test-idp.eu10.revenue.cloud.sap/launchpad#Shell-home')
        await pageManager.loginPage.LogIn('anton.leonenko@clarity.cx', 'Greedis9good'); 
        await pageManager.baseApplicationPage.Tiles.ManageAllowanceTemplates.click(); 
        await pageManager.manageAllowanceTemplates.InputFields.Description.fill('TedDemoAllowance'); 
        await pageManager.manageAllowanceTemplates.Buttons.Go.click(); 
        await pageManager.manageAllowanceTemplates.Buttons.CollapseBtn.click();
    });
});