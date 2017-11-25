import {updateFormField} from "../../actions/formActions";
import FieldMapper from "../../components/FieldMapper";
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  onUpdateFormField: (field) => dispatch(updateFormField(field)),
});

const FieldMapperContainer = connect(
  null,
  mapDispatchToProps,
)(FieldMapper);

export default FieldMapperContainer;
