import React from 'react';
import Paper from 'material-ui/Paper';
import MdAdd from 'react-icons/lib/md/add';

const containerStyles = {
  "display": "flex",
  "flex-direction": "column",
  "align-items": "center",
  "justify-content": "center",
  "height": "100vh"
};

const paperStyles = {
  "width": "400px",
  "margin": "0 auto"
};

const styles = {
  "fontSize": "400",
};

const DashboardComponent = () => (
  <div style={containerStyles}>
    <h1>Create Form</h1>
    <Paper style={paperStyles}>
      <MdAdd style={styles}/>
    </Paper>
  </div>
);

export default DashboardComponent;
