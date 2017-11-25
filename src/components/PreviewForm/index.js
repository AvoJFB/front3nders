import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import FieldTypes from '../../constants/fieldTypes';
import './index.css';
import MdEdit from "react-icons/lib/md/edit";
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
                        <MdEdit onClick={() => this.props.history.push(`/edit/${this.props.match.params.id}`)}className="editIcon"/>
                    </Toolbar>
                </AppBar>
                <div className="formWrapper">
                    <div className="fromTitlesWrapper">
                        <h1>{this.props.formState.form.title}</h1>
                        <h3>{this.props.formState.form.description}</h3>
                    </div>
                    <Paper style={{"backgroundColor": this.props.formState.form.color}} className="paperEditForm">
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
