import { connect } from 'react-redux';
import Navbar from '../../components/social/Navbar';
import { logoutUser } from '../../../base/social/actions/authActions';

const mapStateToProps = state => ({
  user: state.authReducer.user,
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
