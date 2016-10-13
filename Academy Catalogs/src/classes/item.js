let uniqueItemId = 0;

export class Item {
    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._id = ++uniqueItemId;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (!value || value.length < 2 || value.length > 40) {
            throw new Error('Item name doesnt meet the conditions!');
        }

        this._name = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        if (value === null || value === '') {
            throw new Error('Item description doesnt meet the conditions!');
        }
        
        this._description = value;
    }

    get id() {
        return this._id;
    }
}