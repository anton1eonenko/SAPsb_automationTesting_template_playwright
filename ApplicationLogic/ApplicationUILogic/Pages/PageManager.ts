import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { BaseApplicationPage } from "./BaseApplicationPage";
import { NavigationMenu } from "../Components/NavigationMenu";
import { HeaderMenu } from "../Components/HeaderMenu/HeaderMenu";
import { HomeModal } from "../Components/HeaderMenu/Modals/HomeModal";
import { ProfileModal } from "../Components/HeaderMenu/Modals/ProfileModal";
import { ManageSubscriptions } from "../Components/SubsctiontionsAndBilling/ManageSubscriptions/ManageSubsctiptions";
import { ManageBillingData } from "../Components/SubsctiontionsAndBilling/ManageBillingData/ManageBillingData";
import { ManageFieldCatalog } from "../Components/Pricing/ManageFieldCatalog/ManageFieldCatalog";

export class PageManager {
    page: Page;
    baseApplicationPage;
    loginPage;
    navigationMenu;
    headerMenu;
    homeModal; 
    profileModal;
    manageSubscriptions;
    manageBillingData;
    manageFieldCatalog


    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(page); 
        this.baseApplicationPage = new BaseApplicationPage(page); 
        this.navigationMenu = new NavigationMenu(page); 
        this.headerMenu = new HeaderMenu(page); 
        this.homeModal = new HomeModal(page);
        this.profileModal = new ProfileModal(page); 
        this.manageSubscriptions = new ManageSubscriptions(page);
        this.manageBillingData = new ManageBillingData(page);
        this.manageFieldCatalog = new ManageFieldCatalog(page);
    }
}