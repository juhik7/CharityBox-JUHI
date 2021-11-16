import React from "react";
import { forwardRef } from 'react';
import MaterialTable from 'material-table'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import "./table.css";
import fakeData from './fakeData.json';

const  Update=()=>{
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };
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