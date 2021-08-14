import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormGroup, Form, Input, Button } from "reactstrap";
import * as yup from "yup";



const CreateAccount = () => {

    const initialState = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };
  
    const [userForm, setUserForm] = useState(initialState);
    const [user, setUser] = useState([]);
    const [errors, setErrors] = useState(initialState);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    


    // Yup Schema
  
    const schema = yup.object().shape({
      fullName: yup.string().required("Enter your full name").min(2),
      username: yup.string().required("Enter a username").min(2),
      email: yup.string().email().required("Enter an email"),
      password: yup.string().required("Enter a valid password").min(6),
    });
  
    const validateChange = (e) => {
      yup
        .reach(schema, e.target.name)
        .validate(e.target.value)
        .then((valid) => {
          setErrors({ ...errors, [e.target.name]: "" });
        })
        .catch((err) => {
          setErrors({ ...errors, [e.target.name]: err.errors[0] });
        });
    };

    // Form logic 
  
    useEffect(() => {
      console.log(
        "checking to see if all values in form state follows the rules set in schema"
      );
      schema.isValid(userForm).then((valid) => {
        console.log("is form valid?", valid);
        console.log(isButtonDisabled, user);
        setIsButtonDisabled(!valid);
      });
    }, [userForm, schema]);
  
    const handleSubmit = (e) => {
      console.log("sign up form submitted");
      e.preventDefault();
      console.log("User Form", userForm);
      
        axios.post("https://adopts-backend.herokuapp.com/app/signup", userForm)
        .then((res) => {
          console.log("res results", res.data);
          setUser(res.data);
          setUserForm(initialState);
        })
        .catch((err) => {
          console.error(err.message, err.response);
        });
      localStorage.setItem("loggedState", true);
    };
  
    const handleChange = (e) => {
      e.persist();
      validateChange(e);
      setUserForm({ ...userForm, [e.target.name]: e.target.value });
    };
  
    return (
      <>
        <Form onSubmit={handleSubmit} style={{ width: "20%", margin: "0 auto" }}>
          <FormGroup>
            <Input
              type="text"
              name="fullName"
              placeholder="Full Name"
              id="fullName"
              value={userForm.fullName}
              onChange={handleChange}
            />
            {errors.fullName.length > 0 ? (
              <p className="error">{errors.fullName}</p>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              value={userForm.username}
              onChange={handleChange}
            />
            {errors.username.length > 0 ? (
              <p className="error">{errors.username}</p>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="email"
              placeholder="Email"
              id="email"
              value={userForm.email}
              onChange={handleChange}
              required
            />
            {errors.email.length > 0 ? (
              <p className="error">{errors.email}</p>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={userForm.password}
              onChange={handleChange}
              required
            />
            {errors.password.length > 0 ? (
              <p className="error">{errors.password}</p>
            ) : null}
          </FormGroup>
  
          <Button type="submit">Sign Up</Button>
  
          <div className="signupBottom">
            <h4 className="signuph4">
              Already Signed Up? This will link to the login page
            </h4>
          </div>
        </Form>
      </>
    );
  };
  

export default CreateAccount;
  