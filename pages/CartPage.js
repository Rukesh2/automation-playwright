import { expect } from "@playwright/test";

export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.item');
  }

  async assertCartCount(count) {
    await expect(this.cartItems).toHaveCount(count);
  }

  async increaseItem(name) {
    await this.page.getByRole('button', { name: '+' }).click();
  }

  async decreaseItem(name) {
    await this.page.getByRole('button', { name: '-' }).click();
  }

  async getQuantity(name) {
    const qty = await this.page.locator(`#qty-${name}`).textContent();
    return Number(qty);
  }
}


