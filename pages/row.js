class Row {
    constructor(element) {
        this.element = element;
    }

    get link() {
        return this.element.getByRole('link');
    }

    async text() {
        return this.element.textContent();
    }

    async value(columnNameOrIndex) {
        if (typeof columnNameOrIndex === 'string') {
            return this.element.getByRole('cell', { name: columnNameOrIndex })
        } else {
            return this.element.getByRole('cell').nth(columnNameOrIndex);
        }
    }
}
