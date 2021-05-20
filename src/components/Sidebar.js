import React from 'react';
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import "./styles/Sidebar.css";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Button  startIcon={<AddIcon fontSize="large" />}
                     className="sidebar__compose" >Compose</Button>

            <SidebarOption Icon={InboxIcon} title="inbox" number={54} />
        </div>
    );
};

export default Sidebar;
