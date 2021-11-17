import React from "react";
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import tableIcons from "../icons";
import "./table.css";
import fakeData from './fakeData.json';


const Ongoing = () => {
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
          data={fakeData}
          title="Event Detail's"
          actions={[
            {
              icon: ()=><Edit />,
              tooltip: 'Edit Event',
              onClick: (event, rowData) => alert("You Edited " + rowData.name)
            },
            {
              icon: ()=><DeleteOutline />,
              tooltip: 'Delete Event',
              onClick: (event, rowData) => alert("You Deleted " + rowData.name)
            },
          ]}
        />
        </div>
        
  );
};

export default Ongoing;