import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MdAdd from 'react-icons/lib/md/add';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import './index.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.handleCreateForm = this.handleCreateForm.bind(this);
  }

  handleCreateForm() {
    this.props.onCreateForm();
    this.props.history.push('/edit/123124')
  }

  render() {
    return (
        <div className="containerDashboard">
            <AppBar position="static">
                <Toolbar>
                    <Typography className="companyTitle" type="title" color="inherit">Green Forest Bank</Typography>
                </Toolbar>
            </AppBar>
            <h1>Create Form</h1>
            <Paper className="paperDashboard">
              <MdAdd onClick={this.handleCreateForm} className="plusIcon"/>
            </Paper>
        </div>
    )
  }
}

export default Dashboard;
