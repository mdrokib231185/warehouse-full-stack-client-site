// import React from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import Social from '../SocialLogin/Social';
// import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
// import './Register.css'
// import auth from '../../../Firebaseinit';


// const Register = () => {
//   const [createUserWithEmailAndPassword, user, loading, error] =
//     useCreateUserWithEmailAndPassword(auth);

// const navigate = useNavigate()

//   const handelSubmit = event => {
//     event.preventDefault()
//     const name = event.target.name.value
//     const email = event.target.email.value
//     const password = event.target.password.value
//     console.log(name, email, password)

//     createUserWithEmailAndPassword(email, password)
//   }
//   if (user) {
//     navigate('/home')
//   }
  



//       return (
//         <div id="form-class" className="w-50 mx-auto mt-5 color-white">
//           <h1 className="text-center" id="header-title">
//             Please Register Here
//           </h1>
//           <Form onSubmit={handelSubmit}>
//             <Form.Group className="mb-3" controlId="formBasicText">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="name"
//                 placeholder="Enter Your Name"
//                 name="name"
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 name="email"
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 required
//               />
//             </Form.Group>

//             <Button
//               className="w-50  d-block mx-auto text-center"
//               id="login-btn"
//               type="submit"
//             >
//               Register now
//             </Button>
//             <p>
//               Already Register?
//               <Link to={"/login"} className="  text-decoration-none">
//                 Login Now
//               </Link>
//             </p>
//           </Form>
//           <Social></Social>
//         </div>
//       );
// };

// export default Register;