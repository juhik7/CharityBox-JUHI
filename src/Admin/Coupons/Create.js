import React from "react";
import { useState } from 'react';
import "./form.css";
import Select from 'react-select';
import { DatePicker, Space, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import { projectFirestore } from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Create = () => {
    const [name, setName] = useState("");
    const [prefix, SetPrefix] = useState("");
    const business = [
        { value: 'PESU FOOD CANTEEN', label: 'PESU FOOD CANTEEN' }
    ]
    const discount = [
        { value: '10', label: '10%' },
        { value: '20', label: '20%' },
        { value: '30', label: '30%' },
        { value: '40', label: '40%' },
        { value: '50', label: '50%' },
        { value: '60', label: '60%' }
    ]
    const mov = [
        { value: '100', label: '₹ 100' },
        { value: '150', label: '₹ 150' },
        { value: '200', label: '₹ 200' },
        { value: '250', label: '₹ 250' },
        { value: '300', label: '₹ 300' },
        { value: '400', label: '₹ 400' },
        { value: '500', label: '₹ 500' },
        { value: '600', label: '₹ 600' },
        { value: '700', label: '₹ 700' },
        { value: '800', label: '₹ 800' }
    ]
    const maxDisc = [
        { value: '50', label: '₹ 50' },
        { value: '75', label: '₹ 75' },
        { value: '100', label: '₹ 100' },
        { value: '125', label: '₹ 120' },
        { value: '150', label: '₹ 150' },
        { value: '200', label: '₹ 200' },
        { value: '250', label: '₹ 250' },
        { value: '300', label: '₹ 300' },
        { value: '400', label: '₹ 400' },
        { value: '500', label: '₹ 500' }
    ]

    function inputChange(value) {
        console.log('changed', value);
    }
    const sub = (e) => {
        e.preventDefault();
        // Add data to the store
        projectFirestore.collection("coupons").add({
            name: name,
            prefix: prefix,
            business: e.target.business.value,
            discount: e.target.discount.value,
            min_ord_val: e.target.mov.value,
            max_disc: e.target.max_disc.value,
            valid_from: e.target.validFrom.value,
            valid_upto: e.target.validUpto.value,
            points: e.target.points.value,

        })
            .then((docRef) => {
                toast.success('COUPOND ADDED SUCCESSFULLY!!!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch((error) => {
                toast.error(error, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            });
    }
    return (
        <div className="container">
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
            />
            <div className="row">
                <div className="col-2" />
                <div className="col-8">
                    <form className="myform" onSubmit={(event) => { sub(event) }}>
                        <div className="form-outline mb-4">
                            <input type="text" id="couponName" className="form-control" placeholder="Enter Coupon Name" onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <Select placeholder="Select Business" name="business" options={business} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <Select placeholder="Select Discount" name="discount" options={discount} />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <Select placeholder="Minimum Order Value" name="mov" options={mov} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <Select placeholder="Maximum Discount" name="max_disc" options={maxDisc} />
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" id="couponPrefix" className="form-control" placeholder="Enter Coupon Prefix" onChange={(e) => { SetPrefix(e.target.value) }} />
                        </div>
                        <div className="form-outline mb-4">
                            <div className="row justify-content-between">
                                <div className="col-4">
                                    <Space direction="vertical">
                                        <DatePicker name="validFrom" size="large" placeholder="Valid From" format="DD-MM-YYYY" />
                                    </Space>
                                </div>
                                <div className="col-4">
                                    <Space direction="vertical">
                                        <DatePicker name="validUpto" size="large" placeholder="Valid Upto" format="DD-MM-YYYY" />
                                    </Space>
                                </div>
                                <div className="col-4">
                                    <InputNumber size="large" name="points" min={50} max={1000} placeholder="Points Required" style={{ width: 150 }} onChange={inputChange} />
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-4 fbt">
                            <button type="submit fbt" className="btn btn-primary">CREATE COUPON</button>
                        </div>
                    </form>
                </div>
                <div className="col-2" />
            </div>
        </div>
    )
}

export default Create;