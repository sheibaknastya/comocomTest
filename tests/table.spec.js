import users from 'data/users.json';

// @ts-check
const { test, expect } = require('@playwright/test');

let mainPage;

test.describe('Table tests', () => {
  test.beforeEach(async ({page}) => {
    let loginPage = new LoginPage(page);

    // Open login page
    await loginPage.open();

    // Login with user
    await loginPage.login(users.userForTest1);

    // Verify main page is opened
    mainPage = new MainPage(page);
    await expect(mainPage.tab.header).toBeVisible();
  });

  test('test1: get table values', async ({page}) => {
    // Switch to tab A
    await mainPage.switchToTab('Tab A');
    await expect(mainPage.tab.table.rows).toBeVisible();

    // Print all the rows from the table
    let count = 0;

    for (let i = 0; i < await mainPage.tab.table.rows.count(); i++) {
      let row = await mainPage.tab.table.row(i);
      console.log(await row.text());

      // Get rows count where Score > 0.5
      if (parseFloat(await row.value('Score')) > 0.5) {
        count++;
      }
    }

    console.log(count);
  });

  test('test2: check table values', async ({page}) => {
    // Switch to tab B
    await mainPage.switchToTab('Tab B');
    await expect(mainPage.tab.table.rows).toBeVisible();

    // Loop though all the rows
    for (let i = 0; i < 10; i++) {
      let row = await mainPage.tab.table.row(i);

      // Open popup by clicking on a link
      await row.link.click();

      const labels = ['a', 'b', 'c', 'd', 'e'];

      // Compare all the values
      for (let j = 0; j < 5; j++) {
        await expect(mainPage.popup.dropdown(labels[j]).textContent()).toEqual(await row.value(j))
      }
    }
  });
})