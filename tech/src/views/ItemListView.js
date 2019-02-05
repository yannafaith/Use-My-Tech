import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { getItems, getUsers, postItem } from '../actions';
import AddItemForm from '../components/AddItemForm';

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
        newItem: {
            available: true,
            dailyPrice: null,
            weeklyPrice: null,
            description: '',
            label: '',
            model: '',
            title: '',
            renter: 1,
            owner: 1
        },
        addingItem: false
    };

    componentDidMount() {
        this.props.getUsers();
        this.props.getItems();
    };


    submitHandler = e => {
        e.preventDefault();
        this.props.postItem(this.state.newItem);
        this.props.getItems();
    };

    changeHandler = e => {
        this.setState({
            newItem: {...this.state.newItem, [e.target.name]: e.target.value}
        });
    };

    render() {

        return (
            <div>              



                <AddItemForm submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>

                

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
    mapStateToProps, {getItems, getUsers, postItem}
    )(ItemListView);

/*
<div>
    <p>Search bar</p>
    <button>Add Item <br/> + </button>
</div>

<Link to={{
    pathname: '/add-item',
    state: {
        currentUser: ''
    }}}> <button> Add New Item</button> 
</Link> 

{(this.state.addingItem && <AddItemForm submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>)}
*/