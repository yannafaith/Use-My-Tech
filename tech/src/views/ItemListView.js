import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class ItemListView extends React.Component {
    state = {
        newItems: []
    };

    render() {
        return (
            <div className='ItemListContainer'>

                <div>
                    <p>Search bar</p>
                    <button>Add Item <br/> + </button>
                </div>
                
                {this.props.items.map(item => {
                    return (
                        <Link to={{
                            pathname: `/item/${item.itemId}`,
                            state: {
                                itemClicked: item
                            }}} > 
                            <div className='LinkToItemView'>
                                <h3> {item.title} </h3>
                                <img alt='item'/>
                                <p> {item.brand} {item.model} {item.label} </p>
                                <p> daily price: ${item.dailyPrice} <br/> Weekly price: ${item.weeklyPrice} </p>
                            </div>
                        </Link>
                    );
                })}
                
                {/*
                 make the above a component  
                 make each card a link to itemView                
                */}

            </div>
        );
    };
};


function mapStateToProps(state){
    return {
      items: state.items
    };
  };
  
  
export default connect(mapStateToProps)(ItemListView);