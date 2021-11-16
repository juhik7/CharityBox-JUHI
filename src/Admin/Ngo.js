import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./events.css";
import { Link,useRouteMatch,Switch,Route,Redirect } from "react-router-dom";
import NotFound from "./NotFound";
import AllNgo from "./NGO/allNgo";
import Requests from "./NGO/requests";
import Allocation from "./NGO/allocation";


const Ngo = () => {
    let {path,url} = useRouteMatch();
    return(
        <div className="container-fluid full-w full-h">
            <div className="row full-h">
                <div className="col-3">
                    <div className="sidebar">
                        <h2>
                            NGO
                        </h2>
                    <button className="buttonClass" type="button">
                        <Link className="eventLink" to={`${url}/status`}>STATUS</Link>
                    </button>
                    <button className="buttonClass" type="button">
                        <Link className="eventLink" to={`${url}/pending`}>PENDING</Link>
                    </button>
                    <button className="buttonClass" type="button">
                        <Link className="eventLink" to={`${url}/allocation`}>ALLOCATION</Link>
                    </button>
                    </div>
                </div>
                <div className="col-9">
                <Switch>
                    <Route exact path={path}>
                        <Redirect to={`${path}/status`} />
                    </Route>
                    <Route path={`${path}/status`}>
                        <AllNgo />
                    </Route>
                    <Route path={`${path}/pending`}>
                        <Requests />
                    </Route>
                    <Route path={`${path}/allocation`}>
                        <Allocation />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
                </div>
            </div>
        </div>
    );
};
export default Ngo;