import React from 'react';
import "./form.css";
import Select from 'react-select';
import { DatePicker, Space, TimePicker } from 'antd';
import 'antd/dist/antd.css';

const Create = () => {
    const city = [
        {value: 'Bengaluru', label: 'Bengaluru'}
    ]
    const area = [
        { value: '560085', label: "BSK 3rd Stage"},
        { value: '560100', label: "Electronic City"}
    ]
    const volunteer = [
        {value: 'Varun', label: 'Varun'},
        {value: 'Vijay', label: 'Vijay'},
        {value: 'Arun', label: 'Arun'},
        {value: 'Divya', label: 'Divya'}
    ]
    function onChange(date, dateString) {
        console.log(date, dateString);
      }
    return (
        <div className="container">
            <div className="row">
                <div className="col-2" />
                <div className="col-8">
                    <form className="myform">
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <Select placeholder="Select City" options={city} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <Select placeholder="Select Area" options={area} />
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" id="eventName" className="form-control" placeholder="Enter Event Name"/>
                        </div>
                        <div className="form-outline mb-4">
                            <textarea className="form-control" id="eventAddress" rows="4" placeholder="Enter Full Address"></textarea>
                        </div>
                        <div className="form-outline mb-4">
                            <Select isMulti name="volunteers" className="basic-multi-select" classNamePrefix="select" 
                                placeholder="Select Volunteer" options={volunteer} />
                        </div>
                        <div className="form-outline mb-4">
                                <div className="row justify-content-between">
                                    <div className="col-4">
                                        <Space direction="vertical">
                                            <DatePicker size="large" onChange={onChange} placeholder="Event Date" />
                                        </Space>
                                    </div>
                                    <div className="col-4">
                                        <Space direction="vertical">   
                                            <TimePicker size="large" onChange={onChange} placeholder="Start Time" />
                                        </Space>
                                    </div>
                                    <div className="col-4">
                                        <Space direction="vertical">   
                                            <TimePicker size="large" onChange={onChange} placeholder="End Time" />
                                        </Space>
                                    </div>
                                </div>
                            
                        </div>
                        <div className="form-outline mb-4 fbt">
                            <button type="submit fbt" className="btn btn-primary">CREATE EVENT</button>
                        </div>
                    </form>
                </div>
                <div className="col-2" />
            </div>
        </div>
    )
}

export default Create;