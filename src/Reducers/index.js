import {combineReducers} from 'redux';
import categoriesReducer from './categoriesReducer';
import eventsReducer from './eventsReducer';


const rootReducer = combineReducers({
    categories:categoriesReducer,
    events:eventsReducer,
})


export default rootReducer;