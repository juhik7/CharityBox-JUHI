import React from "react";
import {
    Switch,
    Route,
    useRouteMatch,
    Redirect
  } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import Events from "./Events";
import Ngo from "./Ngo";
import Donations from "./Donations";
import NotFound from "./NotFound";
import Coupons from "./Coupons";

const AdminDash = () =>{
    let {path} = useRouteMatch();
    return (
        <>
        <AdminHeader url={path} />
        <Switch>
            <Route exact path={path}>
                <Redirect to={`${path}/events`} />
            </Route>
            <Route path={`${path}/events`}>
                <Events />
            </Route>
            <Route path={`${path}/donations`}>
                <Donations />
            </Route>
            <Route path={`${path}/ngo`}>
                <Ngo />
            </Route>
            <Route path={`${path}/coupons`}>
                <Coupons />
            </Route>
            <Route component={NotFound} />
        </Switch>
        </>
      )
};

export default AdminDash;