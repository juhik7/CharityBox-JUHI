import React from "react";
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import tableIcons from "../icons";
import "./table.css";
import fakeData from './fakeData.json';

const Total =()=>{
      return(
        <div className="myTable" style={{maxWidth: "85%"}}>
          <MaterialTable
          icons={tableIcons}
            columns={[
              { title: 'Name', field: 'name' },
              { title: 'Event', field: 'event' },
              { title: 'Clothes Donated', field: 'donated',type: 'numeric'},
              { title: 'Reward Points', field: 'points',type: 'numeric'},
              { title: 'Verified By', field: 'volunteer'},
              { title: 'Donated On', field: 'date'}
            ]}
            data={fakeData}
            title="Donations Detail's"
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
}

export default Total;