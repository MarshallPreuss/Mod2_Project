import React , {useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Bring in the Asynchronous FetchPosts action

import {fetchEvents} from '../Actions/eventActions';

import { Event } from '../Components/Event';

// Redux state is now in the props of this component

const EventPage = ({dispatch, loading, events, hasError}) => {
    useEffect(()=> {
        dispatch(fetchEvents())
    }, [dispatch])

    // Show loading, error, or success fetch

const renderEvents = () => {
    if(loading){
        return <p>One Sec... Loading Posts</p>
    } 
    if(hasError){
        return <p>Unable to display Posts</p>
    }
    return events.map((event)=> <Event key={event.id} event={event} />)
    }

    return(
        <section>
            <h1 className="postTitle">Natural Events</h1>
            <br/>
            
    
            {renderEvents()}
        </section>
    )
}


// Map Redux state to the React component props

const mapStateToProps = (state) => ({
    loading: state.events.loading,
    events: state.events.events,
    hasErrors: state.events.hasErrors
})


// Connecting Redux to React

export default connect(mapStateToProps)(EventPage)