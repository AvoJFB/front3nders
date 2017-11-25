import React from 'react';
import Paper from 'material-ui/Paper';
import MdAdd from 'react-icons/lib/md/add';
import './index.css';

const DashboardComponent = () => (
  <div className="containerDashboard">
    <div className="titlesContainer">
      <h1>Green Forest Bank</h1>
      <h1>Create Form</h1>
    </div>
    <Paper className="paperDashboard">
      <MdAdd className="plusIcon"/>
    </Paper>
  </div>
);

export default DashboardComponent;
