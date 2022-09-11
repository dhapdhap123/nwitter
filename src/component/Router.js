import { HashRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Profile from "route/Profile";
import Auth from "../route/Auth";
import Home from "../route/Home";
import Navigation from "./Navigation";

const AppRouter = ({ newName, refreshUser, isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Routes>
                {isLoggedIn ? (
                <>
                    <Route exact path="/" element={<Home userObj={userObj}/>}>
                    </Route>
                    <Route exact path="/profile" element={<Profile userObj={userObj} refreshUser={refreshUser}/>}>
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