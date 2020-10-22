import {createStore} from 'redux';
import {show} from './actions/ListActions'

import * as reducer from './reducers/BlogReducer'

let store = createStore(reducer.initReducer);

store.dispatch(show)

export default store;