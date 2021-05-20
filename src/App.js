import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import {useDispatch, useSelector} from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice";
import {login, selectUser} from "./features/userSlice";
import Login from "./components/Login";
import {auth} from "./firebase";

function App() {
    // gets the data by selector from the data layer in here
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                // the use is logged in

                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                }))
            } else {
                // logged out
            }
        })
    }, []);

  return (
        <Router>
            {!user ? (
                <Login />
            ) : (
            <div className="app">
            <Header />
                <div className="app__body">
                    <Sidebar />
                        <Switch>
                            <Route path="/mail">
                                <Mail />
                            </Route>

                            <Route path="/">
                                <EmailList />
                            </Route>
                        </Switch>
                </div>

                {/* if it is true, it renders sendmail, if not, does not do anything*/}
                {sendMessageIsOpen && <SendMail /> }


            </div>
            )}
            </Router>

  );
}

export default App;
