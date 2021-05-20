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
                <input placeholder="To" type="text"/>
                <input placeholder="Subject" type="text"/>
                <input placeholder="Message" type="text" className="sendMail__message"/>

                <div className="sendMail__options">
                    <Button variant="contained" color="primary" type="submit" className="sendMail__send">Send</Button>
                </div>
            </form>
        </div>
    );
};

export default SendMail;
