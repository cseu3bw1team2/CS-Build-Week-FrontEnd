import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

import { getUrl } from "../../util/url";
import { post } from '../../util/controllers/data';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({});

    const hadleInput = e => setUserInfo({...userInfo,...{[e.target.name]: e.target.value}})

    const handleSubmit = async e => {
        e.preventDefault(); 

        if(userInfo.password1 !== userInfo.password2) {
            alert('Both passwords must be equal');
            const resetPwd = { password1:"", password2: "" };
            setUserInfo({...userInfo, ...{ resetPwd }});
            return;
        }
        try {
            const url = getUrl('SIGN_IN');
            const res = await post(url, userInfo);
            window.sessionStorage.setItem('token',res.key);
            console.log(res)
            // route to the main page
            
        } catch(e){
            // TODO: Handle error using some notification system.
            alert('Error: '+e.message);
        }
    }
  
    return (
    <MDBContainer >
      <MDBRow >
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Username"
                    icon="user"
                    group
                    name="username"
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={hadleInput}
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    name="password1"
                    type="password"
                    validate
                    onChange={hadleInput}
                  />
                  <MDBInput
                    label="Confirm password"
                    icon="lock"
                    name="password2"
                    group
                    type="password"
                    validate
                    onChange={hadleInput}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn onClick={handleSubmit} color="cyan" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignUp;