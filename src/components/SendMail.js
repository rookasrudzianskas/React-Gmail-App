import React from 'react';
import "./styles/SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { closeSendMessage } from "./features/mailSlice";

const SendMail = () => {
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon  className="sendMail__close"/>
            </div>

            <form action="">
                {/*ref={register({ required: true })}  this registers the input is somewhere and makes it required*/}
                {/* connected to the forms*/}
                <input name="to" placeholder="To" type="text" ref={register({ required: true })}/>
                <input name="subject" placeholder="Subject" type="text" ref={register({ required: true })} />
                <input name="message" placeholder="Message" type="text" className="sendMail__message" ref={register({ required: true })}/>

                <div className="sendMail__options">
                    <Button variant="contained" color="primary" type="submit" className="sendMail__send">Send</Button>
                </div>
            </form>
        </div>
    );
};

export default SendMail;
