import {test as base, Page} from '@playwright/test'; 
import { PageManager } from '../ApplicationLogic/ApplicationUILogic/Pages/PageManager';

export type TestOptions = {
    domain: string
}; 


export const test = base.extend<TestOptions & {pageManager: PageManager}> ({
    domain: ['', {option: true}], 

    pageManager: async ({page}, use) => {
        const pageManager = new PageManager(page); 
        await use(pageManager);
    },
});