import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebaseinit';
import './Headers.css'

const Headers = () => {
  const [user] = useAuthState(auth)

  const handelSignOut = () => {
    signOut(auth)
  }
      return (
        <>
          <Navbar
            sticky="top"
            collapseOnSelect
            expand="lg"
            className="header-color"
            variant="dark"
          >
            <Navbar as={Link} to="home" className="header">
              MOTOR BIKE
            </Navbar>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="home">
                  Home
                </Nav.Link>

                <Nav.Link as={Link} to="about">
                  Blog
                </Nav.Link>
              </Nav>
              <Nav>
                {user ? (
                  
                    <div className="all-btn">
                      <Nav.Link as={Link} to="manageItemss">
                        Manage Items
                      </Nav.Link>
                      
                      <Nav.Link as={Link} to="addItems">
                        Add Items
                      </Nav.Link>
                      <Nav.Link as={Link} to="myItems">
                        My Items
                      </Nav.Link>

                      <h3 onClick={handelSignOut} className=" btn-signOut">
                        Sign Out
                      </h3>
                    </div>
                  
                ) : (
                  <Nav.Link as={Link} to="login">
                    Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
      );
};

export default Headers;