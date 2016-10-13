import {Item} from './item.js'

export class Media extends Item {
    constructor(name, description, duration, rating) {
        super(name, description);
        this._duration = duration;
        this._rating = rating;
    }

    get duration() {
        return this._duration;
    }

    set duration(value) {
        if (!value || value < 1) {
            throw new Error('Media duration doesnt meet the conditions!');
        }

        this._value = value;
    }

    get rating() {
        return this._rating;
    }

    set rating(value) {
        if (!value || value < 1 || value > 5) {
            throw new Error('Media duration doesnt meet the conditions!');
        }

        this._rating = value;
    }
}