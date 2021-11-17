import React from "react";
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import "./table.css";
import fakeData from './fakeData.json';
import tableIcons from "../icons"

const  Update=()=>{
      return(
        <div className="myTable" style={{maxWidth: "85%"}}>
          <MaterialTable
          icons={tableIcons}
          detailPanel={rowData => {
            
            return (
              <div className="detailPanel">
                <table className="mytabStyle">
                  <tr className="mytabStyle">
                    <th colSpan={2} className="myHeader">Business Associated</th>
                    <td colSpan={4} className="mytabStyle" >{rowData.business}</td>
                  </tr>
                  <tr>
                    <th colSpan={1}  className="myHeader">Discount Percentage</th>
                    <td colSpan={1} className="mytabStyle" >{rowData.pDisc}%</td>
                    <th colSpan={1}  className="myHeader">Maximum Discount</th>
                    <td colSpan={1} className="mytabStyle" >₹ {rowData.maxDisc}</td>
                    <th colSpan={1}  className="myHeader">Minimum Order Value</th>
                    <td colSpan={1} className="mytabStyle" >₹ {rowData.minOrdVal}</td>
                  </tr>
                </table>
  
              </div>
            )
          }}
            columns={[
              { title: 'Name', field: 'name' },
              { title: 'Points', field: 'points' },
              { title: 'Prefix', field: 'prefix' },
              { title: 'Valid From', field: 'expFrom'},
              { title: 'Valid Upto', field: 'expUpto'},
            ]}
            data={fakeData}
            title="Coupon's Detail"
            actions={[
              {
                icon: ()=><Edit />,
                tooltip: 'Edit Coupon',
                onClick: (event, rowData) => alert("You Edited " + rowData.name)
              },
              {
                icon: ()=><DeleteOutline />,
                tooltip: 'Delete Coupon',
                onClick: (event, rowData) => alert("You Deleted " + rowData.name)
              },
            ]}
          />
          </div>
          
    );
};

export default Update;