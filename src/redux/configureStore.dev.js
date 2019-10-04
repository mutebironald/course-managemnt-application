import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; //ensures that errors are reported when one tries to mutate state.
import thunk  from 'redux-thunk';

export default function configureStore(initialState){
    const composeEnhancers =
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //adds support for redux devtools
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk, reduxImmutableStateInvariant())
            )
            );
}
