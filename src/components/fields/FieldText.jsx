import React, { Component } from 'react';
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

class FormText extends Component {
    render() {
        const {classes} = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    label="Заголовок формы"
                    placeholder="Введите текст"
                    multiline
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

export default withStyles(styles)(FormText);