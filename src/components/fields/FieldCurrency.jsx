import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
    },
});

class NumberFormatCustom extends Component {
    render() {
        return (
            <NumberFormat
                {...this.props}
                onValueChange={values => {
                    this.props.onChange({
                        target: {
                            value: values.value,
                        },
                    });
                }}
                thousandSeparator
                prefix="$"
            />
        );
    }
}

NumberFormatCustom.propTypes = {
    onChange: PropTypes.func.isRequired,
};

class FieldCurrency extends Component {
    state = {
        numberformat: '1320',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Input
                    value={this.state.numberformat}
                    onChange={this.handleChange('numberformat')}
                    inputComponent={NumberFormatCustom}
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
            </div>
        );
    }
}

FieldCurrency.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FieldCurrency);