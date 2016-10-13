import {Book} from './book.js';
import {Catalog} from './catalog.js';

export class BookCatalog extends Catalog {
    constructor(name) {
        super(name);
    }

    add(...books) {
        if (Array.isArray(books[0])) {
            books = books[0];
        }

        books.forEach(function(x) {
            if (!(x instanceof Book)) {
                throw new Error('Must add only books!');
            }
        });

        return super.add(...books);
    }

    getGenres() {
        let genres = {};
        this.items.forEach(item => {
            genres[item.genre] = true;
        });

        return Object.keys(genres);
    }

    find(x) {
        return super.find(x);
    }
}