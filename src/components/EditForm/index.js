import React, { Component } from 'react';

class EditForm extends Component {
  componentWillMount() {
    if (!this.props.formState.form) {
      this.props.onGetForm(this.props.match.params.id)
    }
  }

  render() {
    return (
      <div>
        Edit Component
      </div>
    )
  }
}

export default EditForm;
