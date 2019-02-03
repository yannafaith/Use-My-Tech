import React from 'react';
import {connect} from 'react-redux';

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
                    <form>
                        <input placeholder = 'username' />
                        <input placeholder = 'password' />
                        <button type='submit'> Sign In </button>
                    </form>
                </div>

                <div className='SignUpForm'> 
                    <form>
                        <input placeholder = 'username' />
                        <input placeholder = 'password' />
                        <input placeholder = 'email' />
                        <input placeholder = 'phone number' />
                        <input placeholder = 'location' />
                        <input placeholder = 'picture' />
                        <input placeholder = 'first name' />
                        <input placeholder = 'last name' />
                        <button type='submit'> Sign Up </button>
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
