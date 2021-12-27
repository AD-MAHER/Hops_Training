import {applyMiddleware , createStore} from 'redux';
import {createLoger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from '../Reducers';

const middleware = _DEV_?
                   applyMiddleware(promise , thunk , createLoger())
                   : applyMiddleware(promise , thunk);
export default createStore(reducer,middleware);