
import { GoogleLogin } from 'react-google-login';
import React, { Component } from 'react';

class Google extends Component {

    
          responseGoogle=(response)=>{
              console.log(response);
              console.log(response.profileObj);
          }
          

    render() {
        return(
            <div>
                <GoogleLogin
                clientId="262497595819-7r35ccuv0nr9mra10lilq841oob01ai1.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            </div>
        )


    }


// function Google(){
//     return(
//        <div className = "App">
           
//            <GoogleLogin
//                 clientId="262497595819-7r35ccuv0nr9mra10lilq841oob01ai1.apps.googleusercontent.com"
//                 buttonText="Login"
//                 onSuccess={responseGoogle}
//                 onFailure={responseGoogle}
//                 cookiePolicy={'single_host_origin'}
//             />,
            
//        </div>
//     );
// }

}

export default Google;