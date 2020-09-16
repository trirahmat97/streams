import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const UserHeader = ({ user }) => {
    return (
        <div className="header">{user && <p>{user.name}</p>}</div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.id) };
}

export default connect(mapStateToProps)(UserHeader);