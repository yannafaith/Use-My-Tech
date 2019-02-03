import React from 'react';
import {connect} from 'react-redux';

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
                        <div className='LinkToItemView'>
                            <h3> {item.title} </h3>
                            <img alt='item Picture'/>
                            <p> {item.brand} {item.model} {item.label} </p>
                            <p> daily price: ${item.dailyPrice} <br/> Weekly price: ${item.weeklyPrice} </p>
                        </div>
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