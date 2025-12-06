import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { HomePage } from '../pages/HomePage.js';

test('Adding a product reduces available stock', async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);

  await login.goto();
  await login.login('test@example.com', 'test');

  const before = await home.getStockValue(0);
  await home.addFirstProduct();
  const after = await home.getStockValue(0);

  expect(after).toBeLessThan(before);
});
