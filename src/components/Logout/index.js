import LogoutContainer from './LogoutContainer';
import { logMeOut } from '../../action-creator';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        user: state.launches.user,
        className: state.display.actives.includes("logout")? "show" : "hide"
    };
}

const mapDispatchToProps = dispatch => {
    return {
        logMeOut: user => dispatch(logMeOut(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (LogoutContainer);