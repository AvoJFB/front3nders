import React, {Component} from 'react';
import FieldTypes from '../constants/fieldTypes';
import TextField from "../../node_modules/material-ui/TextField/TextField";

class FieldMapper extends Component {
    constructor() {
        super()
    }

    handleOnChange(text) {
        this.props.field.title = text;
        this.props.onUpdateFomfield(this.props.field);
    }

    render() {
        if (this.props.field.type in [
                FieldTypes.TEXT,
                FieldTypes.NUMBER,
                FieldTypes.PHONE,
                FieldTypes.CREDIT,

            ]) {
            return <div>
                <div>Enter field title</div>
                <TextField {...this.props} onChange={(e) => {
                    this.handleOnChange(e.target.value)
                }}/>
            </div>
        }
        return 'error'
    }
}

export default FieldMapper;
