import { connect } from 'react-redux';
import { createForm } from '../../actions/formActions';
import Dashboard from '../../components/Dashboard';

const mapStateToProps = state => ({
  formState: state.formState,
});

const mapDispatchToProps = dispatch => ({
  onCreateForm: (cb) => dispatch(createForm(cb)),
});

const DashboardContainer = connect(
  null,
  mapDispatchToProps,
)(Dashboard);

export default DashboardContainer;

