import './App.css';
import {useState} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import {Route , Switch , withRouter , Redirect} from 'react-router-dom';
import * as actionCreator from './Redux/Actions/authAction';
import mainLayout from './Layout/mainLayout/mainLayout';
import { makeStyles } from '@material-ui/core/styles';
import formPage from './formPage/formPage';
import Drawer from './Drawer/Drawer';
import ClippedDrawer from './Drawer/menuItem';
// 
function App() {
  let routes =  (
    <Switch>
      <Route path="/"  component={formPage} />
    </Switch>
  )

  return (
      <div className="App">
        <Drawer />
        {/* <ClippedDrawer /> */}
    </div>
  );
}

export default withRouter(App);
