import React from 'react';
import Header from "./Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NGORegistartion = () => {
    return (
        <div>
            <Header />
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="container formMarginBot">
                <div className="row">
                    <div className="col-2" />
                    <div className="col-8">
                        <form className="myform">
                            <div className="form-outline mb-4 required-field">
                                <input type="text" required id="email" className="form-control" placeholder="Enter Name" />
                            </div>
                            <div className="form-outline mb-4 required-field">
                                <textarea required className="form-control" id="eventAddress" rows="4" placeholder="Enter Full Address"></textarea>
                            </div>
                            <div className="form-outline mb-4">
                                <div className="row justify-content-between">
                                    <div className="col-6 required-field">
                                        <input type="text" required className="form-control" id="eventAddress" placeholder="Enter Founder Name" />
                                    </div>
                                    <div className="col-6 required-field">
                                        <input type="text" required className="form-control" id="eventAddress" placeholder="Enter Founded Year" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-outline mb-4">
                                <div className="row justify-content-between">
                                    <div className="col-6 required-field">
                                        <input type="text" required id="email" className="form-control" placeholder="Enter E-Mail" />
                                    </div>
                                    <div className="col-6 required-field">
                                        <input type="text" required className="form-control" id="eventAddress" placeholder="Enter Website" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-outline mb-4 required-field">
                                <input type="text" required className="form-control" id="eventAddress" placeholder="Enter Work Area" />
                            </div>
                            <div className="form-outline mb-4">
                                <div className="row justify-content-between">
                                    <div className="col-6 required-field">
                                        <input type="password" required id="password" className="form-control" placeholder="Enter Password" />

                                    </div>
                                    <div className="col-6 required-field">
                                        <input type="password" required id="password" className="form-control" placeholder="Enter Confirm Password" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-outline mb-4 fbt">
                                <button type="submit fbt" className="btn btn-primary">REGISTER</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-2" />
                </div>
            </div>
        </div>
    )
}

export default NGORegistartion;