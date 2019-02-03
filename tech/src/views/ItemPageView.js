import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class ItemPageView extends React.Component {


    // item booking takes place here


    render() {
      const data = this.props.location.state.itemClicked;
      return (
          <div>
              <p>{data.title}</p>
              <p>{data.brand}</p>
              <p>{data.model}</p>
              <p>{data.dailyPrice}</p>
              <p>{data.weeklyPrice}</p>
              <Link to={{
                  pathname: `/profile/${data.owner.username}`,
                  state: {
                      username: data.owner.username
                    }
                }}>
                  <p>Renter: {data.owner.username}</p>
              </Link>
          </div>
      );  
    };
};

function mapStateToProps(state) {
    return {
        items: state.items
    };
};

export default connect(mapStateToProps)(ItemPageView);

