import React , {useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Bring in the Asynchronous FetchPosts action

import {fetchCategories} from '../Actions/categoryActions';

import { Category } from '../Components/Category';

// Redux state is now in the props of this component

const CategoryPage = ({dispatch, loading, categories, hasError}) => {
    useEffect(()=> {
        dispatch(fetchCategories())
    }, [dispatch])

    // Show loading, error, or success fetch

const renderCategories = () => {
    if(loading){
        return <p>One Sec... Loading Posts</p>
    } 
    if(hasError){
        return <p>Unable to display Posts</p>
    }
    return categories.map((category)=> <Category key={category.id} category={category} />)
    }

    return(
        <section>
            <h1 className="catTitle">Categories</h1>
            <br/>
            
    <br/>
            {renderCategories()}
        </section>
    )
}


// Map Redux state to the React component props

const mapStateToProps = (state) => ({
    loading: state.categories.loading,
    categories: state.categories.categories,
    hasErrors: state.categories.hasErrors
})


// Connecting Redux to React

export default connect(mapStateToProps)(CategoryPage)