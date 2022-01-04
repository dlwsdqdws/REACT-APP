import { createStore, applyMiddleware, compose} from "redux";
import reducer from './reducer';
import thunk from 'redux-thunk'


const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(thunk),
        // other store enhancers if any
      );

const store = createStore(reducer, enhancer);

export default store;