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
import fakeData from './fakeData.json';
import "./table.css";

const Requests = () =>{
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