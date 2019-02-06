import {Link} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../actions';

const Navigation = (props) => {

        return (
            <div>
                <Link to='/items'> <h1> Tech Vault </h1> </Link>
                {sessionStorage.username && <Link to={{
                    pathname: `/profile/${sessionStorage.username}`,
                    state: {
                        user: props.users.map(user => {
                            if (user.username === sessionStorage.username) return user
                        })
                    }}}> My Profile
                </Link>}
            </div>
        );
    };

function mapStateToProps(state) {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps, {getUsers})(Navigation);