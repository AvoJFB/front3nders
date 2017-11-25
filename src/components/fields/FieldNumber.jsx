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

class FieldNumber extends Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    render() {
        const {classes} = this.props;

        return (
            <div>
                <h3>{this.props.field.title}</h3>
                <TextField
                    id="number"
                    label="Number"
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
            </div>
        );
    }
}

export default withStyles(styles)(FieldNumber);