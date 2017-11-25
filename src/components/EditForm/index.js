import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MdAddCircle from 'react-icons/lib/md/add-circle';
import Typography from 'material-ui/Typography';
import FieldTypes from '../../constants/fieldTypes';
import './index.css';
import {Button} from "material-ui";
import TextField from "material-ui/TextField";
import withStyles from "material-ui/styles";
import FieldMapperContainer from '../../containers/FieldMapperContainer';
import uuid from 'uuid/v4';
import MdRemoveRedEye from 'react-icons/lib/md/remove-red-eye';
import {ChromePicker, SketchPicker} from 'react-color'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
  },
});

class EditForm extends Component {
  state = {
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  componentWillMount() {
    if (!this.props.formState.form) {
      this.props.onGetForm(this.props.match.params.id)
    }
  }

  handleUpdateForm() {
    this.props.onUpdateForm(this.props.formState.form)
  }

  onAddField(fieldType) {
    this.props.onCreateFormField({
      type: fieldType,
      id: uuid()
    })
  }

  handleColorChange(color) {
    this.props.onUpdateFormColor(color.hex)
  }

  handleUpdateFormDescription(description) {
    this.props.onUpdateFormDescription(description)
  }

  handleUpdateFormTitle(title) {
    this.props.onUpdateFormTitle(title)
  }

    render() {
        const {classes} = this.props;
        const popover = {
          position: 'absolute',
          zIndex: '2',
        };
        const cover = {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        };
        const buttons = [
            {type: FieldTypes.TEXT, name: 'Add Text'},
            {type: FieldTypes.NUMBER, name: 'Add number'},
            {type: FieldTypes.PHONE, name: 'Add phone'},
            {type: FieldTypes.CREDIT, name: 'Add credit'},
            {type: FieldTypes.RADIO, name: 'Add radio'},
        ];
        console.log(this.props.formState);
        if (!this.props.formState.form) {
            return 'Loading'
        }
        return (
            <div className="containerEditForm">
                <AppBar position="static">
                    <Toolbar className="containerHeader">
                        <Typography className="companyTitle" type="title" color="inherit">Green Forest Bank</Typography>
                      <div className="toolsIcons">
                        <div className="menuContainer">
                          <MdAddCircle className="plusFieldIcon"/>
                          <div className="addFieldContainer">
                            {
                              buttons.map((btn) => {
                                return <Button color="primary" aria-label="add" onClick={() => {
                                  this.onAddField(btn.type)
                                }}>
                                  {
                                    btn.name
                                  }
                                </Button>
                              })
                            }

                          </div>
                        </div>
                        <MdRemoveRedEye onClick={() => this.props.history.push(`/preview/${this.props.match.params.id}`)} className="eyeIcon" />
                      </div>
                    </Toolbar>
                </AppBar>
                <div className="formWrapper">
                    <TextField
                        label="Form title"
                        placeholder="Title"
                        multiline
                        value={this.props.formState.form.title}
                        onChange={(e) => this.handleUpdateFormTitle(e.target.value)}
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        label="Form description"
                        placeholder="Description"
                        multiline
                        onChange={(e) => this.handleUpdateFormDescription(e.target.value)}
                        value={this.props.formState.form.description}
                        className={classes.textField}
                        margin="normal"
                    />
                    <Paper style={{"backgroundColor": this.props.formState.form.color}} className="paperEditForm">

            <h3>Fields: </h3>
            {
              this.props.formState.form.fields.map((field) => {
                return <FieldMapperContainer field={field}/>
              })
            }

          </Paper>

          <div>
            <button onClick={() => this.handleClick()}>Pick Color</button>
            { this.state.displayColorPicker ? <div style={ popover }>
              <div style={ cover } onClick={() => this.handleClose()}/>
              <ChromePicker color={this.props.formState.form.color} onChange={(color) => this.handleColorChange(color)} />
            </div> : null }
          </div>

          <Button onClick={() => this.handleUpdateForm()} raised color="primary" className={classes.button}>
            Save form
          </Button>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(EditForm);
