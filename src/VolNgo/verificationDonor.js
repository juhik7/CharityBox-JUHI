import React from "react";
import MaterialTable from 'material-table';
import { projectFirestore } from '../firebase';
import tableIcons from "./icon";
import { useEffect, useState } from "react";
import { Button, Card } from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import {BsCheckLg} from "react-icons/bs";

const Fulfilled = () => {
    const [info, setInfo] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        if (load) {
            Fetchdata();
        }
    }, []);
   
 const Fetchdata = () => {
        projectFirestore.collection("verifiedDonations").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
               // var id = element.id;
                var data = element.data();
               // data.id = id;
                setInfo(arr => [...arr, data]);
                //setLoad(false);
            });
        })
 } 
 //if(0==0){
   // Fetchdata();
//};
    return (
<div>
    <center>
        <h2>verification detail
            </h2>
            </center>
{
    info.map((data) => (
        <Frame Date={data.date}
        Donated={data.donated}
        Name={data.name}/>
        
    ))
    }
</div>
    );
    
}

const Frame = ({Date ,Donated , Name})=>{
    console.log(Date + " " + Name + " " + Donated);
    return(
        <div className="div">
          <center>
            <Row><Col>
          <Card style={{ width: '18rem' }}>
           
            <Card.Body>
              <Card.Title>verification</Card.Title>
              <Card.Text>
              <p>date : {Date}</p>
             <p>donated: {Donated}</p>
             <p>name : {Name}</p>
             
              </Card.Text>
              <Button variant="primary" ><BsCheckLg/>verified</Button>
            </Card.Body>
          </Card>
        </Col>
        </Row></center>
</div>

        
        
    );
}
export default Fulfilled;
