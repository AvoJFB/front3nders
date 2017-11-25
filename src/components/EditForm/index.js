import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import FormText from '../fields/FieldText';
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

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

// class FormTitle extends React.Component {
//     state = {
//         name: 'Cat in the Hat',
//         age: '',
//         multiline: 'Controlled',
//         currency: 'EUR',
//     };
//
//     handleChange = name => event => {
//         this.setState({
//             [name]: event.target.value,
//         });
//     };
// }

class FormTitle extends Component {
    render() {
        const {classes} = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                  required
                  id="required"
                  label="Название формы"
                  defaultValue="Form Title"
                  className={classes.textField}
                  margin="normal"
              />
              <TextField
                  label="Описание формы"
                  placeholder="Введите текст"
                  multiline
                  className={classes.textField}
                  margin="normal"
              />
            </form>
        );
    }
}

const FormTitleComponent = withStyles(styles)(FormTitle);

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
          <FormTitleComponent />
          <Paper className="paperEditForm">
            <FormText />
          </Paper>
        </div>
      </div>
    )
  }
}

export default EditForm;