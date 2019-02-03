import React from 'react';
import {connect} from 'react-redux';

class ProfileView extends React.Component {

    // user items, requests, and reviews
    // if profile belongs to user, have edit profile option

    render() {
        const data = this.props.location.state;
        return (
            <div>
                {this.props.users.map(user => {
                    if (user.username === data.username) {
                        return (
                            <div>
                                {user.username}
                            </div>
                        );
                    };
                })}
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