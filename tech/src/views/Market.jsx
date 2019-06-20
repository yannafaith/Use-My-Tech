import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItems, getUsers } from '../actions';
import { Search, MarketList, Item } from '../css/styledcomps.js'

class Market extends React.Component {

    componentDidMount() {
        this.props.getUsers();
        this.props.getItems();
    };

    render() {

        return (
            <div className="items">
                <Search> 
                    <div>
                        <i className="far fa-search"></i>
                        <input
                            placeholder="search listings..."
                        />
                    </div>
                    <div className="location"> 
                        <i className="fal fa-globe"></i>
                        <p>Phoenix, Arizona</p>
                    </div>
                </Search>        
                <MarketList>
                    {this.props.items.map(item => {
                        if (item.owner !== parseInt(localStorage.userId) && item.renter == null)
                            { return (
                                <Item>
                                    <img src={item.imgUrl} alt='item'/>
                                    <p> <span>{item.title} </span>: ${item.dailyPrice}/day</p>
                                    <p>{item.label}</p>
                                    <div>
                                    <Link to={{
                                            pathname: `/item/${item.itemId}`,
                                            state: {
                                                itemClicked: item
                                            }
                                        }}>
                                            <button>Rent</button> 
                                    </Link>
                                    <i className="fal fa-bookmark"></i>
                                    </div>
                                </Item>
                        )}
                    })}
                </MarketList>
            </div>
        );
    };
};


function mapStateToProps(state){
    return {
      items: state.items,
      users: state.users
    };
  };
  
  
export default connect(
    mapStateToProps, {getItems, getUsers}
    )(Market);
