import {createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
    'women-shoes': 1,
    'men-shoes': 2,
    'women-purses': 3,
    'women-bags': 4,
    'men-bags': 5,
    'business-dresses': 6,
    'summer-dresses': 7,
    'women-vests': 8,
    'women-pants': 9,
    'women-hats': 10,
    'women-watches': 11,
    'belts': 12,
    'men-hats': 13,
    'men-watches': 14,
    'men-blazers': 15,
    'men-shirts': 16,
    'men-vests': 17,
    'men-pants': 18,
    'women-shades': 19,
    'men-shades': 20,
    'necklaces': 21,
    'all-women': 22,
    'all-men': 23
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections.find(
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        )
    );