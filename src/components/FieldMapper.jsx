import React, {Component} from 'react';
import FieldTypes from '../constants/fieldTypes';
import FieldText from "./fields/FieldText";
import FieldNumber from "./fields/FieldNumber";

class FieldMapper extends Component {
    constructor() {
        super()
    }

    render() {
        switch (this.props.field) {
            case FieldTypes.TEXT:
                return <FieldText  {...this.props} />;
            case FieldTypes.NUMBER:
                return <FieldNumber {...this.props} />;
        }
    }
}

export default FieldMapper;
