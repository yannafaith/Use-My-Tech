import styled from 'styled-components';

/* Nav Styles */

export const Nav = styled.div`{
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky; top: 0;
    background: white;
    box-shadow: 0px 0px 20px -7px rgba(0, 0, 0, 0.5);
    z-index: 2;
 
    .links {
       margin-right: 2%;
       width: 400px;
       display: flex;
       justify-content: space-around;
    };
 
    h1 {
       font-family: 'Roboto';
       font-weight: 900;
       font-size: 24px;
       margin-left: 35%;
       width: 120px;
    };
 
 }`;

  /* Footer Styles */

export const Footer = styled.footer`{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-right: 50%;
    color: white;
    background-color: #0c1425;
    height: 85px;
    align-items: center;
    p {
        :hover {
            color: #cccccc
        };
    };
}`;

 /* Auth Styles */

export const AuthStart = styled.div` {
    border: solid #07186f 1px;
    height: 500px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #f4f7fb;
    justify-content: space-evenly;
    margin-top: 4%;
    margin-bottom: 5%;
}`;

export const AuthDone = styled.div`{
    border: solid #07186f 1px;
    background-color: #f4f7fb;
    height: 500px;
    width: 90%;
    margin: 0 auto;
    margin-top: 4%;
    margin-bottom: 5%;

    p {
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
        margin-top: 10%;
    };

    div {
        display: flex;
        justify-content: space-around;
        width: 30%;
        margin: 0 auto;

        button {
            height: 45px;
            width: 150px;
            margin-top: 15%;
            background-color: white;
            border-color: blue;
            color: blue;
            font-size: 1rem;
            cursor: pointer;

            :hover {
                background-color: blue;
                border-color: blue;
                color: white;
            };
        };
    };
};
`;

export const AuthForm = styled.div`{
    background-color: #f4f7fb;

    form {
        display: flex;
        flex-direction: column;
        width: 500px;
        justify-content: center;
        margin-top: 5%;
        background-color: #f4f7fb; 
        
        input {
            height: 35px;
            background-color: white;
            margin-bottom: 10px;
            padding-left: 15px;
            border: none;
            border-radius: 5px;
        };

        button {
            height: 45px;
            width: 150px;
            margin: 0 auto;
            margin-top: 5%;
            background-color: white;
            border-color: blue;
            color: blue;
            font-size: 1rem;
            cursor: pointer;

            :hover {
                background-color: blue;
                border-color: blue;
                color: white;
            };
        };
    };
}`;

 /* Market Styles */

export const Search = styled.div`{
    display: flex;
    margin-top: 4%;
    width: 80%;
    margin: 0 auto;
    margin-top: 4%;
    align-items: center;
    box-shadow: 0px 0px 10px 0px #dee6f1;

    i {
        align-items: center;
        cursor: pointer;
        color: #07186f;
        display: flex;
    };

    div {
        display: flex;
        padding-left: 15px;
        font-size: 1.5rem;
        width: 50%;
        height: 50%;

        input {
            height: 1px;
            padding: 15px;
            margin-left: 15px;
            font-size: 1rem;
            border: none;
            width: 400px;
            border-radius: 5px;
        };

        p {
            margin-left: 3%;
            font-size: 1rem;
            cursor: pointer;
        };
    };
};`


export const MarketList = styled.div`{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 3%;
    padding-top: 3%;
    height: 650px;
    overflow: scroll;
    justify-content: space-around;
    background-color: #f4f7fb;
}`;

export const Item = styled.div`{
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

 /* Item Styles */

export const InItem = styled.div`{
    display: flex;
    flex-direction: row;
    padding-left: 2%;
    justify-content: space-center;
    background-color: #f4f7fb
    width: 80%;
    margin-left: 6%;
    height: 550px;
    margin-top: 5%;
    padding-top: 0%;

    img {
        height: 350px;
        width: 500px;
        margin-top: 4%;
    };

    #edit-form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 75%;
        height: 500px;
        margin-top: 5%;

        button {
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
            };

            img {
                display: none;
            };
        };
}`;


export const ItemDetails = styled.div`{
    width: 500px;
    height: 400px;
    margin-top: 0%;
    padding-left: 5%;
    font-size: 17px;
    display: flex;
    flex-direction: column;


    button {
        border: 1px solid blue;
        align-self: center;
        color: blue;
        border-radius: 5px;
        height: 40px;
        width: 150px;
        align-self: center;
        margin-top: 20px;
        :hover {
            color: white;
            background-color: blue;
        }
    }
}`;

export const TopDiv = styled.div`{
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-right: 3%;
    height: 100px;
    margin-top: 50px;
    
    .profile {
        color: gray;
    }
    span {
        font-weight: bold;
        font-size: 14px;
    }
}`;

/* Profile Styles */

export const Profile = styled.div`{
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
 
 }`;

export const CenterHeader = styled.div`{
    display: flex;
    justify-content: center;
 }`;

export const UserDetails = styled.div`{
    background-color: white;
    width: 300px;
    height: 200px;
    margin-top: 10%;
    padding-left: 5%;
    font-size: 16px;
    margin-right: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
 
    p {
       margin-top: 0%;
       line-height: 1;
    }

 }`;


export const ProfileTopDiv = styled.div`{
    display: flex;
    width: 97%;
    justify-content: space-around;
    margin-right: 5%;
    height: 400px;
    // background-color:  #f4f7fb;
 }`;
 
export const UserItems = styled.div`
   display: flex;
   flex-direction: row;
   margin-right: 3%;
   justify-content: space-around;
   flex-wrap: no-wrap;
   max-height: 500px;
   overflow-x: scroll;
   background-color:  #f4f7fb;
    .requests {
        width: 100%;    
        height: 500px;
        display: flex;

        h3 {
            text-align: center;
        };

    };
}`;

export const RentRequests = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 0%;
   margin-right: 3%;
   justify-content: space-between;
   flex-wrap: no-wrap;
   max-height: 430px;
   overflow-x: scroll;
   background-color:  #f4f7fb;
   .requests {
      height: 500px;
      display: flex;
      width: 100%;

      h3 {
         text-align: center;
      };
      
   };
}`;

export const UserItem = styled.div`
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

export const RequestItem = styled.div`
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
      #third {
         font-size: 1rem;
         font-weight: $font-weight-medium;
         color: white;
         background: #dc3545;
         border: none;
         border-radius: 5px;
         width: 90px;
         height: 40px;
         outline: none;
         cursor: pointer;
         text-align: center;
         text-decoration: none;
         margin-left: 10px;
      };
}`;

export const AddForm = styled.div`{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-end;
    height: 150px;
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

 /* AddItemForm Styles */

 export const Form = styled.form`{
    display: flex;
    flex-direction: column;
    // border: solid red 2px;
    width: 100%;
    margin-top: 2%;
    // justify-content: space-between;
    justify-content: center;
        input {
            // border: solid green 2px;
            width: 400px;
            padding-right: 4%;
            margin-left: 4%;

        }
    button {
        // border: solid red 2px;
        margin-left: 5%;
        margin-top: 1%;
    }

}`;