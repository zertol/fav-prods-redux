import * as actionTtypes from './actionTypes';
import axios from '../../axios-ins';

export const ToggleFav = (id, index, isFav) => {

    return disptach => {
        axios.patch('products/' + index + '.json', { "isFavorite": !isFav }).then(resp => {
            disptach({
                type: actionTtypes.TOGGLE_FAV,
                id: id,
                index: index
            });
        });
    }
}

export const FetchProducts = () => {
    return disptach => {
        axios.get('products.json').then(resp => {
            disptach({
                type: actionTtypes.INITIATE_PRODUCTS,
                products: resp.data
            })
        });
    }
}