import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import FieldTypes from '../../constants/fieldTypes';
import './index.css';
import MdRemoveRedEye from "react-icons/lib/md/remove-red-eye";
import FieldPreviewMapper from "../FieldPreviewMapper";

class PreviewForm extends Component {
    componentWillMount() {
        if (!this.props.formState.form) {
            this.props.onGetForm(this.props.match.params.id)
        }
    }

    render() {
        if (!this.props.formState.form) {
            return 'Loading';
        }
        return (
            <div className="containerEditForm">
                <AppBar position="static">
                    <Toolbar className="containerHeader">
                        <Typography className="companyTitle" type="title" color="inherit">Green Forest Bank</Typography>
                        <MdRemoveRedEye className="MdEye"/>
                    </Toolbar>
                </AppBar>
                <div className="formWrapper">
                    <h1>{this.props.formState.form.title}</h1>
                    <h3>{this.props.formState.form.description}</h3>
                    <Paper className="paperEditForm">
                        <h3>Please fill the form:</h3>
                        {
                            this.props.formState.form.fields.map((field) => {
                                return <FieldPreviewMapper field={field}/>
                            })
                        }
                    </Paper>
                </div>
            </div>
        )
    }
}

export default PreviewForm;
