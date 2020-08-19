// Creating out Redux action types

export const GET_CATEGORIES ='GET_CATEGORIES'
export const GET_CATEGORIES_SUCCESS ='GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILURE ='GET_CATEGORIES_FAILURE'


// Creat my Redux Actions (using creators)

export const getCategories = () => ({
    type: GET_CATEGORIES
})

export const getCategoriesSuccess = (categories) => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: categories,
})

export const getCategoriesFailure = () => ({
    type: GET_CATEGORIES_FAILURE
})


// Combining all actions in an Asynchronous Thunk


export function fetchCategories(){
    return async (dispatch) => {
        dispatch(getCategories)

        try{
            const res = await
            fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories')
            const data = await res.json()

// Make sure you send a json Array for whatever API URL being used

            dispatch(getCategoriesSuccess(data.categories))

        } catch (error) {
            dispatch(getCategoriesFailure())
        }
    }
}