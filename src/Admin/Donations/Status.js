import React from "react";
import "./status.css";
import { Progress } from 'antd';
import 'antd/dist/antd.css';

const Status =()=>{
    return(
        <div className="container">
            <div className="container myCont">
                <div className="row  myHead">
                    <div className="col-12">
                        <h3 className="alCentre">THIS MONTH</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="card p-3 text-center" style={{"width": "18rem"}}>
                            <Progress size="large" type="dashboard" format={()=> `${54}`} percent={90} />
                            <div className="card-body">
                                <h5 className="card-title">ACTIVE DONOR'S</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="card p-3 text-center" style={{"width": "18rem"}}>
                            <Progress size="large" type="dashboard" format={()=> `${540}`} percent={100} />
                            <div className="card-body">
                                <h5 className="card-title">CLOTHES RECEIVED</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="card p-3 text-center" style={{"width": "18rem"}}>
                            <Progress size="large" type="dashboard" format={()=> `${3}`} percent={60} />
                            <div className="card-body">
                                <h5 className="card-title">EVENT'S CONDUCTED</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container myCont">
                <div className="row  myHead">
                    <div className="col-12">
                        <h3 className="alCentre">PREVIOUS MONTH</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="card p-3 text-center" style={{"width": "18rem"}}>
                            <Progress size="large" type="dashboard" format={()=> `${12}`} percent={55} />
                            <div className="card-body">
                            <h5 className="card-title">ACTIVE DONOR'S</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="card p-3 text-center" style={{"width": "18rem"}}>
                            <Progress size="large" type="dashboard" format={()=> `${190}`} percent={35} />
                            <div className="card-body">
                            <h5 className="card-title">CLOTHES RECEIVED</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                    <div className="card p-3 text-center" style={{"width": "18rem"}}>
                            <Progress size="large" type="dashboard" format={()=> `${1}`} percent={10} />
                            <div className="card-body">
                                <h5 className="card-title">EVENT'S CONDUCTED</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Status;