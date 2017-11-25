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
import FieldMapper from "../FieldMapper";

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

    onAddField(fieldType) {

        this.props.formState.form.fields.push({
            type: fieldType
        })
    }

    render() {
        const {classes} = this.props;
        console.log(this.props.formState);
        if (!this.props.formState.form) {
            return 'Loading'
        }
        return (
            <div className="containerEditForm">
                <AppBar position="static">
                    <Toolbar>
                        <Typography className="companyTitle" type="title" color="inherit">Green Forest Bank</Typography>
                    </Toolbar>
                </AppBar>
                <div>
                    <Button color="primary" aria-label="add" onClick={() => {
                        this.onAddField(FieldTypes.TEXT)
                    }}>
                        add text
                    </Button>
                    <Button color="primary" aria-label="add" onClick={() => {
                        this.onAddField(FieldTypes.NUMBER)
                    }}>
                        add number
                    </Button>
                </div>
                <div className="formWrapper">
                    <Paper className="paperEditForm">
                        <TextField
                            label="Form title"
                            placeholder="Title"
                            multiline
                            className={classes.textField}
                            margin="normal"
                        />
                        <TextField
                            label="Form description"
                            placeholder="description"
                            multiline
                            className={classes.textField}
                            margin="normal"
                        />

                        <h3>Fields: </h3>
                        {
                            this.props.formState.form.fields.map((field) => {
                                return <FieldMapper field={field}/>
                            })
                        }

                    </Paper>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(EditForm);
