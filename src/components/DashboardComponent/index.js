import React from 'react';
import Paper from 'material-ui/Paper';
import MdAdd from 'react-icons/lib/md/add';
import './index.css';

const DashboardComponent = () => (
  <div className="container">
    <h1>Create Form</h1>
    <Paper className="paper">
      <MdAdd className="plusIcon"/>
    </Paper>
  </div>
);

export default DashboardComponent;
