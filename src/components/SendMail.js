import React from 'react';
import "./styles/SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
// const { ref, ...rest } = register('value_name')
import {closeSendMessage} from "../features/mailSlice";
import { useDispatch } from "react-redux";
import db from "../firebase";
import firebase from "firebase";
// import { closeSendMessage } from "./features/mailSlice";

const SendMail = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
    // dat ais what comes back to the function
        console.log(formData);
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        dispatch(closeSendMessage())
    };

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon  onClick={() => dispatch(closeSendMessage())} className="sendMail__close"/>
            </div>
            {/* handleSubmit, is what the forms library provides, but we have to call it using onSubmit, oour function*/}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*ref={register({ required: true })}  this registers the input is somewhere and makes it required*/}
                {/* connected to the forms*/}
                <input name="to" placeholder="To" type="email" ref={register({ required: true })}/>
                {/* if there are errors render this tag*/}
                {errors.to && <p className="sendMail__error">To is required !!</p>}

                <input name="subject" placeholder="Subject" type="text" ref={register({ required: true })} />
                {/* subject error */}
                {errors.subject && (
                    <p className="sendMail__error">Subject is required !!</p>
                )}

                <input name="message" placeholder="Message" type="text" className="sendMail__message" ref={register({ required: true })}/>
                {/* if there are erros, it shows that p tag*/}
                {errors.message && (
                    <p className="sendMail__error">Message is required !!</p>
                )}

                <div className="sendMail__options">
                    <Button variant="contained" color="primary" type="submit" className="sendMail__send">Send</Button>
                </div>
            </form>
        </div>
    );
};

export default SendMail;
