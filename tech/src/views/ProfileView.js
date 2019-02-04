import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {getUsers}  from '../actions';

const StyledProfileContainer = styled.div`{
    border: solid slategray 2px;
    display: flex;
    flex-direction: row;
    padding-left: 2%;
    justify-content: space-around;
    width: 80%;
    margin-left: 6%;
    height: 800px;
        img {
            border-radius: 50%;
            height: 300px;
            margin-top: 4%;
        };
    
}`;

const StyledUserDetails = styled.div`{
    // border: solid purple 2px;
    width: 300px;
    height: 200px;
    margin-top: 10%;
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
}`;
class ProfileView extends React.Component {

    // display user items, requests, and reviews
    // if profile belongs to user, have edit profile option

    componentDidMount() {
        this.props.getUsers();
    };

    render() {
        const data = this.props.location.state.user;
        return (
            <StyledProfileContainer>
                <StyledTopDiv>
                    <img src={data.image} alt='avatar' />
                    <StyledUserDetails>
                        <h2>{data.username}</h2>
                        <p>name: {data.firstName} {data.lastName}</p>
                        <p>email: {data.email}</p>
                        <p>phone number: {data.phone}</p>
                    </StyledUserDetails>
                </StyledTopDiv>
            </StyledProfileContainer>
        );
    };
};

function mapStateToProps(state) {
    return {
        users: state.users,
        items: state.items
    };
};

export default connect(mapStateToProps, {getUsers})(ProfileView);