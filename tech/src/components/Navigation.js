import {Link} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';

const Navigation = (props) => {

        return (
            <div>
                <Link to='/items'> <h1> Tech Vault </h1> </Link>
            </div>
        );
    };

function mapStateToProps(state) {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(Navigation);