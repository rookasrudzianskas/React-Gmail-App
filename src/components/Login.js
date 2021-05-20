import React from 'react';
import "./styles/Login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from "../firebase";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import {login} from "../features/userSlice";





const Login = () => {

    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
            }))
        }).catch(error => alert(error));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt=""/>
                <Button onClick={signIn}>LOGIN</Button>
            </div>
        </div>
    );
};

export default Login;
