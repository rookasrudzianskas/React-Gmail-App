import React, {useState} from 'react';
import "./styles/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {logout, selectUser} from "../features/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../firebase";

const Header = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
        dispatch(logout());
        })
    };

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRceIIBz4GgeNszaN5SupI6p1SJE_Bzgk3Q&usqp=CAU" alt="gmail log"/>
            </div>

            <div className="header__middle">
                    <SearchIcon />

                <input type="text" placeholder="Search mail"/>
                    <ArrowDropDownIcon className="header__inputCaret" />
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>

                    <Avatar onClick={signOut} src={user?.photoURL}/>
            </div>
        </div>
    );
};

export default Header;
