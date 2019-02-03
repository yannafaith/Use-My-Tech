import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ItemListView from './ItemListView';
import ProfileView from './ProfileView';
class SignInView extends React.Component {
    state = {
        newUser: []
    };

    // going to need changehandlers to record user input
    // going to need an onsubmit function that updates state
    // going to need to route to ItemView or Profile View once state is updated 
    // going to need a navbar


    render() {
        // might turn the forms into components
        return (
            <div className='PageContainer'>
            
                <div className='SignInForm'>
                    <form /* onSubmit={submitHandler} */ >
                        <input placeholder = 'username' />
                        <input placeholder = 'password' />
                        <Link to='/Vault' Component={ItemListView}> 
                            <button type='submit'> Sign In </button>
                        </Link>
                    </form>
                </div>

                <div className='SignUpForm'> 
                    <form /* onSubmit={submitHandler} */>
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
