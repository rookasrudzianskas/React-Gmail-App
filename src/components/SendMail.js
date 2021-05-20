import React from 'react';
import "./styles/SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
// const { ref, ...rest } = register('value_name')

import { useDispatch } from "react-redux";
// import { closeSendMessage } from "./features/mailSlice";

const SendMail = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
    // dat ais what comes back to the function
        console.log(data);
    }
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon  className="sendMail__close"/>
            </div>
            {/* handleSubmit, is what the forms library provides, but we have to call it using onSubmit, oour function*/}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*ref={register({ required: true })}  this registers the input is somewhere and makes it required*/}
                {/* connected to the forms*/}
                <input name="to" placeholder="To" type="text" ref={register({ required: true })}/>
                {/* if there are errors render this tag*/}
                {errors.to && <p className="sendMail__error">To is required !!</p>}

                <input name="subject" placeholder="Subject" type="text" ref={register({ required: true })} />
                {/* subject error */}
                {errors.subject && (
                    <p className="sendMail__error">Subject is required !!</p>
                )}

                <input name="message" placeholder="Message" type="text" className="sendMail__message" ref={register({ required: true })}/>
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
