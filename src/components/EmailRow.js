import React from 'react';
import "./styles/EmailRow.css";
import {CheckBox, LabelImportantOutlined, StarBorderOutlined} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

const EmailRow = ({ id, title, subject, description, time }) => {
    return (
        <div className="emailRow">

            <div className="emailRow__options">
                <CheckBox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>

                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>

            <div className="emailRow__title">

            </div>

            <div className="emailRow__message">

            </div>

            <div className="emailRow__description">

            </div>

        </div>
    );
};

export default EmailRow;
