import  {expect } from '@playwright/test'

export class HomePage {
  constructor(page) {
    this.page = page;
    this.addButtons = page.getByRole('button', { name: 'Add' });
    this.goToCartBtn = page.getByRole('button', { name: 'Go to Cart' });
  }

  async addFirstProduct() {
    await this.addButtons.first().click();
  }

  async addProductByName(name) {
    await this.page.getByRole('button', { name: `Add (${name})` }).click();
  }

  async gotoCart() {
    await this.goToCartBtn.click();
  }

  async getStockValue(index) {
    const txt = await this.page.locator(`#available-${index}`).textContent();
    return Number(txt);
  }
}

