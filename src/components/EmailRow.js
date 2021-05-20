import React from 'react';
import "./styles/EmailRow.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import {Checkbox, IconButton} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {selectedMail} from "../features/mailSlice";
import {useDispatch} from "react-redux";

const EmailRow = ({ id, title, subject, description, time }) => {
    console.log(id, title, subject, description, time)
    const history = useHistory();
    const dispatch = useDispatch()

    const openMail = () => {
        dispatch(
            selectedMail({
                   id, title, subject, description, time
            })
        );
        history.push('/mail');
    };

    return (
        <div onClick={openMail} className="emailRow">

            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <h3 className="emailRow__title">{title}</h3>
            <div className="emailRow__message">
                <h4>
                    {subject}{" "}
                    <span className="emailRow__description">{description}</span>
                </h4>
            </div>
            <p className="emailRow_time">{time}</p>
        </div>
    );
};

export default EmailRow;
