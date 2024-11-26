class MainPage {
    constructor(page) {
        this.page = page;
    }

    async switchToTab(tabName) {
        await this.page.getByText(tabName).click();
    }

    get tab() {
        return new Tab(this.page);
    }

    get popup() {
        return new Popup(this.page);
    }
}