import React, { useState } from 'react';
import { create, login } from '../utils/userService.js';
import UserForm from '../components/UserForm';

const UserReg = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [hasUser, setHasUser] = useState(false);
    const [signedInMsg, setSignedInMsg] = useState('');

    // Sends user data to login and sets message if signed in
    const signInUser = async () => {
        if ( userData ) {
            const cred = userData;
            const {data, error} = await login(cred);
            if (error) {
                setError(error.statuscode);
            } else {
                setSignedInMsg(`Signed in as ${data[0].email}`);
            }
        } else {
            setError('No user data');
        }
    };

    // Sends input data to create and sets message if created
    const createNewUser = async () => {
        if ( userData ) {
            const data = [ userData ];
            const {statusText, error} = await create(data);
            if (error) {
                setError(error.statuscode);
            } else {
                setSignedInMsg(`${statusText}`);
            }
        } else {
            setError('No user data');
        }
    };

    return (
        <section>
            {error && <p>{error}</p>}
                <UserForm 
                heading={hasUser === true ? 'Sign in' : 'Create user'} 
                submitUser={hasUser === true ? signInUser : createNewUser} 
                userData={userData} 
                setUserData={setUserData}
                setHasUser={setHasUser}
                hasUser={hasUser}
                toggleForm={hasUser === true ? 'Create an account' : 'Already have an account?'}
                signedInMsg={signedInMsg} />
        </section>
    );
};

export default UserReg;