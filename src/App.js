import React, {useState} from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BlogPosts from "./pages/BlogPosts";
import BlogPage from "./pages/BlogPage";
import {
    NavLink,
    Switch,
    Route
} from "react-router-dom";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs">Blogs</NavLink>
                    </li>
                    {/*<li>*/}
                    {/*    <NavLink to="/blog/:id">Blog pagina</NavLink>*/}
                    {/*</li>*/}
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/"><HomePage/></Route>
                <Route path="/login"><LoginPage/></Route>
                <Route path="/blogs"><BlogPosts/></Route>
                <Route path="/blog/:id"><BlogPage/></Route>
            </Switch>
        </>
    );
}

export default App
