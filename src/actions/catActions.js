// write and export your action creator function here -> fetchCats()
// Thunk alters the behavior of action creator functions, allowing us to return a function that takes in dispatch
// Inside this function, we can execute async code, and, once resolved, we can use dispatch to update our store with the data

// LOADING_CATS should be dispatched before the fetch() request is called
// ADD_CATS should be dispatched along with a payload of the cats JSON collection
export function fetchCats() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CATS' })
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
            .then(resp => resp.json())
            .then(data => dispatch({ type: 'ADD_CATS', cats: data.images }))
        // in this case, we just need the data inside images, so we can pass that directly inside the 2nd dispatch
    }
}