import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getUsers, getItems, deleteItem, postItem } from '../actions';
import { Link } from 'react-router-dom';
import AddItemForm from '../components/AddItemForm';
import axios from 'axios';

const StyledProfileContainer = styled.div`
   // border: solid red 2px;
   display: flex;
   flex-direction: column;
   padding-left: 2%;
   justify-content: space-around;
   width: 80%;
   margin-left: 6%;
   height: 1400px;
   margin-bottom: 5%;
   background-color: #0c1425;
   img {
      border-radius: 50%;
      height: 300px;
      margin-top: 4%;
   }
`;

const StyledUserDetails = styled.div`
   background-color: white;
   width: 300px;
   height: 200px;
   margin-top: 10%;
   padding-left: 10%;
   font-size: 18px;
   // border: solid green 2px
`;

const StyledTopDiv = styled.div`
   display: flex;
   width: 97%;
   justify-content: space-around;
   margin-right: 5%;
   height: 400px;
   background-color:  #f4f7fb;
   // border: solid blue 2px;
`;

const StyledUserItemsContainer = styled.div`
   display: flex;
   flex-direction: row;
   margin-right: 3%;
   justify-content: space-around;
   flex-wrap: wrap
   height: 450px;
   overflow-x: scroll;
   background-color:  #f4f7fb;
   border: solid palevioletred 2px;
`;

const StyledUserItem = styled.div`
   // border: solid pink 2px
   max-width: 30%;
   min-width: 30%;
   max-height: 600px;
   margin-top: 1%;
   margin-left: 15px;
   margin-bottom: 1%;
   text-align: center;
   background-color: white;
      img {
         width: 100px;
         height: 100px;
      }
`;

class ProfileView extends React.Component {
   // display user items, requests, and reviews
   // if profile belongs to user, have edit profile option

   // need to 

   state = {
      newItem: {
         available: true,
         dailyPrice: null,
         weeklyPrice: null,
         description: '',
         label: '',
         model: '',
         title: '',
         renter: null,
         owner: localStorage.userId,
         imgUrl: null,
      },
      addingItem: false,
      selectedImgUrl: null
   };

   componentDidMount() {
      this.props.getUsers();
      this.props.getItems();
   };

   submitHandler = e => {
      e.preventDefault();
      this.props.postItem(this.state.newItem);
   };

   changeHandler = e => {
      this.setState({
         newItem: { ...this.state.newItem, [e.target.name]: e.target.value },
      });
   };

   fileHandler = (e) => {
      this.setState({selectedImgUrl: e.target.files[0]});
   };

   uploadImg = (e) => {
      e.preventDefault();
      const fd = new FormData();
      fd.append('image', this.state.selectedImgUrl);
      axios
         .post('https://use-my-tech-stuff.herokuapp.com/api/items/upload', fd)
         .then(res => {
            console.log(res);
            this.setState({newItem: {...this.state.newItem, imgUrl: res.data.image}})
         })
         .catch(err => alert('err'));
   };

   componentDidUpdate(prevProps) {
      if (prevProps.items.length !== this.props.items.length) {
         this.props.getItems();
      }
   };

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
                     <img src={user.thumbnail ? user.thumbnail : ''} alt="avatar" />
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
                    {localStorage.username === this.props.match.params.username &&                      
                        <StyledUserItem>
                           <AddItemForm
                              submitHandler={this.submitHandler}
                              changeHandler={this.changeHandler}
                              uploadImg={this.uploadImg}
                              fileHandler={this.fileHandler}
                           />
                        </StyledUserItem>
                    }
                     {this.props.items.map(item => {
                        if (item.owner === user.userId) {
                           return (
                              <StyledUserItem>
                                 <h3> {item.title} </h3>
                                 <img src={item.imgUrl} alt="item" />
                                 <p>
                                    {' '}
                                    {item.brand} {item.model} {item.label}{' '}
                                 </p>
                                 <p>
                                    {' '}
                                    daily price: ${item.dailyPrice} <br />{' '}
                                    Weekly price: ${item.weeklyPrice}{' '}
                                 </p>
                                 <Link to={{
                                    pathname: `/item/${item.itemId}`,
                                    state: {
                                       itemClicked: item
                                       }
                                    
                                    }}><button> Item Details</button>
                                 </Link>


                                 {localStorage.username ===
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

                  <StyledUserItemsContainer>
                     <div>
                        <h3> Outbound Rent Requests</h3>
                        {this.props.items.map(item => {
                           if (item.renter === user.userId) return (
                              <div>
                                 <img src={item.imgUrl} alt='item' />
                                 <p>{item.title} </p>
                                 <p>Owned By {this.props.users.map(user => {
                                    if (item.owner === user.userId) return user.username})}</p>
                                 <Link to={{
                                    pathname: `/item/${item.itemId}`,
                                    state: {
                                       itemClicked: item
                                    }
                                 }}><button>Item Details</button></Link>
                              </div>
                           ); 
                        })}
                     </div>
                     <div>
                        <h3>Inbound Rent Requests</h3>
                        {this.props.items.map(item => {
                           if (item.owner === user.userId && item.renter !== null) return (
                              <div>
                                 <img src={item.imgUrl} alt='item' />
                                 <p>{item.title}</p>
                                 <p>Rent Requested by {this.props.users.map(user => {
                                    if (user.userId === item.renter) return (user.username)})} </p>
                              </div>
                           ) 
                        })}
                     </div>

                     
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
