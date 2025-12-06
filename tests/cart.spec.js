import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { HomePage } from '../pages/HomePage.js';
import { CartPage } from '../pages/CartPage.js';

test('Added products are visible in cart', async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login('test@example.com', 'password123');

  await home.addFirstProduct();
  await home.addFirstProduct();  // add twice
  await home.gotoCart();

  await cart.assertCartCount(1);
});
