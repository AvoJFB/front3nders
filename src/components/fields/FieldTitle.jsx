import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {withStyles} from "material-ui";
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  fields: state.formState.form.fields,
});

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

class FieldTitle extends Component {
    render() {
        const {classes} = this.props;

        return (
            <TextField
                label="Title Field"
                placeholder="Enter your title here"
                multiline
                className={classes.textField}
                margin="normal"
            />
        );
    }
}

export default connect(mapStateToProps, withStyles(styles)(FieldTitle));