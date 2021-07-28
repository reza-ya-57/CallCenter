import './App.css';
import {Route , Switch , withRouter } from 'react-router-dom';
import formPage from './formPage/formPage';
import Drawer from './Drawer/Drawer';
// 
function App() {
  let routes =  (
    <Switch>
      <Route path="/"  component={formPage} />
    </Switch>
  )

  return (
      <div className="App">
        <Drawer>
          {routes}
        </Drawer>
    </div>
  );
}

export default withRouter(App);
