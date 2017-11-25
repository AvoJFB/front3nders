import { getForm } from '../../actions/formActions';
import PreviewForm from '../../components/PreviewForm';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  formState: state.formState,
});

const mapDispatchToProps = dispatch => ({
  onGetForm: (id) => dispatch(getForm(id)),
});

const PreviewFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PreviewForm);

export default PreviewFormContainer;
