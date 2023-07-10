import { InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                moreFloors: {
                    merge(existing, incoming, { readField }) {
                        const results = existing ? { ...existing.results } : {};

                        incoming.results.forEach(floor => {
                            const field: any = readField("id", floor);

                            results[field] = floor;
                        });

                        return {
                            pageInfo: incoming.pageInfo,
                            results,
                        };
                    },
                    read(existing) {
                        if (existing) {
                            return {
                                pageInfo: existing.pageInfo,
                                results: Object.values(existing.results),
                            };
                        }
                    },
                },
                moreUsers: {
                    merge(existing, incoming, { readField }) {
                        const results: any = existing ? { ...existing.results } : {};
                        
                        incoming.results.forEach((floor: any) => {
                            const field: any = readField("id", floor);

                            results[field] = floor;
                        });

                        return {
                            pageInfo: incoming.pageInfo,
                            results,
                        };
                    },
                    read(existing) {
                        if (existing) {
                            return {
                                pageInfo: existing.pageInfo,
                                results: Object.values(existing.results),
                            };
                        }
                    },
                },
            },
        },
    },
});

// const offsetFromCursor = (items, cursor, readField) => {
//     // Search from the back of the list because the cursor we're
//     // looking for is typically the ID of the last item.
//     for (let i = items.length - 1; i >= 0; --i) {
//         const item = items[i];
//         // Using readField works for both non-normalized objects
//         // (returning item.id) and normalized references (returning
//         // the id field from the referenced entity object), so it's
//         // a good idea to use readField when you're not sure what
//         // kind of elements you're dealing with.
//         if (readField("id", item) === cursor) {
//             // Add one because the cursor identifies the item just
//             // before the first item in the page we care about.
//             return i + 1;
//         }
//     }
//     // Report that the cursor could not be found.
//     return -1;
// }

export {
    cache,
}