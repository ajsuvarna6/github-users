import { connect } from 'react-redux';

function mapStateToProps(state: any) {
    return state;
}

export default function reduxConnect(WrappedComponent: any, actions: any, state = mapStateToProps) {
    return connect(state, actions, null, { forwardRef: true })(WrappedComponent);
}
