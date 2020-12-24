import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../HOC/Layout/Layout'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder'
import MyPage from './MyPage/MyPage';
import CheckOut from './CheckOut/CheckOut';

class App extends Component {
  render(){
    return (
      <div >
        <Layout>
            <Switch>

              <Route path="/MyPage"  component={MyPage} />

              <Route path="/CheckOut"  component={CheckOut} />
              
              <Route path="/"  component={BurgerBuilder} />
              
              {/* <Route path="/MyPage" exact render={() =>} /> */}
            </Switch>

        </Layout>
      </div>
    );
  }
}

export default App;
