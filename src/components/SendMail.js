import React from 'react';
import "./styles/SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { closeSendMessage } from "./features/mailSlice";

const SendMail = () => {
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon  className="sendMail__close"/>
            </div>

            <form action="">
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>

                <div className="sendMail__options">
                    <Button>Send</Button>
                </div>
            </form>
        </div>
    );
};

export default SendMail;
