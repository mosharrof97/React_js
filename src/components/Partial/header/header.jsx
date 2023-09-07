import React from 'react'
import { NavLink } from 'react-router-dom';
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";



function MainHeader() {
    return (
        <section>
            <div className='container-fluid d-flex justify-content-between border-bottom '>

                <div >
                    <ul className='list-style  ' >
                        <li className="list-item-style"><i><BsFacebook /></i></li>
                        <li className="list-item-style"><i><BsInstagram /></i>  </li>
                        <li className="list-item-style"><i><BsYoutube /></i></li>

                    </ul>
                </div>
                <div>
                    <ul className=' list-style'>
                        <li className="list-item-style"><i><BsFillTelephoneFill /> </i> <span>+880 1774656830</span></li>
                        <li className="list-item-style"><i><BsFillTelephoneFill /></i> <span>+880 1774656830</span> </li>
                        <li className="list-item-style"><i><BiMailSend /></i>  <span> mhosain673@gmail.com</span></li>

                    </ul>
                </div>
            </div>
            <div>
                <Navbar collapseOnSelect expand="lg" className=" p-3 bg-light sticky-top" >
                    <Container fluid>
                        {/* <Navbar.Brand href="#home"><img src="./assets/img/logo.png" alt="Mosharrof" srcset="" /></Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                            <Nav className="" >
                                <NavLink to="/" className="nav-item" >Home</NavLink>
                                <NavLink to="State" className="nav-item" >State</NavLink>
                                <NavLink to="States" className="nav-item" >States</NavLink>
                                <NavLink to="State1" className="nav-item" >State1</NavLink>
                                <NavLink to="UsestateHook" className="nav-item" >UsestateHook</NavLink>
                                <NavLink to="Update_State" className="nav-item" >Update State</NavLink>
                                <NavLink to="Event_Bubbling" className="nav-item" >Event Bubbling</NavLink>
                                <NavLink to="Product" className="nav-item" >Product</NavLink>

                                <NavDropdown title="Page" id="nav-dropdown">
                                    <div className='d-flex'>
                                        <div style={{ backgroundColor:" #f7f7f7", padding: "10px", margin: "10px"}}>
                                            <NavDropdown.Item href="Form">Form</NavDropdown.Item>
                                            <NavDropdown.Item href="Todo">Todo</NavDropdown.Item>
                                            <NavDropdown.Item href="todo1">todo1</NavDropdown.Item>
                                            <NavDropdown.Item href="formik">Formik</NavDropdown.Item>
                                            <NavDropdown.Item href="Formik2">Formik2</NavDropdown.Item>
                                            <NavDropdown.Item href="Formik3">Formik3</NavDropdown.Item>
                                            <NavDropdown.Item href="yup">yup</NavDropdown.Item>
                                            <NavDropdown.Item href="toggle">Toggle</NavDropdown.Item>
                                            <NavDropdown.Item href="Form">Form</NavDropdown.Item>
                                            <NavDropdown.Item href="Todo">Todo</NavDropdown.Item>
                                            <NavDropdown.Item href="todo1">todo1</NavDropdown.Item>
                                            <NavDropdown.Item href="formik">Formik</NavDropdown.Item>
                                        </div>
                                        <div style={{ backgroundColor:" #f7f7f7", padding: "10px", margin: "10px"}}>
                                            <NavDropdown.Item href="Formik2">Formik2</NavDropdown.Item>
                                            <NavDropdown.Item href="Formik3">Formik3</NavDropdown.Item>
                                            <NavDropdown.Item href="yup">yup</NavDropdown.Item>
                                            <NavDropdown.Item href="toggle">Toggle</NavDropdown.Item>
                                            <NavDropdown.Item href="FAQ">FAQ</NavDropdown.Item>
                                            <NavDropdown.Item href="Assainment3">Assainment3</NavDropdown.Item>
                                            <NavDropdown.Item href="UseEffect">UseEffect</NavDropdown.Item>
                                            <NavDropdown.Item href="UseEffect2">UseEffect2</NavDropdown.Item>
                                            <NavDropdown.Item href="FetcingData">FetcingData</NavDropdown.Item>
                                            <NavDropdown.Item href="DataFatch">DataFatch</NavDropdown.Item>
                                            <NavDropdown.Item href="ToastMassege">ToastMassege</NavDropdown.Item>
                                        </div>
                                    </div>


                                </NavDropdown>

                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Page
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="Form">Form</Dropdown.Item>
                                        <Dropdown.Item href="Todo">Todo</Dropdown.Item>
                                        <Dropdown.Item href="todo1">todo1</Dropdown.Item>
                                        <Dropdown.Item href="formik">Formik</Dropdown.Item>
                                        <Dropdown.Item href="Formik2">Formik2</Dropdown.Item>
                                        <Dropdown.Item href="Formik3">Formik3</Dropdown.Item>
                                        <Dropdown.Item href="yup">yup</Dropdown.Item>
                                        <Dropdown.Item href="toggle">Toggle</Dropdown.Item>
                                        <Dropdown.Item href="FAQ">FAQ</Dropdown.Item>
                                        <Dropdown.Item href="Assainment3">Assainment3</Dropdown.Item>
                                        <Dropdown.Item href="UseEffect">UseEffect</Dropdown.Item>
                                        <Dropdown.Item href="UseEffect2">UseEffect2</Dropdown.Item>
                                        <Dropdown.Item href="FetcingData">FetcingData</Dropdown.Item>
                                        <Dropdown.Item href="DataFatch">DataFatch</Dropdown.Item>
                                        <Dropdown.Item href="ToastMassege">ToastMassege</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </section>

    );
}

export default MainHeader;