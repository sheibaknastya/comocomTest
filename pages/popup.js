class Popup {
    constructor(page) {
        this.page = page;
    }

    async dropdown(label) {
        return this.page.getByLabel(label);
    }
}
