import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ItemListView from './ItemListView';

class SignInView extends React.Component {
    state = {
        newUser: {},
        validUser: false,
        username: '',
        password: ''
    };
    
    // going to need a navbar

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submitHandler = e => {
        this.setState({validUser: true});
        e.preventDefault();
    };

    render() {
        return (
            <div className='PageContainer'>

                {

                    this.state.validUser === true ? 
                    <div>
                        <p>Welcome {this.state.username}! Where to next?</p>
                        <Link to='/items' Component={ItemListView}>
                            <button> Go to Vault </button>
                        </Link> 
                        <Link to={{ 
                            pathname: `/profile/${this.state.username}`,
                            state: {
                                username: this.state.username
                            }
                        }}>
                            <button> Go to Profile </button>
                        </Link> 
                    </div>            

                    : 
                    <div className='SignInForm'>
                        <form onSubmit={this.submitHandler} >
                            <input 
                                placeholder = 'username' 
                                name = 'username' 
                                onChange = {this.changeHandler} />
                            <input 
                                placeholder = 'password' 
                                name = 'password' 
                                onChange = {this.changeHandler} />
                            <button type='submit'>Sign In</button>
                        </form>
                    </div>

                }

            </div>
        );
    };
};

function mapStateToProps(state){
    return {
      users: state.users
    };
  };
  
export default connect(mapStateToProps)(SignInView);

/* 

                <div className='SignUpForm'> 
                    <form /* onSubmit={submitHandler} >
                    <input placeholder = 'username' />
                    <input placeholder = 'password' />
                    <input placeholder = 'email' />
                    <input placeholder = 'phone number' />
                    <input placeholder = 'location' />
                    <input placeholder = 'picture' />
                    <input placeholder = 'first name' />
                    <input placeholder = 'last name' />
                    <Link to='/Profile' Component={ProfileView}>
                        <button type='submit'> Sign Up </button>
                    </Link>
                </form>
            </div>

*/