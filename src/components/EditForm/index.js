import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import FormText from '../fields/FieldText';
import FormNumber from '../fields/FieldNumber';
import FormSelect from '../fields/FieldSelect';
import FormTitle from '../fields/FieldTitle';
import FormDescription from '../fields/FieldDescription';
import FormCheckbox from '../fields/FieldCheckbox';
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
            <FormTitle />
            <FormDescription />
            <Paper className="paperEditForm">
            <FormText />
            <FormNumber />
            <FormSelect />
            <FormCheckbox />
            </Paper>
        </div>
      </div>
    )
  }
}

export default EditForm;
