import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

import auth from "../../Firebaseinit";
import Loading from "../Shared/Loading/Loading";
import "./Login.css";
import Social from "./SocialLogin/Social";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handelSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://whispering-chamber-57446.herokuapp.com/login",
      { email }
    );
    console.log(data);
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    <Loading></Loading>;
  }

  let errorElement;

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  const handelReset = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else {
      toast("Please Enter a Email");
    }
  };

  return (
    <div id="form-class" className="container w-50 mx-auto mt-5">
      <h1 className="text-center" id="header-title">
        Please Login Now
      </h1>
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            ref={emailRef}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button
          className="w-50  d-block mx-auto text-center"
          id="login-btn"
          type="submit"
        >
          Login
        </Button>
        <p>{errorElement}</p>
        <p>
          New to Motor Bike?
          <Link to={"/register"} className="text-primary text-decoration-none">
            Register Now
          </Link>
        </p>
      </Form>
      <button
        onClick={handelReset}
        className="btn btn-link text-decoration-none"
      >
        Forget Password
      </button>
      <Social></Social>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
