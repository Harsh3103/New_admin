import React from 'react';
import './login.css'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function login() {
  return (
    <MDBContainer fluid className="p-3 my-5 container" >

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

        <MDBCol col='5' md='6' className='img_logo'>
          <img className='img-logo-2'  src="https://hopingminds.com/wp-content/uploads/2023/01/Asset-5.png" style={{ marginLeft:'50%', width:'200px',height:'auto',display:'flex'}}/>
        </MDBCol>

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox style={{fontSize:'20px'}} name='flexCheck' value='' id='flexCheckDefault' label='Remember me' labelStyle={{fontSize:'15px'}}/>
            <a href="!#">Forgot password?</a>
          </div>

          <button className="mb-4 w-100 btn btn-success" size="lg">Sign in</button>

         
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default login;