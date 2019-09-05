import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: []
}

const reducer = (currentState = initialState, action) => {
    switch (action.type) {

        case actionTypes.INITIATE_PRODUCTS:

                return {
                    ...currentState,
                    products: action.products
                }

        case actionTypes.TOGGLE_FAV:
                
                const prevIndex = action.index;

                const newProds = [...currentState.products];

                newProds[prevIndex].isFavorite = !currentState.products[prevIndex].isFavorite;

                return {
                    ...currentState,
                    products: newProds
                }

        default:
            return currentState
    }
}

export default reducer;