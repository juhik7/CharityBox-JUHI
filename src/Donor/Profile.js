import React, { useState, useEffect,useRef } from "react";
//import "./form.css";
import Select from 'react-select';
import { DatePicker, Space, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import { projectFirestore } from '../firebase';
import '../App.css';



const { RangePicker } = DatePicker;
const Create = () => {
    let nameRef=useRef();
    //user Info
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
        console.log('ss',user);

    }, [])

    const handleSubmit = (e) => {

        projectFirestore.where('email', '==', email).collection('users').add({
          name: nameRef.current.value,
          //email:email,
        })
          .then(() => {
            alert('Added');
          })
          .catch((error) => {
            alert(error.message);
          })
        
        ;
      }

    return (
        <div className="container">
            <div className="row">
                <div className="col-2" />
                <div className="col-8">
                    <h1 align="center">PROFILE</h1>
                    <form className="myform">
                        {/* INFO */}
                    {loader === false && (user.map((user) =>
                        <div key={user}>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline ">
                                    <label >First Name</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <input type="text" ref={nameRef} placeholder={user.name} className="form-control" />
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
                                    <input type="email" placeholder={user.email} />
                                </div>
                            </div>
                        </div>
                        <button style={{minWidth:"100%"}} onClick={handleSubmit}>EDIT</button>
                       {/* END */}
                        </div>
                    ))}
                    {/* END1 */}
                    </form>
                </div>
                <div className="col-2" />
            </div>
        </div>
    )
}

export default Create;