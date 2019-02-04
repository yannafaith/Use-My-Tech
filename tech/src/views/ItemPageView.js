import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class ItemPageView extends React.Component {


    // item booking takes place here


    render() {
      const data = this.props.location.state.itemClicked;

      // this returns an array with one object 
       let clickedUser = this.props.users.filter(user => {
          if (user.userId === data.owner) return user
      }); 

      return (
          <div>
              <p>{data.title}</p>
              <p>{data.brand}</p>
              <p>{data.model}</p>
              <p>{data.dailyPrice}</p>
              <p>{data.weeklyPrice}</p>
              <Link to={{
                  pathname: `/profile/${clickedUser[0].username}`,
                  state: {
                      user: clickedUser[0]
                    }
                }}>
                  <p>Renter: {clickedUser[0].username}</p>
              </Link>
          </div>
      );  
    };
};

function mapStateToProps(state) {
    return {
        items: state.items,
        users: state.users
    };
};

export default connect(mapStateToProps)(ItemPageView);

