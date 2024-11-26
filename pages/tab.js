class Tab {
    constructor(page) {
        this.page = page;
    }

    get header() {
        return this.page.getByRole('tab').getByRole('heading');
    }

    get table() {
        return new Table(this.page.getByRole('table'));
    }
}
