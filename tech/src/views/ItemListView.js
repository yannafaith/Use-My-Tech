import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const StyledContainer = styled.div`{
    // border: solid slategray 2px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5%;
    margin-top: 3%;
    justify-content: space-around;
    margin-bottom: 2%;
}`;

const StyledLinksToItems = styled.div`{
    width: 350px;
    border: solid slategray 1px;
    height: 400px;
    margin-bottom: 2%;
    display: flex;
    flex-direction: column;
    text-align: center
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
    state = {
        newItems: []
    };

    componentDidMount() {
        axios.get('https://use-my-tech-stuff.herokuapp.com/api/users')
        .then(res => console.log(res.data));
        axios.get('https://use-my-tech-stuff.herokuapp.com/api/items')
        .then(res => console.log(res.data))
    }

    render() {

        return (
            <StyledContainer>
                
                {this.props.items.map(item => {
                    return (
                        <Link to={{
                            pathname: `/item/${item.itemId}`,
                            state: {
                                itemClicked: item
                            }}} > 
                            <StyledLinksToItems>
                                <h3> {item.title} </h3>
                                <img src={item.image} alt='item'/>
                                <p> {item.brand} {item.model} {item.label} </p>
                                <p> daily price: ${item.dailyPrice} <br/> Weekly price: ${item.weeklyPrice} </p>
                            </StyledLinksToItems>
                        </Link>
                    );
                })}
                
                {/*
                 make the above a component  
                 make each card a link to itemView                
                */}

            </StyledContainer>
        );
    };
};


function mapStateToProps(state){
    return {
      items: state.items
    };
  };
  
  
export default connect(mapStateToProps)(ItemListView);

/*
<div>
    <p>Search bar</p>
    <button>Add Item <br/> + </button>
</div>
*/