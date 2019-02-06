import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getUsers, getItems, deleteItem, postItem } from '../actions';
import { Link } from 'react-router-dom';
import AddItemForm from '../components/AddItemForm';

const StyledProfileContainer = styled.div`
   border: solid slategray 2px;
   display: flex;
   flex-direction: column;
   padding-left: 2%;
   justify-content: space-around;
   width: 80%;
   margin-left: 6%;
   height: 1300px;
   margin-bottom: 5%;
   img {
      border-radius: 50%;
      height: 300px;
      margin-top: 4%;
   }
`;

const StyledUserDetails = styled.div`
   // border: solid purple 2px;
   width: 300px;
   height: 200px;
   margin-top: 10%;
   padding-left: 10%;
   font-size: 18px;
`;

const StyledTopDiv = styled.div`
   // border-bottom: solid slategray 1px;
   display: flex;
   width: 100%;
   justify-content: space-around;
   margin-right: 5%;
   height: 400px;
`;

const StyledUserItemsContainer = styled.div`
   display: flex;
   flex-direction: row;
   border: solid slategray 1px;
   margin-right: 2.5%;
   justify-content: space-between;
   min-height: 350px;
   min-width: 90%;
   overflow-x: auto;
`;

const StyledUserItem = styled.div`
   min-width: 25%;
   min-height: 240px;
   border: dashed slategray 1px;
   margin-top: 1%;
   margin-left: 15px;
   margin-bottom: 1%;
   text-align: center;
`;

class ProfileView extends React.Component {
   // display user items, requests, and reviews
   // if profile belongs to user, have edit profile option

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
         owner: 5,
      },
      addingItem: false,
   };

   componentDidMount() {
      this.props.getUsers();
      this.props.getItems();
   }

   submitHandler = e => {
      e.preventDefault();
      this.props.postItem(this.state.newItem);
   };

   changeHandler = e => {
      this.setState({
         newItem: { ...this.state.newItem, [e.target.name]: e.target.value },
      });
   };

   componentDidUpdate(prevProps) {
      if (prevProps.items.length !== this.props.items.length) {
         this.props.getItems();
      }
   }

   render() {
      console.log('this.props.match', this.props.match.params.username);
      const user = this.props.users.find(user => {
         return (
            user.username.toLowerCase() ===
            this.props.match.params.username.toLowerCase()
         );
      });
      console.log('user', user);

      if (!user) {
         return <h1>Loading...</h1>;
      } else {
         return (
            <div>
               <StyledProfileContainer>
                  <StyledTopDiv>
                     <img src={user.image ? user.image : ''} alt="avatar" />
                     <StyledUserDetails>
                        <h2>{user.username}</h2>
                        <p>
                           name: {user.firstname} {user.lastname}
                        </p>
                        <p>email: {user.email}</p>
                        <p>phone number: {user.phone}</p>
                     </StyledUserDetails>
                  </StyledTopDiv>
                  <StyledUserItemsContainer>
                     <AddItemForm
                        submitHandler={this.submitHandler}
                        changeHandler={this.changeHandler}
                     />
                     {this.props.items.map(item => {
                        if (item.owner === user.userId) {
                           return (
                              <StyledUserItem>
                                 <h3> {item.title} </h3>
                                 <img src={item.image} alt="item" />
                                 <p>
                                    {' '}
                                    {item.brand} {item.model} {item.label}{' '}
                                 </p>
                                 <p>
                                    {' '}
                                    daily price: ${item.dailyPrice} <br />{' '}
                                    Weekly price: ${item.weeklyPrice}{' '}
                                 </p>
                                 {sessionStorage.username ===
                                    this.props.match.params.username && (
                                    <div>
                                       <button
                                          onClick={() =>
                                             this.props.deleteItem(item.itemId)
                                          }
                                       >
                                          Garbage
                                       </button>
                                       <Link
                                          to={{
                                             pathname: `/item/${
                                                item.itemId
                                             }/edit`,
                                             state: {
                                                itemClicked: item,
                                                updatingItem: true,
                                             },
                                          }}
                                       >
                                          <button>Update Item</button>
                                       </Link>
                                    </div>
                                 )}
                              </StyledUserItem>
                           );
                        }
                     })}
                  </StyledUserItemsContainer>
               </StyledProfileContainer>
            </div>
         );
      }
   }
}

function mapStateToProps(state) {
   return {
      users: state.users,
      items: state.items,
   };
}

export default connect(
   mapStateToProps,
   { getUsers, getItems, deleteItem, postItem }
)(ProfileView);
