import './App.css';
import { useSelector } from 'react-redux';
import { Route , Switch , withRouter } from 'react-router-dom';
import formPage from './Components/formPage/formPage';
import Drawer from './Components/Drawer/Drawer.js';
import DashboardPage from './Components/Pages/Dashboard/DashboardPage';
import CallPage from './Components/Pages/CallPage/CallPage';
import SettingPage from './Components/Pages/SettingPage/SettingPage';
import { theme001 } from './Theme/CustomTheme/Theme001';
import {ThemeProvider} from '@material-ui/core/styles';


function App() {

  let {customTheme} = useSelector(state => state.theme)
  let routes =  (
    <Switch>
      <Route exact path="/dashboard"  component={DashboardPage} />
      <Route exact path="/call"  component={CallPage} />
      <Route exact path="/setting"  component={SettingPage} />
      <Route path="/"  component={formPage} />
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
