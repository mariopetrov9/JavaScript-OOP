let uniqueCatalogId = 0;

export class Catalog {
    constructor(name) {
        this._name = name;
        this._items = [];
        this._id = ++uniqueCatalogId;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (!value || value.length < 2 || value.length > 40) {
            throw new Error('Catalog name doesnt meet the conditions!');
        }

        this._name = value;
    }

    get items() {
        return this._items;
    }

    get id() {
        return this._id;
    }

    add(...items) {
        if (Array.isArray(items[0])) {
            items = items[0];
        }

        if (items.length === 0) {
            throw new Error('No items are added!');
        }

        this.items.push(...items);

        return this;
    }

    find(x) {
        if (typeof x === 'number') {
            for(let item of this.items) {
                if (item.id === x) {
                    return item;
                }
            }

            return null;
        }

        if (x !== null && typeof x === 'object') {
            return this.items.filter(function(item) {
                return Object.keys(x).every(function(prop) {
                    return x[prop] === item[prop];
                })
            });
        }

        throw new Error('Invalid options or id!');
    }

    search(pattern) {
        if (typeof pattern !== 'string' || pattern === '') {
            throw new Error('Search pattern should be a non-empty string!');
        }

        pattern = pattern.toLowerCase();

        return this.items.filter(item =>
            item.name.toLowerCase().includes(pattern) ||
            item.description.toLowerCase().includes(pattern));
    }
}