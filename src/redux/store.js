import {createStore, applyMiddleware} from 'redux';
import { getNextState } from './reducers';
import thunk from 'redux-thunk';

const store = createStore(getNextState, applyMiddleware(thunk));



export default store;
