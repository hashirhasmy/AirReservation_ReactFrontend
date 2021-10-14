import React, { Component } from 'react';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class GoogleFacebook extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="App">
        <h1>LOGIN WITH <i class="fa fa-facebook-official" aria-hidden="true"></i> AND <i class="fa fa-google" aria-hidden="true"></i></h1>
        <hr className="divider light my-4" />
      <FacebookLogin
        appId="309920220016490" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />


      <GoogleLogin
        clientId="262497595819-7r35ccuv0nr9mra10lilq841oob01ai1.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}

export default GoogleFacebook;