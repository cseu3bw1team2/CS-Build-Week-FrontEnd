// import React, { useState } from 'react'
// import styled from 'styled-components';

// // import { MDBInput } from "mdbreact";

// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

// import { getUrl } from "../../util/url";
// import { getWithAuth } from '../../util/controllers/data';

// const Home = () => {
//     return (
//         <HomeStyle>
//             <StartNewGame/>
//         </HomeStyle>
//     )
// }

// const StartNewGame = () => {
//     const [userInfo, setUserInfo] = useState({});

//     const hadleInput = e => setUserInfo({...userInfo,...{[e.target.name]: e.target.value}})
    
//     const handleSubmit = async e => {
//         e.preventDefault(); 
//         try {
//             const url = getUrl('START_GAME')
//             const res = await getWithAuth(url).create({
//                 headers: {
//                     Authorization: "Token " + window.sessionStorage.getItem("Authorization")
//                 }
//             });
//             // console.log(res.key)

//             // window.sessionStorage.setItem('token',res.key);
//             console.log(res)
//             // route to the main page
            
//         } catch(e){
//             // TODO: Handle error using some notification system.
//             console.log(e)
//             alert('Error: '+e.message);
//         }
//     }

//     return (
//     <MDBContainer >
//       <MDBRow >
//         <MDBCol md="6">
//           <MDBCard>
//             <MDBCardBody>
//               <form>
//                 <p className="h4 text-center py-4">Start New Game</p>
//                 <div className="grey-text">
//                   <MDBInput
//                     label="Username"
//                     icon="user"
//                     group
//                     name="username"
//                     type="text"
//                     validate
//                     error="wrong"
//                     success="right"
//                     onChange={hadleInput}
//                   />
//                 </div>
//                 <div className="text-center py-4 mt-3">
//                   <MDBBtn onClick={handleSubmit} color="cyan" type="submit">
//                     Start Game
//                   </MDBBtn>
//                 </div>
//               </form>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };



// export default Home;

// const HomeStyle = styled.div`
//     display: flex;
//     flex-direction: column;
//     // background: red;
//     height: 990px;
// `;

import React from "react";
// import {Link } from 'react-router-dom';
// import Card from "../components/Card/Card";
// import Title from "../components/Title/Title";
// import Paragraph from "../components/Paragraph/Paragraph";
// import Button from "../components/Button/Button";
import {GameCard} from '../../styles/GameCard';
import { Title } from '../../styles/Title';
import {StartButton} from '../../styles/StartButton';
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import styled from 'styled-components';

const Home = () => {
    return (
        <Card>
            <Div>
            <Title>Adventure Game</Title>
            {/* <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget tortor facilisis, pellentesque nisi in, molestie justo. Fusce et leo sed nisi tristique accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P> */}
            <P>Log in to continue your adventure or sign up to get started!</P>
            </Div>
            <GameCard>
                <SignIn></SignIn>
                <Div1/>
                <SignUp></SignUp>
            </GameCard>
        </Card>
    );
};

export default Home;

const Card = styled.div`
    background: white  ;
    // text-align: center;
    width: 60%;
    margin: 0 auto;
    margin-top: 90px;
    // opacity: 0.7;
    height: 80%;
    border-radius: 10px
`;
const Div1 = styled.div`
    // width: 20%;
    // text-align: center;
    border-left: 3px solid grey;
    height: 500px;
    // position: absolute;
    left: 50%;
    margin: 0 40px;
    margin-bottom: 10px;
    // top: 0;
`;

const Div = styled.div`
    padding-top: 30px;
    text-align: center;
    // color: white;
`;

const P = styled.p`
    width: 80%;
    margin: 0 auto;
    text-shadow: 0.4px 1px;
    // color: red;
    padding: 30px;
`;