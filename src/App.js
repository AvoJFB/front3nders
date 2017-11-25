import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DashboardComponent from "./components/DashboardComponent";

const theme = createMuiTheme({
  direction: 'ltr',
});

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
          <div>
            <Switch>
              <Route path='/' component={DashboardComponent} />
            </Switch>
          </div>
          </MuiThemeProvider>
        </BrowserRouter>

    );
  }
}

export default App;
