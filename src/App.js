import './App.css';
import { useSelector } from 'react-redux';
import { Route , Switch , withRouter } from 'react-router-dom';
import Drawer from './Components/Drawer/Drawer.js';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import CallPage from './Pages/CallPage/CallPage';
import SettingPage from './Pages/SettingPage/SettingPage';
import {ThemeProvider} from '@material-ui/core/styles';


function App() {

  let {customTheme} = useSelector(state => state.theme)
  let routes =  (
    <Switch>
      <Route exact path="/dashboard"  component={DashboardPage} />
      <Route exact path="/call"  component={CallPage} />
      <Route exact path="/setting"  component={SettingPage} />
      <Route path="/"  component={DashboardPage} />
    </Switch>
  )
  
  return (
      <div className="App">
        <ThemeProvider theme={customTheme}>
          <Drawer>
            {routes}
          </Drawer>
        </ThemeProvider>
    </div>
  );
}

export default withRouter(App);
