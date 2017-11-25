import { connect } from 'react-redux';
import {createFormField, getForm, updateForm, updateFormDescription, updateFormTitle} from '../../actions/formActions';
import EditFormComponent from '../../components/EditForm';

const mapStateToProps = state => ({
  formState: state.formState,
});

const mapDispatchToProps = dispatch => ({
  onGetForm: (id) => dispatch(getForm(id)),
  onCreateFormField: (field) => dispatch(createFormField(field)),
  onUpdateFormTitle: (title) => dispatch(updateFormTitle(title)),
  onUpdateFormDescription: (description) => dispatch(updateFormDescription(description)),
  onUpdateForm: (form) => dispatch(updateForm(form)),
});

const EditFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditFormComponent);

export default EditFormContainer;

