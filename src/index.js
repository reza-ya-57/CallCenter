import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@material-ui/core/CssBaseline';
import rtl from 'jss-rtl';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import {BrowserRouter} from 'react-router-dom';
import {createStore , applyMiddleware , compose , combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {authReducer} from "./Redux/Reducers/authReducer";
import themeReducer from "./Redux/Reducers/ThemeReducer";


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer , 
  theme: themeReducer
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
    <BrowserRouter>
        <CssBaseline />
        <StylesProvider jss={jss}>
        <App />
      </StylesProvider>
    </BrowserRouter>
  </React.Fragment>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
