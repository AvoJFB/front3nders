import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles-compiled.css';
import TextField from "material-ui/TextField";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
    },
});

class FieldCreditCard extends Component {
    state = {
        textmask: '',
        ...{name: '', number: '', expiry: '', cvc: '', focused: ''}
    };
    handleInputChange = (e) => {
        const target = e.target;

        if (target.name === 'number') {
            this.setState({
                [target.name]: target.value.replace(/ /g, ''),
            });
        }
        else if (target.name === 'expiry') {
            this.setState({
                [target.name]: target.value.replace(/ |\//g, ''),
            });
        }
        else {
            this.setState({
                [target.name]: target.value,
            });
        }
    };

    handleInputFocus = (e) => {
        const target = e.target;

        this.setState({
            focused: target.name,
        });
    };


    render() {
        const {classes} = this.props;
        const {name, number, expiry, cvc, focused} = this.state;
        return (
            <div className={classes.container}>
                <Cards
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focused}
                    callback={this.handleCallback}
                />
                <form>
                    <h3>{this.props.field.title}</h3>
                    <div>
                        <TextField
                            type="tel"
                            name="number"
                            label="Card number"
                            margin="normal"
                            multiline
                            placeholder="Card number"
                            onKeyUp={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </div>
                    <div>
                        <TextField
                            type="text"
                            label="Name"
                            name="name"
                            placeholder="Name"
                            onKeyUp={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </div>
                    <div>
                        <TextField
                            type="tel"
                            name="expiry"
                            label="expiry"
                            placeholder="Valid Thru"
                            onKeyUp={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        <TextField
                            type="tel"
                            name="cvc"
                            label="cvc"
                            placeholder="CVC"
                            onKeyUp={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

FieldCreditCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FieldCreditCard);