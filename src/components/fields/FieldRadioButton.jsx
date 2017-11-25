import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Radio, {RadioGroup} from 'material-ui/Radio';
import {FormLabel, FormControl, FormControlLabel} from 'material-ui/Form';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class FieldRadioButton extends Component {
    state = {
        value: '',
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" required className={classes.formControl}>
                    <FormLabel component="legend">{this.props.field.title}</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        className={classes.group}
                    >
                        {
                            this.props.field.choices.map((choice) => {
                                return <FormControlLabel control={<Radio/>} label={choice.name}/>
                            })
                        }
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

FieldRadioButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FieldRadioButton);