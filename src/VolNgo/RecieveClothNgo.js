import React from "react";
import MaterialTable from 'material-table';
import { projectFirestore } from '../firebase';
import tableIcons from "./icon";
import { useEffect, useState } from "react";
import { Button, Card } from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import {BsCheckLg} from "react-icons/bs";

const Fulfilled2 = () => {
    const [info, setInfo] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        if (load) {
            Fetchdata();
        }
    }, []);
   
 const Fetchdata = () => {
        projectFirestore.collection("fulfilledRequests").get().then((querySnapshot) => {
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
        <h2>HISTORY
            </h2>
            </center>
{
    info.map((data) => (
        <Frame Date={data.date}
        Disbursed={data.disbursed}
        Name={data.name}/>
        
    ))
    }
</div>
    );
    
}

const Frame = ({Date ,Disbursed , Name})=>{
    console.log(Date + " " + Name + " " + Disbursed);
    return(
        
            <div className="div">
            <center>
            <Row><Col>
          <Card style={{ width: '18rem' }}>
           
            <Card.Body>
              <Card.Title>  {Name} </Card.Title>
              <Card.Text>
              <p>date : {Date}</p>
              <p>disbursed: {Disbursed}</p>
             <p>name : {Name}</p>
            
             
              </Card.Text>
              <Button variant="primary" >received<BsCheckLg/></Button>
            </Card.Body>
          </Card>
      </Col>
      </Row>
      </center>

</div>
    );
}
export default Fulfilled2;
