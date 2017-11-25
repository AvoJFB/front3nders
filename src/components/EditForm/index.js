import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import FieldText from '../fields/FieldText';
import FieldNumber from '../fields/FieldNumber';
import FieldSelect from '../fields/FieldSelect';
import FieldTitle from '../fields/FieldTitle';
import FieldDescription from '../fields/FieldDescription';
import FieldCheckbox from '../fields/FieldCheckbox';
import FieldRadioButton from '../fields/FieldRadioButton';
import FieldPhoneNumber from '../fields/FieldPhoneNumber';
import './index.css';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "100%",
    },
});

class EditForm extends Component {
  componentWillMount() {
    if (!this.props.formState.form) {
      this.props.onGetForm(this.props.match.params.id)
    }
  }

  render() {
    return (
      <div className="containerEditForm">
        <AppBar position="static">
          <Toolbar>
            <Typography className="companyTitle" type="title" color="inherit">Green Forest Bank</Typography>
          </Toolbar>
        </AppBar>
        <div className="formWrapper">
            <FieldTitle />
            <FieldDescription />
            <Paper className="paperEditForm">
            <FieldText />
            <FieldNumber />
            <FieldSelect />
            <FieldCheckbox />
            <FieldRadioButton />
            <FieldPhoneNumber />
            </Paper>
        </div>
      </div>
    )
  }
}

export default EditForm;
