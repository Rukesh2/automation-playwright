import  {expect } from '@playwright/test'

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.getByPlaceholder('Email');
    this.password = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.errorMsg = page.getByText('Invalid credentials');
  }

  async goto() {
    await this.page.goto('https://rukesh2.github.io/automation-playwright/login.html');
  }

  async login(email, pwd) {
    await this.email.fill(email);
    await this.password.fill(pwd);
    await this.loginBtn.click();
  }

  async assertErrorVisible() {
    await expect(this.errorMsg).toBeVisible();
  }
}

