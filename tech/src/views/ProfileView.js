import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getUsers, getItems, deleteItem, postItem, putItem } from '../actions';
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
   height: 100%;
   margin-top: 5%;
   margin-bottom: 5%;
   background-color: white; //#0c1425;
      #thumbnail {
         border-radius: 50%;
         height: 300px;
         margin-top: 4%;
         margin-left: 20%;
      };

`;

const CenterHeader = styled.div`{
   display: flex;
   justify-content: center;
}`;

const StyledUserDetails = styled.div`
   background-color: white;
   width: 300px;
   height: 200px;
   margin-top: 10%;
   padding-left: 5%;
   font-size: 16px;
   margin-right: 10%;
   //border: solid green 2px
   display: flex;
   flex-direction: column;
   justify-content: space-around;
      p {
         // border: solid red 2px;
         margin-top: 0%;
         line-height: 1;
      }

`;

const StyledTopDiv = styled.div`
   display: flex;
   width: 97%;
   justify-content: space-around;
   margin-right: 5%;
   height: 400px;
   // background-color:  #f4f7fb;
   // border: solid blue 2px;
`;

const StyledUserItemsContainer = styled.div`
   display: flex;
   flex-direction: row;
   margin-right: 3%;
   justify-content: space-around;
   flex-wrap: no-wrap;
   // max-width: 100%;
   max-height: 500px;
   overflow-x: scroll;
   background-color:  #f4f7fb;
   // border: solid palevioletred 2px;
      .requests {
         // border: solid purple 2px;
         width: 100%;
            h3 {
               text-align: center;
            };
         height: 500px;
         display: flex;
      };
}`;

const StyledUserItemsContainer2 = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 0%;
   margin-right: 3%;
   justify-content: space-between;
   flex-wrap: no-wrap;
   // max-width: 100%;
   max-height: 430px;
   overflow-x: scroll;
   background-color:  #f4f7fb;
   // border: solid palevioletred 2px;
      .requests {
         // border: solid purple 2px;
         width: 100%;
            h3 {
               text-align: center;
            };
         height: 500px;
         display: flex;
      };
}`;

const StyledUserItem = styled.div`
   // border: solid yellow 2px
   // box-sizing: border-box;
   max-width: 30%;
   min-width: 30%;
   height: 300px;
   margin-top: 1%;
   margin-left: 15px;
   margin-right: 15px;
   margin-bottom: 1%;
   text-align: center;
   background-color: white;
   box-shadow: 0px 0px 27px -7px rgba(0, 0, 0, 0.2);
   border-radius: 5px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
      p {
         // border: solid blue 2px;
         width: 100%;
         height: 80px;
      }
      #btn {
         // border: solid green 2px;
         display: flex;
         justify-content: space-between;
         position: relative;
         bottom: 13%;
         height: 50px;
         padding-left: 20px;
         padding-right: 20px;
      };
      img {
         width: 100%;
         height: 235px;
         border-top-left-radius: 5px;
         border-top-right-radius: 5px;
         overflow-x: hidden;
         box-sizing: border-box;
         // border: solid red 1px;
      };
      #first {
         font-size: 1rem;
         font-weight: 500;
         color: white;
         background:  #0260ee;
         border: none;
         border-radius: 5px;
         width: 80px;
         height: 40px;
         outline: none;
         cursor: pointer;
         text-align: center;
         text-decoration: none;
         // border: solid red 2px;
         position: relative;
         z-index: 1;
      };
      #second {
         font-size: 1rem;
         font-weight: 500;
         color: white;
         background: #e0a800;
         border: none;
         border-radius: 5px;
         width: 80px;
         height: 40px;
         outline: none;
         cursor: pointer;
         text-align: center;
         text-decoration: none;
      };
      #third {
      font-size: 1rem;
      font-weight: $font-weight-medium;
      color: white;
      background: #dc3545;
      border: none;
      border-radius: 5px;
      width: 80px;
      height: 40px;
      outline: none;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
   };

}`;

const StyledUserItem2 = styled.div`
   border: solid yellow 2px
   // box-sizing: border-box;
   max-width: 30%;
   min-width: 30%;
   height: 350px;
   margin-top: 1%;
   margin-left: 15px;
   margin-right: 15px;
   margin-bottom: 1%;
   text-align: center;
   background-color: white;
   box-shadow: 0px 0px 27px -7px rgba(0, 0, 0, 0.2);
   border-radius: 5px;
      p {
         // border: solid blue 2px;
         width: 100%;
         height: 20px;
         overflow: hidden;
      }
      img {
         width: 100%;
         height: 235px;
         border-top-left-radius: 5px;
         border-top-right-radius: 5px;
         overflow-x: hidden;
         box-sizing: border-box;
         // border: solid red 10px;
      };
      #first {
         font-size: 1rem;
         font-weight: 500;
         color: white;
         background:  #0260ee;
         border: none;
         border-radius: 5px;
         width: 90px;
         height: 40px;
         outline: none;
         cursor: pointer;
         text-align: center;
         text-decoration: none;
      };
}`;

const FormContainer = styled.div`{
   // border: solid blue 2px;
   display: flex;
   flex-direction: column-reverse;
   align-items: center;
   justify-content: flex-end;
   height: 150px;
   // background-color: #0c1425;
      #fourth {
         font-size: 1rem;
         font-weight: $font-weight-medium;
         color: blue;
         background: white;
         border: blue solid 1px;
         border-radius: 5px;
         width: 150px;
         height: 50px;
         outline: none;
         cursor: pointer;
         text-align: center;
         text-decoration: none;
            :hover {
               background: blue;
               color: white;
            }
      }
}`;

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
               <StyledProfileContainer>
                  <StyledTopDiv>
                     <img id='thumbnail' src={user.thumbnail ? user.thumbnail : ''} alt="avatar" />
                     <StyledUserDetails>
                        <p>
                           <h2>{user.username}</h2>{user.firstname} {user.lastname} <br/> {user.email} <br/> {user.phone}
                        </p>
                     </StyledUserDetails>
                  </StyledTopDiv>

                  <CenterHeader>
                     <h2> {this.props.match.params.username === localStorage.username ? 'Your Items' 
                     : 'Items for Rent'}</h2>
                  </CenterHeader>
                  <StyledUserItemsContainer>
                     {this.props.items.map(item => {
                        if (item.owner == user.userId) {
                           return (
                              <StyledUserItem>
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
                                       <button id='second'
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
                                          <button id='third'>Update</button>
                                       </Link>
                                    </div>
                                 )}
                              </StyledUserItem>
                           );
                        }
                     })}
                  </StyledUserItemsContainer>

                  {this.props.match.params.username === localStorage.username &&
                     <FormContainer>
                        <button id='fourth' onClick={() => {
                           this.state.showAddForm === false ? this.setState({showAddForm: true}) : this.setState({showAddForm: false});
                        }}>{this.state.showAddForm === false ? 'Add Item' : 'Done'}</button>

                        {this.state.showAddForm && <AddItemForm 
                           submitHandler={this.submitHandler}
                           changeHandler={this.changeHandler}
                           uploadImg={this.uploadImg}
                           fileHandler={this.fileHandler}/> }
                     </FormContainer>
                  }

                  {
                     this.props.match.params.username === localStorage.username &&
                     <div>
                     <CenterHeader><h2> Rent Requests</h2></CenterHeader>
                     <StyledUserItemsContainer2>
                     <CenterHeader><h4> Outbound</h4></CenterHeader>
                        <div className='requests'>
                           {this.props.items.map(item => {
                              if (item.renter === user.userId) return (
                                 <StyledUserItem2>
                                    <img src={item.imgUrl} alt='item' />
                                    <p>{item.title} </p>
                                    <Link to={{
                                       pathname: `/item/${item.itemId}`,
                                       state: {
                                          itemClicked: item
                                       }
                                    }}><button id='first'>View</button></Link>
                                    <button onClick={() => {
                                       this.props.putItem(item.itemId, {renter: null})}
                                       }>
                                       Cancel Request
                                    </button>
                                 </StyledUserItem2>
                              ); 
                           })}
                        </div>
   
                        {this.props.items.map(item => {
                           if (item.owner === localStorage.userId) {
                              count+=1
                              return count;
                           }}
                        )}
   
                        {count !== 0 ? (
                           <div className='test' >
                              <CenterHeader><h4>Inbound</h4></CenterHeader>
                              {this.props.items.map(item => {
                                 if (item.owner === user.userId && item.renter !== null) return (
                                    <StyledUserItem2>
                                       <img src={item.imgUrl} alt='item' />
                                       <p>{item.title}</p>
                                       <p>Rent Requested by {this.props.users.map(user => {
                                          if (user.userId === item.renter) return (user.username)})} </p>
                                    </StyledUserItem2>
                                 ) 
                              })}
                           </div>
                        ) : <CenterHeader><h3>No inbound requests found</h3></CenterHeader>
                        }
                     </StyledUserItemsContainer2>
                     </div>
                     
                  }





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
   { getUsers, getItems, deleteItem, postItem, putItem }
)(ProfileView);


/*

{localStorage.username === this.props.match.params.username &&                      
   <StyledUserItem>
      <AddItemForm
         submitHandler={this.submitHandler}
         changeHandler={this.changeHandler}
         uploadImg={this.uploadImg}
         fileHandler={this.fileHandler}
      />
   </StyledUserItem>

*/