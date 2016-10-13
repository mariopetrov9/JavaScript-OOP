import {Item} from './item.js'

export class Book extends Item {
    constructor(name, isbn, genre, description) {
        super(name, description);
        this._isbn = isbn;
        this._genre = genre;
    }

    get isbn() {
        return this._isbn;
    }

    set isbn(value) {
        let hasOnlyDigits = true;
        value = value.split('');

        for (let char of value) {
            if (isFinite(char)) {
                hasOnlyDigits = false;break;
            }
        }

        let hasProperLength = value.length === 10 || value.length === 13;
        if (!hasOnlyDigits || !hasProperLength) {
            throw new Error('Book ISBN doesnt meet the conditions!');
        }

        this._isbn = value;
    }

    get genre() {
        return this._genre;
    }
        
    set genre(value) {
        if (!value || value.length < 2 || value.length > 20) {
            throw new Error('Book genre doesnt meet the conditions!');
        }
        
        this._genre = value;
    }
}