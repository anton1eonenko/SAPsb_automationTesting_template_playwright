import {expect} from '@playwright/test';
import {test} from '../BaseTest';

test.describe('abc', async() => {
    test('abc', async ({pageManager, page}) => {
        await page.goto('https://test-idp.eu10.revenue.cloud.sap/launchpad#Shell-home')
        await pageManager.loginPage.LogIn('anton.leonenko@clarity.cx', 'Greedis9good'); 
        await pageManager.baseApplicationPage.Tiles.ManageProducts.click();
        await pageManager.manageProducts.InputFields.Market.fill('India'); 
        await page.keyboard.press('Enter'); 
        await pageManager.manageProducts.Buttons.Go.click(); 
        await pageManager.manageProducts.Buttons.CollapseBtn.click(); 
    });
});