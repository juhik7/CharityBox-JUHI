import React from 'react';
import {useState} from 'react';
import "./form.css";
import Select from 'react-select';
import {Form, DatePicker, Space, TimePicker } from 'antd';
import 'antd/dist/antd.css';
import { projectFirestore } from '../../firebase';


const Create = () => {
    const [name  , setName] = useState("");
    const [address , SetAddress] = useState("");
    const [addCity , SetAddCity] = useState("");
    const [addArea , SetAddArea] = useState("");
    const [selectedValue, setSelectedValue] = useState([]);
    const city = [
        {value: 'Bengaluru', label: 'Bengaluru'}
    ]
    const area = [
        { value: 'BSK 3rd Stage', label: "BSK 3rd Stage"},
        { value: 'Electronic City', label: "Electronic City"}
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
    const handleChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
      }
    
    const sub = (e) => {
        e.preventDefault();
        console.log(e.target.volunteer.value)

        // Add data to the store
        projectFirestore.collection("events").add({
            name: name,
            address: address,
            city:e.target.city.value,
            area:e.target.area.value,
            startDate:e.target.startDate.value,
            startTime:e.target.startTime.value,
            endTime:e.target.endTime.value,
            volunteer:selectedValue

        })
        .then((docRef) => {
            alert("Data Successfully Submitted");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-2" />
                <div className="col-8">
                    <form className="myform" onSubmit={(event) => {sub(event)}}>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <Select placeholder="Select City" name="city" options={city}/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <Select placeholder="Select Area" name="area" options={area}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" required id="eventName" className="form-control" placeholder="Enter Event Name" onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div className="form-outline mb-4">
                            <textarea required className="form-control" id="eventAddress" rows="4" placeholder="Enter Full Address" onChange={(e)=>{SetAddress(e.target.value)}}></textarea>
                        </div>
                        <div className="form-outline mb-4">
                            <Select isMulti name="volunteer" id="volunteer" className="basic-multi-select" classNamePrefix="select" 
                                placeholder="Select Volunteer" options={volunteer} onChange={handleChange}/>
                        </div>
                        <div className="form-outline mb-4">
                                <div className="row justify-content-between">
                                    <div className="col-4">
                                        <Space direction="vertical">
                                            <DatePicker name="startDate" size="large" onChange={onChange} placeholder="Event Date" format="DD-MM-YYYY" />
                                        </Space>
                                    </div>
                                    <div className="col-4">
                                        <Space direction="vertical">   
                                            <TimePicker name ="startTime" size="large" onChange={onChange} placeholder="Start Time"/>
                                        </Space>
                                    </div>
                                    <div className="col-4">
                                        <Space direction="vertical">   
                                            <TimePicker name="endTime" size="large" onChange={onChange} placeholder="End Time"/>
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