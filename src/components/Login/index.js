import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

import { getUrl } from "../../util/url";
import { post } from '../../util/controllers/data';
const FormPage = () => {
    const [userInfo, setUserInfo] = useState({});

    const hadleInput = e => setUserInfo({...userInfo,...{[e.target.name]: e.target.value}})
    
    const handleSubmit = async e => {
        e.preventDefault(); 
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
                <p className="h4 text-center py-4">Sign In</p>
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
                    type="password"
                    validate
                    onChange={hadleInput}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn onClick={handleSubmit} color="cyan" type="submit">
                    Sign In
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

export default FormPage;