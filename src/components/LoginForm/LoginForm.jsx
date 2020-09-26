import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm() {

    //variables
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",  
    });
    const history = useHistory();


    //methods
    const handleChange = (e) => {
        const {id, value} = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials, 
            [id]: value,
        }));
    };

    const postData = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}api-token-auth/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
            }
            );
        return response.json();
    };


    // const handleSubmit = e => {
    //     e.preventDefault();
    //     if(credentials.username && credentials.password) {
    //     fetch(`${process.env.REACT_APP_API_URL}api-token-auth/`, {
    //     method: "post",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(credentials),
    //     }).then((response) => {
    //     console.log(response.json());
    //     });
    //     }
    // };


    // const postData = async () => {
    //     const response = await fetch(`${process.env.REACT_APP_API_URL}api-token-auth/`, {
    //         method: "post",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(credentials),
    //         }
    //         );
    //     return response.json();
    // };


    const handleSubmit = (e) => {
        e.preventDefault();
        if(credentials.username && credentials.password) {
        postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        history.push("/");
        // console.log(response);
        });
        }
    };


    //template
    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                type="text" 
                id="username" 
                placeholder="Enter username"
                onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                type="password" 
                id="password" 
                placeholder="Enter password"
                onChange={handleChange}  
                />
                </div>
                <button type="submit" onClick={handleSubmit}>
                Login
                </button>
        </form>
    );
}



export default LoginForm;

