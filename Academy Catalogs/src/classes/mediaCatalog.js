import {Catalog} from './catalog.js';

export class MediaCatalog extends Catalog {
    constructor(name) {
        super(name);
    }

    add(...medias) {
        if (Array.isArray(medias[0])) {
            medias = medias[0];
        }

        medias.forEach(function(x) {
            if (!(x instanceof Media)) {
                throw 'Must add only medias';
            }
        });

        return super.add(...medias);
    }

    getTop(count) {
        if (typeof count !== 'number') {
            throw new Error('Count should be a number!');
        }

        if (count < 1) {
            throw new Error('Count must be more than 1!');
        }

        return this.items
            .sort((a, b) => a.rating < b.rating)
            .filter((_, ind) => ind < count)
            .map(x => ({id: x.id, name: x.name}));
    }

    getSortedByDuration() {
        return this.items
            .sort((a, b) => {
                if (a.duration === b.duration) {
                    return a.id < b.id;
                }

                return a.duration > b.duration;
            });
    }
}