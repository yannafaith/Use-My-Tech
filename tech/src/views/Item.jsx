import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers, getItems, putItem } from '../actions';
import { InItem, ItemDetails, TopDiv } from '../css/styledcomps.js'

class Item extends React.Component {
    state = {
        updatedItem: {
         }
    }

    handleChanges = (e) => {
        this.setState({
            updatedItem: {
                ...this.state.updatedItem, [e.target.name] : e.target.value
            }
        });
        console.log(this.state.updatedItem);
    };

    submit = (e, itemId = this.props.location.pathname.split('/')[2]) => {
        e.preventDefault();
        this.props.putItem(itemId, this.state.updatedItem);
        this.props.history.push(`/profile/${localStorage.username}`);
    };

    rentItem = (itemId = this.props.location.pathname.split('/')[2]) => {
        this.props.putItem(itemId, {"renter": parseInt(localStorage.userId)}) // change using localStorage
        alert('item rental request sent!');
    };


    render() {
      const data = this.props.location.state.itemClicked;

       let clickedUser = this.props.users.filter(user => {
          if (user.userId === data.owner) return user
      }); 

      return (
          <InItem>
              {this.props.location.state.updatingItem ?
                <form id='edit-form' onSubmit={this.submit}>
                    <img style={{width: '275px', height: '275px'}}src={data.image} />
                    <p>Change Image? <input type='file'/> </p>
                    <p>Title: {
                    <input 
                    placeholder={data.title} 
                    name='title' 
                    onChange={this.handleChanges}/>}
                    </p>
                    <p>Brand: {
                    <input 
                    placeholder={data.brand} 
                    name='brand' 
                    onChange={this.handleChanges}/>}
                    </p>
                    <p>Model: {
                    <input 
                    placeholder={data.model} 
                    name='model' 
                    onChange={this.handleChanges}/>}
                    </p>
                    <p>Description: <br/> {
                    <input style={{height:'200px', width: '300px'}} id='description'
                    placeholder={data.description} 
                    name='description' 
                    onChange={this.handleChanges}/>}
                    </p>
                    <p>Daily Price: {
                    <input 
                    placeholder={data.dailyPrice} 
                    name='dailyPrice' 
                    onChange={this.handleChanges}/>}
                    </p>
                    <p>Weekly Price: {
                    <input 
                    placeholder={data.weeklyPrice} 
                    name='weeklyPrice' 
                    onChange={this.handleChanges}/>}
                    </p>
                    <button type='submit'>Edit Item</button>
                </form> 
                
                :

                <TopDiv>
                    <img alt='item' src={data.imgUrl} />
                    <ItemDetails>
                        <h3>{data.title} <br/>
                        <Link to={{
                            pathname: `/profile/${clickedUser[0].username}`,
                            state: {
                                user: clickedUser
                                }
                            }}>
                            <span className='profile'> {clickedUser[0].username}</span>
                        </Link> </h3>
                        <p>
                            ${data.dailyPrice} <span>per day</span> <br/>
                            ${data.weeklyPrice} <span>per week</span> <br/> <br/>
                            Brand: <span> {data.brand} </span> <br/>
                            Model: <span>{data.model} </span> <br/> <br/>
                            {data.description} <br/>
                        </p>
                        {data.owner !== parseInt(localStorage.userId) && <div><button onClick={() => this.rentItem()}>Rent Request</button></div>}

                    </ItemDetails>
                </TopDiv>
              }
          </InItem>
      );  
    };
};

function mapStateToProps(state) {
    return {
        items: state.items,
        users: state.users
    };
};

export default connect(mapStateToProps, {getUsers, getItems, putItem})(Item);