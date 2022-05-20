import App from "./App";
import React from 'react'
import ReactDOM from 'react-dom'
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducers";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer,composeWithDevTools())
ReactDOM.render(
<Provider store={store}><App/></Provider>
,
 document.getElementById('root'))