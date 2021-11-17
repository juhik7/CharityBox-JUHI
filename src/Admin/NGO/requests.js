import React from "react";
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
import Check from '@material-ui/icons/Check';
import fakeData from './fakeData.json';
import tableIcons from "../icons";
import "./table.css";

const Requests = () =>{
      return(
        <div className="myTable" style={{maxWidth: "85%"}}>
          <MaterialTable
          icons={tableIcons}
          detailPanel={rowData => {
            return (
              <div className="detailPanel">
                <table className="mytabStyle">
                  <tr className="mytabStyle">
                    <th className="myHeader">ADDRESS</th>
                    <td className="mytabStyle">{rowData.address}</td>
                  </tr>
                  <tr className="mytabStyle">
                    <th  className="myHeader">AREA OF WORK</th>
                    <td className="mytabStyle">{rowData.workArea}</td>
                  </tr>
                  <tr className="mytabStyle">
                    <th  className="myHeader">WEBSITE</th>
                    <td className="mytabStyle">{rowData.website}</td>
                  </tr>
                </table>
  
              </div>
            )
          }}
            columns={[
              { title: 'Name', field: 'name' },
              { title: 'Type', field: 'type' },
              { title: 'E-Mail', field: 'email'},
              { title: 'Founder', field: 'founder'},
              { title: 'Founded', field: 'founded'},
            ]}
            data={fakeData}
            title="Pending NGO'S"
            actions={[
              {
                icon: ()=><Check />,
                tooltip: 'Approve NGO',
                onClick: (event, rowData) => alert("You Approved " + rowData.name)
              },
            ]}
          />
          </div>
          
    );
};

export default Requests;