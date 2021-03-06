import React, { useState, useEffect, useRef } from "react";
import { projectFirestore } from '../../firebase';
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
//import "./table.css";

const Verified = () => {

  let nameRef = useRef();
  let quantityRef = useRef();
  const [loader, setLoader] = useState(true)
  const email = sessionStorage.getItem("email");
  const red = projectFirestore.collection("pendingDonations")

  console.log(email)
  const [pending, setPending] = useState([])
  function getpending() {
    red.where('email', '==', email).onSnapshot((querySnapshot) => {
      const pendings = []
      querySnapshot.forEach((doc) => {
        pendings.push(doc.data())
      })
      setPending(pendings)
    })
    setLoader(false)
    console.log('Inside Get Data', loader)
  }
  useEffect(() => {
    getpending()
    console.log('hgfhg', pending);

  }, [])




  // const tableIcons = {
  //     Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  //     Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  //     Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  //     Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  //     DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  //     Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  //     Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  //     Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  //     FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  //     LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  //     NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  //     PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  //     ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  //     Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  //     SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  //     ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  //     ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  //   };
  return (
    // <div className="myTable" style={{maxWidth: "85%"}}>
    //   <MaterialTable
    //   icons={tableIcons}
    //     columns={[

    //       { title: 'Event', field: 'event' },
    //       { title: 'Clothes Donated', field: 'donated',type: 'numeric'},
    //       { title: 'Reward Points', field: 'points',type: 'numeric'},
    //       { title: 'Verified By', field: 'volunteer'},
    //       { title: 'Donated On', field: 'date'}
    //     ]}
    //     data={fakeHistory }
    //     title="Donations Detail's"

    //   />
    //   </div>
    <div>
      <h2>{sessionStorage.getItem("email")}</h2>
      {loader === false && (pending.map((pending) =>
        <div key={pending}>
          <label>Name</label>
          <input type="text" value={pending.name} ref={nameRef} disabled /><br />

          <label>Quantity</label>
          <input type="text" value={pending.quantity} ref={quantityRef} disabled />

        </div>
      ))}
    </div>
  );
}

export default Verified;

