import { connect } from 'react-redux';
import { createForm } from '../../actions/formActions';
import Dashboard from '../../components/Dashboard';

const mapDispatchToProps = dispatch => ({
  onCreateForm: () => dispatch(createForm()),
});

const DashboardContainer = connect(
  null,
  mapDispatchToProps,
)(Dashboard);

export default DashboardContainer;

