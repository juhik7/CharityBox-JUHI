import React from "react";
//import "./form.css";
import Select from 'react-select';
import { DatePicker, Space, InputNumber } from 'antd';
import 'antd/dist/antd.css';


const { RangePicker } = DatePicker;
const Create = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2" />
                <div className="col-8">
                    <h1 align="center">PROFILE</h1>
                    <form className="myform">

                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <label>First Name</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <input type="text" placeholder="Atishay" />
                                </div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <label>Middle Name</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <input type="text" placeholder="" />
                                </div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <label>Last Name</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <input type="text" placeholder="Jain" />
                                </div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <label>Mobile No</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <input type="text" placeholder="9680122333" />
                                </div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <label>E-Mail</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <input type="email" placeholder="atishayjain@gmail.com" />
                                </div>
                            </div>
                        </div>
                        <button style={{minWidth:"100%"}}>Submit</button>

                    </form>
                </div>
                <div className="col-2" />
            </div>
        </div>
    )
}

export default Create;