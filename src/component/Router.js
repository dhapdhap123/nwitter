import React, { useState } from "react";
import { HashRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Profile from "route/Profile";
import Auth from "../route/Auth";
import Home from "../route/Home";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                <>
                    <Route exact path="/" element={<Home userObj={userObj}/>}>
                    </Route>
                    <Route exact path="/profile" element={<Profile />}>
                    </Route>
                </>
                ) : (
                <Route exact path="/" element={<Auth />}>
                </Route>
                )}
            </Routes>
        </Router>
    )
}

export default AppRouter;