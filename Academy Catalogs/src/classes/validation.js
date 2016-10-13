export class Validation {
    constructor() {}

    static validateName(value) {
        if (!value || value.length < 2 || value.length > 40) {
            throw new Error('Item name doesnt meet the conditions!');
        }
    }

    static validateDescription(value) {
        if (!value) {
            throw new Error('Item description cannot be left empty!');
        }
    }

    static validateISBN(value) {
        let hasOnlyDigits = true;
        value = value.split('');

        for (let char of value) {
            if (!isFinite(char)) {
                hasOnlyDigits = false;
                break;
            }
        }

        let hasProperLength = value.length == 10 || value.length == 13;
        if (!hasOnlyDigits || !hasProperLength) {
            throw new Error('ISBN doesnt match criteria!');
        }
    }

    static validateGenre(value) {
        if (value.length < 2 || value.length > 20) {
            throw new Error('Genre doesnt match the name conditions!');
        }
    }

    static validateDuration(value) {
        if (!value || value < 1) {
            throw new Error('Duration cannot be less than 1!');
        }
    }

    static validateRating(value) {
        if (!value || value < 1 || value > 5) {
            throw new Error('Rating must be from 1 to 5');
        }
    }

    static itemsToAddValidation(items, classType) {
        if (!items || items.length === 0) {
            throw new Error('No items provided!');
        }

        for (let item of items) {
            if (classType instanceof BookCatalog) {
                if (!(item instanceof Book)) {
                    throw new Error('Element is not of type Book');
                }
            } else if (classType instanceof MediaCatalog) {
                if (!(item instanceof Media)) {
                    throw new Error('Element is not of type Media');
                }
            }
        }
    }

    static validateItemsArray(items) {
        var itemsArray;

        if (Array.isArray(items[0])) {
            itemsArray = items[0];
        } else {
            itemsArray = items;
        }
        return itemsArray;
    }

    static validateMediaTopCount(value) {
        if (typeof value != 'number' || value < 1) {
            throw new Error('Top count is not matching criteria');
        }
    }

    static validateSearchPattern(value) {
        if (value.length < 1) {
            throw new Error('Pattern must contain at least one character!');
        }
    }

    static validateSearchID(value) {
        if (!value || typeof value != 'number') {
            throw new Error('Item id to search for is not in the correct format!');
        }
    }
}