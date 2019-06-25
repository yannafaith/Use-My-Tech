import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItems, getUsers } from '../actions';
import { Search, MarketList, Item } from '../css/styledcomps.js'
import NodeGeocoder from 'node-geocoder'

class Market extends React.Component {
    state = {
        search: "",
        posts: [],
        options: {
            provider: 'opencage',
            apiKey: '641daca935dd4e19957aa616d27e2932'
        },
    };


    componentDidMount() {
        this.props.getUsers();
        this.props.getItems();

        const geocoder = NodeGeocoder(this.state.options);
        if (navigator.geolocation) {
            function displayLocationInfo(position) {
                const lng = position.coords.longitude;
                const lat = position.coords.latitude;
                geocoder.reverse({lat: lat, lon: lng}, function(err, res) {
                    console.log(res);
                });
            } navigator.geolocation.getCurrentPosition(displayLocationInfo);  
        } else return;
                    
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    search = (e) => {
        e.preventDefault();
        const filteredPosts = this.props.items.filter(item => 
            item.title.toUpperCase().includes(this.state.search.toUpperCase())
        );
        this.setState({
            posts: filteredPosts
        })
    };

    render() {

        return (
            <div className="items">

                <Search> 
                    <div>
                        <i className="far fa-search"></i>
                        <form onSubmit={this.search}>
                        <input
                            onChange={this.handleChange}
                            name="search"
                            placeholder="search listings..."
                        />
                        </form>
                    </div>
                    <div className="location"> 
                        <i className="fal fa-globe"></i>
                        <p>Phoenix, Arizona</p>
                    </div>
                </Search> 

                <MarketList>

                    {!this.state.posts[0] && this.props.items.map(item => {
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
                        )} else { return null}
                    })}

                    {this.state.posts[0] && this.state.posts.map(item => {
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
                        )} else { return null }
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
