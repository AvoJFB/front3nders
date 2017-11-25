import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
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

class TextMaskCustom extends Component {
    render() {
        return (
            <MaskedInput
                {...this.props}
                mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                placeholderChar={'\u2000'}
                showMask
            />
        );
    }
}

class FieldCreditCard extends Component {
    state = {
        textmask: ''
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
                    value={this.state.textmask}
                    inputComponent={TextMaskCustom}
                    onChange={this.handleChange('textmask')}
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'Description',
                    }}
                />
            </div>
        );
    }
}

FieldCreditCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FieldCreditCard);