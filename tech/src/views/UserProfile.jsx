import React from 'react';
import { connect } from 'react-redux';
import { getUsers, getItems, deleteItem, postItem, putItem } from '../actions';
import { Link } from 'react-router-dom';
import AddItemForm from '../components/AddItemForm.jsx';
import axios from 'axios';
import { Profile, CenterHeader, UserDetails, ProfileTopDiv, UserItems, RentRequests, UserItem, RequestItem, AddForm } from '../css/styledcomps.js';

class UserProfile extends React.Component {

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
         renter: null,
         owner: localStorage.userId,
         imgUrl: null,
      },
      addingItem: false,
      selectedImgUrl: null,
      showAddForm: false
   };

   componentDidMount() {
      this.props.getUsers();
      this.props.getItems();
   };

   submitHandler = e => {
      e.preventDefault();
      this.props.postItem(this.state.newItem);
   };

   fileHandler = (e) => {
      this.setState({selectedImgUrl: e.target.files[0]});
   };

   changeHandler = e => {
      this.setState({
         newItem: { ...this.state.newItem, [e.target.name]: e.target.value },
      });
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
      let count = 0;
      const user = this.props.users.find(user => {
         return (
            user.username.toLowerCase() ===
            this.props.match.params.username.toLowerCase()
         );
      });

      if (!user) {
         return <h1>Loading...</h1>;
      } else {
         return (
            <div>
               <Profile>
                  <ProfileTopDiv>
                     <img id='thumbnail' src={user.thumbnail ? user.thumbnail : ''} alt="avatar" />
                     <UserDetails>
                        <p>
                           <h2>{user.username}</h2>{user.firstname} {user.lastname} <br/> {user.email} <br/> {user.phone}
                        </p>
                     </UserDetails>
                  </ProfileTopDiv>

                  <CenterHeader>
                     <h2> {this.props.match.params.username === localStorage.username ? 'Your Items' 
                     : 'Items for Rent'}</h2>
                  </CenterHeader>
                  <UserItems>
                     {this.props.items.map(item => {
                        if (item.owner === user.userId) {
                           return (
                              <UserItem>
                                 <img src={item.imgUrl} alt="item" />
                                 <p> <span>{item.title} </span>: ${item.dailyPrice}/day</p>
                                    <Link to={{
                                            pathname: `/item/${item.itemId}`,
                                            state: {
                                                itemClicked: item
                                            }
                                        }}>
                                         <button id='first'>View</button> 
                                    </Link>
                                 {localStorage.username ===
                                    this.props.match.params.username && (
                                    <div id='btn'>
                                       <button id='third'
                                          onClick={() =>
                                             this.props.deleteItem(item.itemId)
                                          }
                                       >Delete
                                       </button>
                                       <Link
                                          to={{
                                             pathname: `/item/${item.itemId}/edit`,
                                             state: {
                                                itemClicked: item,
                                                updatingItem: true,
                                             },
                                          }}>
                                          <button id='second'>Update</button>
                                       </Link>
                                    </div>
                                 )}
                              </UserItem>
                           );
                        } else { return null }
                     })}
                  </UserItems>

                  {this.props.match.params.username === localStorage.username &&
                     <AddForm>
                        <button id='fourth' onClick={() => {
                           this.state.showAddForm === false ? this.setState({showAddForm: true}) : this.setState({showAddForm: false});
                        }}>{this.state.showAddForm === false ? 'Add Item' : 'Done'}</button>

                        {this.state.showAddForm && <AddItemForm 
                           submitHandler={this.submitHandler}
                           changeHandler={this.changeHandler}
                           uploadImg={this.uploadImg}
                           fileHandler={this.fileHandler}/> }
                     </AddForm>
                  }

                  {
                     this.props.match.params.username === localStorage.username &&
                     <div>
                     <CenterHeader><h2> Rent Requests</h2></CenterHeader>
                     <RentRequests>
                     <CenterHeader><h4> Outbound</h4></CenterHeader>
                        <div className='requests'>
                           {this.props.items.map(item => {
                              if (item.renter === user.userId) return (
                                 <RequestItem>
                                    <img src={item.imgUrl} alt='item' />
                                    <p>{item.title} </p>
                                    <Link to={{
                                       pathname: `/item/${item.itemId}`,
                                       state: {
                                          itemClicked: item
                                       }
                                    }}><button id='first'>View</button></Link>
                                    <button id='third' onClick={() => {
                                       this.props.putItem(item.itemId, {renter: null})}
                                       }>
                                       Cancel
                                    </button>
                                 </RequestItem>
                              ); else return null;
                           })}
                        </div>
   
                        {this.props.items.map(item => {
                           if (item.owner === localStorage.userId) {
                              count+=1
                              return count;
                           } else return null }
                        )}
   
                        {count !== 0 ? (
                           <div className='test' >
                              <CenterHeader><h4>Inbound</h4></CenterHeader>
                              {this.props.items.map(item => {
                                 if (item.owner === user.userId && item.renter !== null) return (
                                    <RequestItem>
                                       <img src={item.imgUrl} alt='item' />
                                       <p>{item.title}</p>
                                       <p>Rent Requested by {this.props.users.map(user => {
                                          if (user.userId === item.renter) return (user.username); else return null})} </p>
                                    </RequestItem>
                                 ); else return null 
                              })}
                           </div>
                        ) : <CenterHeader><h3>No inbound requests found</h3></CenterHeader>
                        }
                     </RentRequests>
                     </div>}
               </Profile>
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
   { getUsers, getItems, deleteItem, postItem, putItem }
)(UserProfile);
