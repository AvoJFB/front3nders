import React, {Component} from 'react';
import FieldTypes from '../constants/fieldTypes';
import FieldText from "./fields/FieldText";
import FieldNumber from "./fields/FieldNumber";
import FieldPhoneNumber from "./fields/FieldPhoneNumber";
import FieldRadioButton from "./fields/FieldRadioButton";

class FieldPreviewMapper extends Component {
    constructor() {
        super()
    }

    render() {
        switch (this.props.field.type) {
            case FieldTypes.TEXT:
                return <FieldText {...this.props} />;
            case FieldTypes.NUMBER:
                return <FieldNumber {...this.props} />;
            case FieldTypes.PHONE:
                return <FieldPhoneNumber {...this.props} />;
            case FieldTypes.CREDIT:
                return 'credit';
            case FieldTypes.RADIO:
                return <FieldRadioButton {...this.props}/>;
            default:
                return 'error'
        }

    }
}

export default FieldPreviewMapper;
