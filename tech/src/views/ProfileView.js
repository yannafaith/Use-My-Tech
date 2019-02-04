import React from 'react';
import {connect} from 'react-redux';

class ProfileView extends React.Component {

    // user items, requests, and reviews
    // if profile belongs to user, have edit profile option

    render() {
        const data = this.props.location.state.user;
        return (
            <div>
                <p>{data.username}</p>
                <p>{data.firstName}</p>
                <p>{data.lastName}</p>
                <p>{data.email}</p>
                <p>{data.phone}</p>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(ProfileView);