import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

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



class ItemPageView extends React.Component {


    // item booking takes place here


    render() {
      const data = this.props.location.state.itemClicked;

      // this returns an array with one object 
       let clickedUser = this.props.users.filter(user => {
          if (user.userId === data.owner) return user
      }); 

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
                            user: clickedUser[0]
                            }
                        }}>
                        <p>Renter: {clickedUser[0].username}</p>
                    </Link>
                </StyledItemDetails>
              </StyledTopDiv>
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

export default connect(mapStateToProps)(ItemPageView);

