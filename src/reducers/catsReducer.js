// add the catsReducer
// set up a switch that handles 2 action types: LOADING_CATS and ADD_CATS

// set up the initial state here
const catsReducer = (state = {
    cats: [],
    loading: false
}, action) => {
    switch (action.type) {
        // loading becomes true, while the rest of state is just copied to a new object
        case 'LOADING_CATS':
            return {
                ...state,
                cats: [...state.cats],
                loading: true
            }
        // loading becomes false, and state.cats is set to the action.cats payload
        // HINT: so we know we're expecting a payload object with a cats key
        case 'ADD_CATS':
            return {
                ...state,
                cats: action.cats,
                loading: false
            }
        default:
            return state
    }
}

export default catsReducer;