import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder("Username").fill("standard_user");

  await page.getByPlaceholder("Password").fill("secret_sauce");

  await page.click("[id='login-button']");
  await page.waitForTimeout(2000);

  // Expect login is success
  await expect(page).toHaveURL(/inventory/);
  await page.waitForTimeout(2000);


  // select products
  await page.click("[id='add-to-cart-sauce-labs-backpack']");
  await page.waitForTimeout(1000);

  await page.click("[id='add-to-cart-sauce-labs-bike-light']");
  await page.waitForTimeout(1000);
  
  await page.click("[id='add-to-cart-sauce-labs-bolt-t-shirt']");
  await page.waitForTimeout(1000);

  await page.click("[id='remove-sauce-labs-backpack']");

  
  // Expect product
  await expect(page.locator(".shopping_cart_link")).toHaveText('2');
  await page.waitForTimeout(2000);


  // go to cart page
  await page.click("[class='shopping_cart_link']");

  // Expect go to cart page is success
  await expect(page).toHaveURL(/cart/);
  await page.waitForTimeout(2000);


  // go to checkout page
  await page.click("[id='checkout']");

  // Expect checkout page is success
  await expect(page).toHaveURL(/checkout-step-one/);
  await page.waitForTimeout(2000);


  // fill checkout information
  await page.getByPlaceholder("First Name").fill("Erwhin");
  await page.waitForTimeout(1000);

  await page.getByPlaceholder("Last Name").fill("Haryadi");
  await page.waitForTimeout(1000);

  await page.getByPlaceholder("Zip/Postal Code").fill("55194");
  await page.waitForTimeout(1000);



  // go to payment page
  await page.click("[id='continue']");
  await page.waitForTimeout(2000);


  // go to payment page
  await page.click("[id='finish']");
  await page.waitForTimeout(2000);


  // Expect complete page is success
  await expect(page).toHaveURL(/checkout-complete/);
  await page.waitForTimeout(2000);
});