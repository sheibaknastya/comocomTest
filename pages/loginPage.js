class LoginPage {
    constructor(page) {
        this.page = page;
    }

    get usernameInput() {
        return this.page.getByLabel('Username');
    }

    get passwordInput() {
        return this.page.getByLabel('Password');
    }

    get loginButton() {
        return this.page.getByText('Login');
    }

    async open() {
        await this.page.goto('https://test.app');
    }

    async login(user) {
        await this.usernameInput.fill(user.username);
        await this.passwordInput.fill(user.password);
        await this.loginButton.click();
    }
}