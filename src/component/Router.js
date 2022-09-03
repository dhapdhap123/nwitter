import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../route/Auth";
import Home from "../route/Home";

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                <>
                    <Route exact path="/" element={<Home />}>
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