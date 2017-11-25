import React, {Component} from 'react';
import FieldTypes from '../constants/fieldTypes';
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

class FieldMapper extends Component {
    constructor() {
        super()
    }

    handleOnChange(text) {
        this.props.field.title = text;
        this.props.onUpdateFormField(this.props.field);
    }

    handleChoiceChange(choice, text) {
        choice.name = text;
        this.props.onUpdateFormField(this.props.field);
    }

    addChoice() {
        const {field} = this.props;
        if (!field.choices) {
            field.choices = [];
        }
        field.choices.push({
            name: ''
        });
        this.props.onUpdateFormField(field);
    }

    render() {
        if ([
                FieldTypes.TEXT,
                FieldTypes.NUMBER,
                FieldTypes.PHONE,
                FieldTypes.CREDIT
            ].indexOf(this.props.field.type) > -1) {
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
        switch (this.props.field.type) {
            case FieldTypes.RADIO:
                return <div>
                    <Button onClick={() => this.addChoice()} raised color="primary" style={{"margin":"10px 0 0"}}>
                        Add choices
                    </Button>
                    <TextField style={{"display":"block"}}
                        label="Field title"
                        value={this.props.field.title}
                        {...this.props}
                        onChange={(e) => {
                            this.handleOnChange(e.target.value)
                        }}/>
                    {
                        (this.props.field.choices || []).map((choice) => {
                            return <TextField style={{"display":"block"}}
                                label="Choice title"
                                value={choice.name}
                                {...this.props}
                                onChange={(e) => {
                                    this.handleChoiceChange(choice, e.target.value)
                                }}/>
                        })
                    }
                </div>
            default:
                return 'error'
        }
    }
}

export default FieldMapper;
