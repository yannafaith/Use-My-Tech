import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { getUsers, getItems, putItem } from '../actions';

const StyledItemContainer = styled.div`{
    // border: solid slategray 2px;
    display: flex;
    flex-direction: row;
    padding-left: 2%;
    justify-content: space-center;
    background-color: #f4f7fb
    width: 80%;
    margin-left: 6%;
    height: 550px;
    margin-top: 5%;
    padding-top: 0%;
        img {
            height: 350px;
            width: 500px;
            margin-top: 4%;
        };
        #edit-form {
            // border: solid green 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            flex-wrap: wrap;
            width: 75%;
            height: 500px;
            margin-top: 5%;
                button {
                    font-size: 1rem;
                    font-weight: $font-weight-medium;
                    color: blue;
                    background: white;
                    border: blue solid 1px;
                    border-radius: 5px;
                    width: 150px;
                    height: 50px;
                    outline: none;
                    cursor: pointer;
                    text-align: center;
                    text-decoration: none;
                       :hover {
                          background: blue;
                          color: white;
                       }
                }
                img {
                    display: none;
                };
        }
}`;

const StyledItemDetails = styled.div`{
    width: 500px;
    height: 400px;
    margin-top: 0%;
    padding-left: 5%;
    font-size: 17px;
    display: flex;
    flex-direction: column;


    button {
        border: 1px solid blue;
        align-self: center;
        color: blue;
        border-radius: 5px;
        height: 40px;
        width: 150px;
        align-self: center;
        margin-top: 20px;
        :hover {
            color: white;
            background-color: blue;
        }
    }
}`;

const StyledTopDiv = styled.div`{
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-right: 3%;
    height: 100px;
    margin-top: 50px;
    
    .profile {
        color: gray;
    }
    span {
        font-weight: bold;
        font-size: 14px;
    }
}`;



class ItemView extends React.Component {
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
        // this.props.getItems();
    };

    rentItem = (itemId = this.props.location.pathname.split('/')[2]) => {
        this.props.putItem(itemId, {"renter": parseInt(localStorage.userId)}) // change using localStorage
        alert('item rental request sent!');
    };


    render() {
      const data = this.props.location.state.itemClicked;

      // this returns an array with one object 
       let clickedUser = this.props.users.filter(user => {
          if (user.userId === data.owner) return user
      }); 

      return (
          <StyledItemContainer>
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

                <StyledTopDiv>
                    <img alt='item' src={data.imgUrl} />
                    <StyledItemDetails>
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

                    </StyledItemDetails>
                </StyledTopDiv>
              }
          </StyledItemContainer>
      );  
    };
};

function mapStateToProps(state) {
    return {
        items: state.items,
        users: state.users
    };
};

export default connect(mapStateToProps, {getUsers, getItems, putItem})(ItemView);