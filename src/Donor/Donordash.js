import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import Navbar from "./Navbar";
import Event from "./Event";
import Points from "./Points";
import Profile from "./Profile"
import NotFound from "./NotFound";
import History from "./History";
import Registration from "./registration";
import '../App.css'
import { projectFirestore } from '../firebase';


const DonorDash = () => {
    let { path } = useRouteMatch();
    //User Name
    //userInfo
    const email = sessionStorage.getItem("email");
    const user1 = projectFirestore.collection("users")
    console.log('Usersssssss:', user1);
    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(true)
    function getUser() {
        user1.where('email', '==', email).onSnapshot((querySnapshot) => {
            const userss = []
            querySnapshot.forEach((doc) => {
                userss.push(doc.data())
            })
            setUser(userss)
            setLoader(false)
        })
    }

    useEffect(() => {

        getUser()
        console.log(user);

    }, [])


    //End


    return (
        <>
            <Navbar url={path} />
            <Switch>
                <Route exact path={"/donor"}>
                    <h2>WELCOME TO CHARITY BOX</h2>
                    {/* get name also */}

                    {loader === false && (user.map((user) =>
                        <div key={user}>
                            <h2>{user.name}</h2>
                        </div>
                    ))}
                    <h2>{sessionStorage.getItem("email")}</h2>

                </Route>

                <Route path={`${path}/Event`}>
                    <Event />
                </Route>
                <Route path={`${path}/Points`}>
                    <Points />
                </Route>
                <Route path={`${path}/History`}>
                    <History />
                </Route>
                <Route path={`${path}/Registration`}>
                    <Registration />
                </Route>
                <Route path={`${path}/Profile`}>
                    <Profile />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </>
    )
};

export default DonorDash;