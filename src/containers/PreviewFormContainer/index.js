import { updateFormField } from '../../actions/formActions';
import PreviewForm from '../../components/PreviewForm';
import { connect } from 'react-redux';

// const mapDispatchToProps = dispatch => ({
//   onUpdateFormField: (field) => dispatch(updateFormField(field)),
// });

const PreviewFormContainer = connect(
  null,
  null,
)(PreviewForm);

export default PreviewFormContainer;
