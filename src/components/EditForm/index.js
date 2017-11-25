import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import './index.css';

class EditForm extends Component {
  componentWillMount() {
    if (!this.props.formState.form) {
      this.props.onGetForm(this.props.match.params.id)
    }
  }

  render() {
    return (
      <div>
        <h1 className="formTitle">Form Title</h1>
        <Paper className="paper">
          <h1>asd</h1>
        </Paper>
      </div>
    )
  }
}

export default EditForm;
