import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import applyComponentDefaults from './../core/applyComponentDefaults';

let UserList = applyComponentDefaults(React.createClass({
    onAddUser(e) {
        e.preventDefault();
        const node = findDOMNode(this.refs.userName);
        const text = node.value.trim();
        if (text.length) {
            this.props.onAddUser({
                name: text
            });
            node.value = '';
        }
        node.focus();
    },
    componentDidMount() {
        const node = findDOMNode(this.refs.userName);
        node && node.focus();
    },
    render() {
        let users = this.props.users.map(user => <a className='list-group-item' key={user.id}><i className='fa fa-user fa-fw'></i>&nbsp; {user.name}</a>);
        return (
            <form onSubmit={this.onAddUser}>
                <div className='list-group'>
                    <div className='list-group-item list-group-header'>
                        <h1>Users</h1>
                    </div>
                        {users}
                    <div className='list-group-item'>
                        <div className='input-group'>
                            <span className='input-group-addon'><i className='fa fa-user-plus fa-fw'></i></span>
                            <input className='form-control' type='text' ref='userName' placeholder='Add a user...' autofocus='autofocus' />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}));

UserList.propTypes = {
    onAddUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

export default UserList;