import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { getUsers, getItems, putItem } from '../actions';

const StyledItemContainer = styled.div`{
    border: solid slategray 2px;
    display: flex;
    flex-direction: row;
    padding-left: 2%;
    justify-content: space-around;
    width: 80%;
    margin-left: 6%;
    height: 800px;
        img {
            height: 300px;
            margin-top: 4%;
        };
}`;

const StyledItemDetails = styled.div`{
    // border: solid purple 2px;
    width: 300px;
    height: 200px;
    margin-top: 6%;
    padding-left: 10%;
    font-size: 18px;
}`;

const StyledTopDiv = styled.div`{
    border-bottom: dashed slategray 1px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-right: 3%;
    height: 400px;
    margin-top: 50px;
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
        this.props.putItem(itemId, {"renter": localStorage.userId}) // change using localStorage
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
                <form onSubmit={this.submit}>
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
                    <img alt='item' src={data.image} />
                    <StyledItemDetails>
                        <h3>{data.title}</h3>
                        <p> Brand: {data.brand}</p>
                        <p> Model: {data.model}</p>
                        <p> Description: {data.description} </p>
                        <p> Daily Price: {data.dailyPrice}</p>
                        <p> Weekly Price: {data.weeklyPrice}</p>
                        <Link to={{
                            pathname: `/profile/${clickedUser[0].username}`,
                            state: {
                                user: clickedUser
                                }
                            }}>
                            <p>Renter Profile Link: {clickedUser[0].username}</p>
                        </Link>
                        <button onClick={() => this.rentItem()}>Rent Request</button>
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

/* 

      return (
          <StyledItemContainer>
            <StyledTopDiv>
              <img src={data.image} />
                <StyledItemDetails>
                    <h3>{data.title}</h3>
                    <p> Brand: {data.brand}</p>
                    <p> Model: {data.model}</p>
                    <p> Description: {data.description} </p>
                    <p> Daily Price: {data.dailyPrice}</p>
                    <p> Weekly Price: {data.weeklyPrice}</p>
                    <Link to={{
                        pathname: `/profile/${clickedUser[0].username}`,
                        state: {
                            user: clickedUser
                            }
                        }}>
                        <p>Renter Profile Link: {clickedUser[0].username}</p>
                    </Link>
                </StyledItemDetails>
            </StyledTopDiv>
              {this.props.location.state.updatingItem && 
                <form>
                    <h3>Title: {
                    <input 
                    placeholder={data.title} 
                    name='title' 
                    onChange={this.handleChanges}/>}
                    </h3>
                </form>
              }

          </StyledItemContainer>
      );  




*/