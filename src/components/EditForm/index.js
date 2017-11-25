import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import FieldTypes from '../../constants/fieldTypes';
import './index.css';
import {Button} from "material-ui";
import TextField from "material-ui/es/TextField/TextField";
import withStyles from "material-ui/es/styles/withStyles";
import FieldMapperContainer from '../../containers/FieldMapperContainer';
import uuid from 'uuid/v4';
import MdRemoveRedEye from "react-icons/lib/md/remove-red-eye";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: theme.spacing.unit,
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

  handleUpdateForm() {
        this.props.onUpdateForm(this.props.formState.form)
  }

    onAddField(fieldType) {
        this.props.onCreateFormField({
            type: fieldType,
            id: uuid()
        })
    }

    handleUpdateFormDescription(description) {
        this.props.onUpdateFormDescription(description)
    }

  handleUpdateFormTitle(title) {
    this.props.onUpdateFormTitle(title)
  }

    render() {
        const {classes} = this.props;
        const buttons = [
            {type: FieldTypes.TEXT, name: 'Add Text'},
            {type: FieldTypes.NUMBER, name: 'Add number'},
            {type: FieldTypes.PHONE, name: 'Add phone'},
            {type: FieldTypes.CREDIT, name: 'Add credit'},
        ];
        console.log(this.props.formState);
        if (!this.props.formState.form) {
            return 'Loading'
        }
        return (
            <div className="containerEditForm">
                <AppBar position="static">
                    <Toolbar className="containerHeader">
                        <Typography className="companyTitle" type="title" color="inherit">Green Forest Bank</Typography>
                        <MdRemoveRedEye className="MdEye" />
                    </Toolbar>
                </AppBar>
                <div>
                    {
                        buttons.map((btn) => {
                            return <Button color="primary" aria-label="add" onClick={() => {
                                this.onAddField(btn.type)
                            }}>
                                {
                                    btn.name
                                }
                            </Button>
                        })
                    }

                </div>
                <div className="formWrapper">
                    <TextField
                        label="Form title"
                        placeholder="Title"
                        multiline
                        value={this.props.formState.form.title}
                        onChange={(e) => this.handleUpdateFormTitle(e.target.value)}
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        label="Form description"
                        placeholder="description"
                        multiline
                        onChange={(e) => this.handleUpdateFormDescription(e.target.value)}
                        value={this.props.formState.form.description}
                        className={classes.textField}
                        margin="normal"
                    />
                    <Paper className="paperEditForm">

                        <h3>Fields: </h3>
                        {
                            this.props.formState.form.fields.map((field) => {
                                return <FieldMapperContainer field={field}/>
                            })
                        }

                    </Paper>
                    <Button onClick={() => this.handleUpdateForm()} raised color="primary" className={classes.button}>
                        Save form
                    </Button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(EditForm);
