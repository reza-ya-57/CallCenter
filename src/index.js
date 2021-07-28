import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rtl from 'jss-rtl';
import { create } from 'jss';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/core/styles';
import {theme} from './Theme/Theme';
import {BrowserRouter} from 'react-router-dom';
import {createStore , applyMiddleware , compose , combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {authReducer} from "./Redux/Reducers/authReducer";


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
        <App />
      </StylesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.Fragment>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
