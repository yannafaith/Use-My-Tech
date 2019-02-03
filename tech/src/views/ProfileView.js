import React from 'react';
import {connect} from 'react-redux';

class ProfileView extends React.Component {

    // user items, requests, and reviews
    // if profile belongs to user, have edit profile option

    render() {
        return (
            <div>
                <p>Profile</p>
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