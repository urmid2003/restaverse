//this is a logout component, when user is done replying, he can logout from here
import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const clientId = "836163887227-8stlpjaauf1m1r08rulnolnlgbobub0s.apps.googleusercontent.com";

function Logout() {
    const navigate = useNavigate();
    const [isLoggedOut, setLoggedOut] = useState(false);

    const onLogoutSuccess = () => {
        console.log("LOGOUT SUCCESS!");
        setLoggedOut(true); // Set logout status to true
        navigate('/LoginPage'); // Navigate to LoginPage after successful logout
    }

    // Check if user is already logged out
    if (isLoggedOut) {
        navigate('/LoginPage'); // Redirect to LoginPage if already logged out
        return null; 
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onLogoutSuccess}
            />
        </div>
    )
}

export default Logout;

