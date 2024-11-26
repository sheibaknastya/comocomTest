class Table {
    constructor(element) {
        this.element = element;
    }

    get rows() {
        return this.element.getByRole('row');
    }

    async row(index) {
        return new Row(this.rows.nth(index));
    }
}
