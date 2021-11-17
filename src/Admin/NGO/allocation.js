import React from "react";
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
import tableIcons from "../icons";
import fakeData from './fakeData2.json';
import "./table.css";

const Allocation = () =>{
      return(
        <div className="myTable" style={{maxWidth: "85%"}}>
          <MaterialTable
          icons={tableIcons}
            columns={[
              { title: 'Name', field: 'name' },
              { title: 'E-Mail', field: 'email'},
              { title: 'Clothes Requested', field: 'requested', type: 'numeric'},
              { title: 'Clothes Received', field: 'received', type: 'numeric'},
              { title: 'Pending Request', field: 'pending', type: 'numeric'}
            ]}
            data={fakeData}
            title="Clothe's Allocation"
          />
          </div>
          
    );
}

export default Allocation;