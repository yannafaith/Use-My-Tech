import React from 'react';
import {connect} from 'react-redux';


class ItemPageView extends React.Component {


    // item booking takes place here


    render() {
      return (
          <div>
              <h3>{this.props.location.state.itemClicked.title}</h3>
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

