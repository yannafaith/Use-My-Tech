import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { getItems, getUsers } from '../actions';

// background-color:  #f4f7fb;
 // background-color: #0c1425;

const StyledContainer = styled.div`{
    border: solid slategray 2px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5%;
    margin-top: 3%;
    justify-content: space-around;
    margin-bottom: 2%;
    background-color: #0c1425;
}`;

const StyledLinksToItems = styled.div`{
    width: 350px;
    // border: solid slategray 1px;
    height: 400px;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 5%;
    background-color: white;
        :hover {
            background-color: slategray;
            color: black;
        };
    img {
        width: 300px;
        height: 235px;
        align-self: center;
    };
}`;

class ItemListView extends React.Component {

    componentDidMount() {
        this.props.getUsers();
        this.props.getItems();
    };

    render() {

        return (
            <div>              
                <StyledContainer>
                    {this.props.items.map(item => {
                        if (item.owner !== parseInt(localStorage.userId) && item.renter == null)
                            {return (
                            <Link to={{
                                pathname: `/item/${item.itemId}`,
                                state: {
                                    itemClicked: item
                                }}} > 
                                <StyledLinksToItems>
                                    <h3> {item.title} </h3>
                                    <img src={item.imgUrl} alt='item'/>
                                    <p> {item.brand} {item.model} {item.label} </p>
                                    <p> daily price: ${item.dailyPrice} <br/> Weekly price: ${item.weeklyPrice} </p>
                                </StyledLinksToItems>
                            </Link>
                        )}
                    })}
                </StyledContainer>

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
    )(ItemListView);
