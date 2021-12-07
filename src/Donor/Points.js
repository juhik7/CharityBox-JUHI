import React, { useState, useEffect, useRef } from "react";
import { projectFirestore } from '../firebase';

const Points = () => {
    const email = sessionStorage.getItem("email");
    //couponsTable
    const [loader, setLoader] = useState(true)
    let businessRef = useRef();
    let quantityRef = useRef();
    const red = projectFirestore.collection("coupons")
    const [coupons, setCoupons] = useState([])
    function getCoupons() {
        red.onSnapshot((querySnapshot) => {
            const coupon = []
            querySnapshot.forEach((doc) => {
                coupon.push(doc.data())
            })
            setCoupons(coupon)
        })
        setLoader(false)
        console.log('Inside Get Data', loader)
    }
    //userTable
    const user1 = projectFirestore.collection("users")
    console.log('Usersssssss:', user1);
    const [user, setUser] = useState([])
    const [loader1, setLoader1] = useState(true)
    function getUser() {
        user1.where('email', '==', email).onSnapshot((querySnapshot) => {
            const userss = []
            querySnapshot.forEach((doc) => {
                userss.push(doc.data())
            })
            setUser(userss)
            setLoader1(false)
        })
    }


    useEffect(() => {
        getCoupons()
        console.log('hg', coupons);
        getUser()

    }, [])



    return (
        <div>
            <h2>{sessionStorage.getItem("email")}</h2>
            {loader === false && (user.map((user) =>
                        <div key={user}>
                            <h2>{user.points}</h2>
                        </div>
                    ))}
            {loader === false && (coupons.map((coupons) =>
                <div key={coupons}>
                    <label>Name</label>
                    <input type="text" value={coupons.business} ref={businessRef} disabled /><br />

                    <label>Min Points Required</label>
                    <input type="text" value={coupons.points} ref={quantityRef} disabled />

                </div>
            ))}
        </div>
    )
}

export default Points;