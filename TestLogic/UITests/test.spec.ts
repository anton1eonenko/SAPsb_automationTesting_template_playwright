import {expect} from '@playwright/test';
import {test} from '../BaseTest';
import { CredsEnum } from '../../Enums/CredsEnum';
import { NavigationItemsEnum } from '../../Enums/Components/MasterDataAndConfiguration/ManageBusinessConfigurationEnums';

test.describe('abc', async() => {
    test('abc', async ({pageManager, page}) => {
        await page.goto('https://test-idp.eu10.revenue.cloud.sap/launchpad#Shell-home')
        await pageManager.loginPage.LogIn(CredsEnum.Login, CredsEnum.Password); 
        await pageManager.baseApplicationPage.Tiles.ManageBusinessConfiguration.click();
        await pageManager.businessConfiguratorSideMenu.ChooseNecessaryNavigationItem(NavigationItemsEnum.Currencies);
    });
});