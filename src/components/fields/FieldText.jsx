import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {withStyles} from "material-ui";

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

class FieldText extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div>
                <h3>{this.props.field.title}</h3>
                <TextField
                    label="description"
                    placeholder="your answer"
                    multiline
                    className={classes.textField}
                    margin="normal"
                />
            </div>
        );
    }
}

export default withStyles(styles)(FieldText);