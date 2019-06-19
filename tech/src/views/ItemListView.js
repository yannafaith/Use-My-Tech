import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { getItems, getUsers } from '../actions';

// background-color:  #f4f7fb;
 // background-color: #0c1425;

const StyledContainer = styled.div`{
    // border: solid slategray 2px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5%;
    margin-top: 5%;
    max-height: 675px;
    overflow: scroll;
    justify-content: space-around;
    margin-bottom: 2%;
    background-color: #f4f7fb;

}`;

const StyledLinksToItems = styled.div`{
    width: 350px;
    border-radius: 5px;
    height: 400px;
    margin-bottom: 1.5%;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0px 0px 27px -7px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    p {
        height: 20px;
        margin-left: 20px;
    };
    
    img {
        width: 100%;
        height: 235px;
        align-self: center;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    };


    span {
        font-weight: bold;
    };

    button {
        border: 1px solid blue;
        color: blue;
        border-radius: 5px;
        height: 40px;
        width: 150px;
        font-size: 16px;
        margin-left: 20px;
        cursor: pointer;

        :hover {
            color: white;
            background-color: blue;
        };
    };

    a {
        width: 190px;
    };

}`;

const Container = styled.div`{
    display: flex;
    flex-direction: row;
    // border: solid blue 5px;
    z-index: 0;
    width: 100%;
    justify-content: center;
    align-items: flex-end;

    h2 {
        font-size: 2rem;
        margin-top: 50px;
        margin-bottom: 50px;
    }
}`


class ItemListView extends React.Component {

    componentDidMount() {
        this.props.getUsers();
        this.props.getItems();
    };

    render() {

        return (
            <div>        
                <StyledContainer>
                    <Container> 
                       <h2>Listings</h2>
                    </Container>
                    {this.props.items.map(item => {
                        if (item.owner !== parseInt(localStorage.userId) && item.renter == null)
                            {return (
                                <StyledLinksToItems>
                                    <img src={item.imgUrl} alt='item'/>
                                    <p> <span>{item.title} </span>: ${item.dailyPrice}/day</p>
                                    <p>{item.label}</p>
                                    <Link to={{
                                            pathname: `/item/${item.itemId}`,
                                            state: {
                                                itemClicked: item
                                            }
                                        }}>
                                         <button>Rent</button> 
                                    </Link>
                                </StyledLinksToItems>
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

/*
                <StyledFooter>
                        <p>@2019 Tech Plum</p>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                        <p>Help</p>
                </StyledFooter>


                                    <CenterHeader>
                        <h2>Listings</h2> 
                    </CenterHeader>   
*/