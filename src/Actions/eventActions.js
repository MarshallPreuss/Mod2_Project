// Creating out Redux action types

export const GET_EVENTS ='GET_EVENTS'
export const GET_EVENTS_SUCCESS ='GET_EVENTS_SUCCESS'
export const GET_EVENTS_FAILURE ='GET_EVENTS_FAILURE'


// Creat my Redux Actions (using creators)

export const getEvents = () => ({
    type: GET_EVENTS
})

export const getEventsSuccess = (events) => ({
    type: GET_EVENTS_SUCCESS,
    payload: events,
})

export const getEventsFailure = () => ({
    type: GET_EVENTS_FAILURE
})


// Combining all actions in an Asynchronous Thunk


export function fetchEvents(){
    return async (dispatch) => {
        dispatch(getEvents)

        try{
            const res = await
            fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
            const data = await res.json()

// Make sure you send a json Array for whatever API URL being used

            dispatch(getEventsSuccess(data.events))

        } catch (error) {
            dispatch(getEventsFailure())
        }
    }
}