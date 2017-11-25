import { connect } from 'react-redux';
import {createFormField, getForm} from '../../actions/formActions';
import EditFormComponent from '../../components/EditForm';

const mapStateToProps = state => ({
  formState: state.formState,
});

const mapDispatchToProps = dispatch => ({
  onGetForm: (id) => dispatch(getForm(id)),
  onCreateFormField: (field) => dispatch(createFormField(field)),
});

const EditFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditFormComponent);

export default EditFormContainer;

