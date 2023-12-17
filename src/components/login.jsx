//this a login component to have secure login to website.
//i have used google cloud platform for the same 
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
//google console id
const clientId = "836163887227-8stlpjaauf1m1r08rulnolnlgbobub0s.apps.googleusercontent.com";

function Login() {
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(false);

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
        setLoggedIn(true); // Set login status to true
        navigate('/MainPage'); // Navigate to MainPage after successful login
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    // Check if user is already logged in
    if (isLoggedIn) {
        navigate('/MainPage'); // Redirect to MainPage if already logged in
        return null; 
    }

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={false}
            />
        </div>
    )
}

export default Login;
