import React from "react";
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
//import "./table.css";
import fakeUp from './fakeUp.json';
import { Button } from "react-bootstrap";
import tableIcons from "./icons";



const Upcoming = () => {
    return(
      <div className="myTable" style={{maxWidth: "85%"}}>
        <MaterialTable
        icons={tableIcons}
        detailPanel={rowData => {
          const volunteers = rowData.volunteer;
          const allVolunteers = volunteers.map((number) =>    <td className="mytabStyle2">{number}</td>  );
          const mycolspan = volunteers.length;
          return (
            <div className="detailPanel">
              <table className="mytabStyle">
                <tr className="mytabStyle">
                  <th className="myHeader">ADDRESS</th>
                  <td className="mytabStyle" colSpan={mycolspan}>{rowData.address}</td>
                </tr>
                <tr>
                  <th  className="myHeader">VOLUNTEER</th>
                  {allVolunteers}
                </tr>
              </table>

            </div>
          )
        }}
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'City', field: 'city' },
            { title: 'Area', field: 'area'},
            { title: 'Event Date', field: 'startDate'},
            { title: 'Start Time', field: 'startTime'},
            { title: 'End Time', field: 'endTime'},
          ]}
          data={fakeUp}
          title="Upcoming Event's"
          actions={[
            {   
                icon: ()=><Button className="Button">Donate</Button>,
                tooltip: 'Donate',
            }
          ]}
        />
        </div>
        
  );
};

export default Upcoming;