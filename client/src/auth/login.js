// Vendor
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import store from './../core/store';
import applyComponentDefaults from './../core/applyComponentDefaults';
import { authLogin } from './../core/actionCreators';

let LoginComponent = applyComponentDefaults(React.createClass({
    componentDidMount() {
        if (!this.props.auth.token) {
            setTimeout(() => {
                this.props.onLogin('Hans', 'Demo1234');
            }, 1000);
        }
    },
    render() {
        return (
            <div>
                <h1>Logging in...</h1>
                <Link to="/">Go go!</Link>
            </div>
        );
    }
}));

// Map Redux state to component props
let mapStateToProps = state => ({
    auth: state.auth
});

// Map Redux actions to component props
let mapDispatchToProps = dispatch => ({
    onLogin: (accountName, password) => dispatch(authLogin(accountName, password))
});

let Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);

export default Login;