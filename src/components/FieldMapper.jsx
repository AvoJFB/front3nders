import React, {Component} from 'react';
import FieldTypes from '../constants/fieldTypes';
import TextField from "../../node_modules/material-ui/TextField/TextField";

class FieldMapper extends Component {
  constructor() {
    super()
  }

  handleOnChange(text) {
    this.props.field.title = text;
    this.props.onUpdateFormField(this.props.field);
  }

  render() {
    if ([
        FieldTypes.TEXT,
        FieldTypes.NUMBER,
        FieldTypes.PHONE,
        FieldTypes.CREDIT,
      ].indexOf(this.props.field.type)>-1) {
      return <div>
        <TextField
          label="Field title"
          value={this.props.field.title}
          {...this.props}
          onChange={(e) => {
            this.handleOnChange(e.target.value)
          }}/>
      </div>
    }
    console.log(this.props.field.type);
    return 'error'
  }
}

export default FieldMapper;
