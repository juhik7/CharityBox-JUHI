import React from "react";
import "./form.css";
import Select from 'react-select';
import { DatePicker, Space, InputNumber } from 'antd';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;
const Create = () => {
    const business = [
        {value: 'PESU FOOD CANTEEN', label: 'PESU FOOD CANTEEN'}
    ]
    const discount = [
        {value: '10', label: '10%'},
        {value: '20', label: '20%'},
        {value: '30', label: '30%'},
        {value: '40', label: '40%'},
        {value: '50', label: '50%'},
        {value: '60', label: '60%'}
    ]
    const mov = [
        {value: '100', label: '₹ 100'},
        {value: '150', label: '₹ 150'},
        {value: '200', label: '₹ 200'},
        {value: '250', label: '₹ 250'},
        {value: '300', label: '₹ 300'},
        {value: '400', label: '₹ 400'},
        {value: '500', label: '₹ 500'},
        {value: '600', label: '₹ 600'},
        {value: '700', label: '₹ 700'},
        {value: '800', label: '₹ 800'}
    ]
    const maxDisc = [
        {value: '50', label: '₹ 50'},
        {value: '75', label: '₹ 75'},
        {value: '100', label: '₹ 100'},
        {value: '125', label: '₹ 120'},
        {value: '150', label: '₹ 150'},
        {value: '200', label: '₹ 200'},
        {value: '250', label: '₹ 250'},
        {value: '300', label: '₹ 300'},
        {value: '400', label: '₹ 400'},
        {value: '500', label: '₹ 500'}
    ]

    function inputChange(value) {
        console.log('changed', value);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-2" />
                <div className="col-8">
                    <form className="myform">
                        <div className="form-outline mb-4">
                            <input type="text" id="couponName" className="form-control" placeholder="Enter Coupon Name"/>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <Select placeholder="Select Business" options={business} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <Select placeholder="Select Discount" options={discount} />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <Select placeholder="Minimum Order Value" options={mov} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <Select placeholder="Maximum Discount" options={maxDisc} />
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" id="couponPrefix" className="form-control" placeholder="Enter Coupon Prefix"/>
                        </div>
                        <div className="form-outline mb-4">
                            <div className="row justify-content-evenly">
                                <div className="col-6">
                                    <Space direction="vertical">
                                        <RangePicker size="large" placeholder={["Valid From","Valid Upto"]}/>
                                    </Space>
                                </div>
                                <div className="col-4">
                                    <InputNumber size="large" min={50} max={1000} placeholder="Points Required"  style={{ width: 150 }} onChange={inputChange} />
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