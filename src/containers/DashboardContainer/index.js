import { connect } from 'react-redux';
import { createForm } from '../../actions/formActions';
import NewOrderDialog from '../../components/NewOrderDialog';

const mapDispatchToProps = dispatch => ({
  onGetCustomers: () => dispatch(getCustomers()),
});

const NewOrderDialogContainer = connect(
  null,
  mapDispatchToProps,
)(NewOrderDialog);

export default NewOrderDialogContainer;

