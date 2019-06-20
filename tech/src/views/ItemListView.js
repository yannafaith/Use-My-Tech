import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { getItems, getUsers } from '../actions';

 const Container = styled.div`{
    display: flex;
    margin-top: 4%;
    width: 80%;
    margin: 0 auto;
    margin-top: 4%;
    align-items: center;
    box-shadow: 0px 0px 10px 0px #dee6f1;

    i {
        font-size: 2.2em
        display: flex;
        align-items: center;
    }

    .location {
        border: none;
        p {
            margin-left: 3%;
            font-size: 1rem;
            cursor: pointer;
        };

        i {
            color: #07186f;
            cursor: pointer;
        }
    };

    div {
        display: flex;
        padding-left: 15px;
        font-size: 1.5rem;
        width: 50%;
        height: 50%;

        i {
            font-size: 1em;
            display: flex;
            color: #07186f;
        }

        input {
            height: 1px;
            padding: 15px;
            margin-left: 15px;
            font-size: 1rem;
            border: none;
            width: 100%;
            border: solid #f0f0f0 2px;
            border-radius: 5px;
        };
    };

}`

const StyledContainer = styled.div`{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 3%;
    padding-top: 3%;
    height: 675px;
    overflow: scroll;
    justify-content: space-around;
    background-color: #f4f7fb;
}`;

const StyledLinksToItems = styled.div`{
    width: 350px;
    border-radius: 5px;
    height: 400px;
    margin-bottom: 5%;
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

    div {
        //border: solid purple 2px;
        display: flex;
        width: 348px;
        justify-content: space-between;

        i {
            font-size: 2.3em;
            margin-right: 20px;
            display: flex;
            height: 100%;
            color: #e0a800;
            align-items: flex-end;
            background-clip: content-box;
            cursor: pointer;
        };
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

}`;


class ItemListView extends React.Component {

    componentDidMount() {
        this.props.getUsers();
        this.props.getItems();
    };

    render() {

        return (
            <div className="items">
                <Container> 
                    <div>
                        <i class="far fa-search"></i>
                        <input
                            placeholder="search listings..."
                        />
                    </div>
                    <div className="location"> 
                        <i class="fal fa-globe"></i>
                        <p>Phoenix, Arizona</p>
                    </div>
                </Container>        
                <StyledContainer>
                    {this.props.items.map(item => {
                        if (item.owner !== parseInt(localStorage.userId) && item.renter == null)
                            {return (
                                <StyledLinksToItems>
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
                                    <i class="fal fa-bookmark"></i>
                                    </div>
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
