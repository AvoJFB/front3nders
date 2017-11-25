import React, { Component } from 'react';

class PreviewForm extends Component {
  componentWillMount() {
    if (!this.props.formState.form) {
      this.props.onGetForm(this.props.match.params.id)
    }
  }

  render() {
    return (
      <div>
        Preview
      </div>
    )
  }
}

export default PreviewForm;
