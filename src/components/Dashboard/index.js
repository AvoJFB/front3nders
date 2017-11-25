import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MdAdd from 'react-icons/lib/md/add';
import './index.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.handleCreateForm = this.handleCreateForm.bind(this);
  }

  handleCreateForm() {
    this.props.history.push('/edit/123124')
  }

  render() {
    return (
      <div className="container">
        <h1>Create Form</h1>
        <Paper className="paper">
          <MdAdd onClick={this.handleCreateForm}  className="plusIcon"/>
        </Paper>
      </div>
    )
  }
}

export default Dashboard;
