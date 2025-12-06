import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.js';

test('Invalid login should show error', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('wrong@example.com', 'wrong');
  await login.assertErrorVisible();
});

test('Valid login should navigate to home page', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('test@example.com', 'test');
  await expect(page).toHaveURL(/home.html/);
});
