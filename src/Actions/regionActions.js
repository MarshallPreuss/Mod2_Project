// Creating out Redux action types

export const GET_REGIONS ='GET_REGIONS'
export const GET_REGIONS_SUCCESS ='GET_REGIONS_SUCCESS'
export const GET_REGIONS_FAILURE ='GET_REGIONS_FAILURE'


// Creat my Redux Actions (using creators)

export const getRegions = () => ({
    type: GET_REGIONS
})

export const getRegionsSuccess = (regions) => ({
    type: GET_REGIONS_SUCCESS,
    payload: regions,
})

export const getRegionsFailure = () => ({
    type: GET_REGIONS_FAILURE
})


// Combining all actions in an Asynchronous Thunk


export function fetchRegions(){
    return async (dispatch) => {
        dispatch(getRegions)

        try{
            const res = await
            fetch('https://geocode.xyz/31.719,-100.592?json=1')
            const data = await res.json()

// Make sure you send a json Array for whatever API URL being used

            dispatch(getRegionsSuccess(data))

        } catch (error) {
            dispatch(getRegionsFailure())
        }
    }
}