import React from 'react';
import './Social.css'
import google from './../../../images/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebaseinit';
import { useNavigate } from 'react-router-dom';

const Social = () => {
  const navigate = useNavigate()
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (user) {
    navigate('/home')
  }
      return (
        <div>
          <div className="d-flex align-items-center">
            <div style={{ height: "1.5px" }} className="bg-dark w-50"></div>
            <p className="mt-2 px-2">or</p>
            <div style={{ height: "1.5px" }} className="bg-dark w-50"></div>
          </div>
          

          <button
            onClick={()=>signInWithGoogle ()}
            
            className="btn-bg w-50 mx-auto d-block text-center"
          >
            <img src={google} alt="" />
            <span className="px-2">Google Sign in</span>
          </button>
        </div>
      );
};

export default Social;