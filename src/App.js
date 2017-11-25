import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashboardComponent from './components/Dashboard';
import EditFormContainer from "./containers/EditFormContainer";

const theme = createMuiTheme({
  direction: 'ltr',
});

const store = configureStore();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <MuiThemeProvider theme={theme}>
              <div>
                <Switch>
                  <Route exact path='/' component={DashboardComponent} />
                  <Route path='/edit/:id' component={EditFormContainer}/>
                </Switch>
              </div>
            </MuiThemeProvider>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
