import React from "react";
import { useEffect,useState } from "react";
import MaterialTable from 'material-table'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import tableIcons from "../icons";
import "./table.css";
import Select from 'react-select';
import { Modal, DatePicker, Space, TimePicker } from 'antd';
import { projectFirestore } from '../../firebase';



const Ongoing = () => {
  const [info , setInfo] = useState([]);
  const [formData, setFormData] = useState({});
  const [load , setLoad] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = (oldData) => {
    setIsModalVisible(true);
    setFormData(oldData)
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    useEffect(()=>{
      if(load){
        Fetchdata();
      }
    },[]);
    const Fetchdata = ()=>{
      projectFirestore.collection("events").get().then((querySnapshot) => {
          querySnapshot.forEach(element => {
              var id = element.id;
              var data = element.data();
              data.id = id;
              setInfo(arr =>[...arr , data]);
              setLoad(false);   
          });
      })
  }
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
          data={info}
          title="Event Detail's"
          actions={[
            {
              icon: ()=><Edit />,
              tooltip: 'Edit Event',
              onClick: (event, rowData) => showModal(rowData)
            },
            {
              icon: ()=><DeleteOutline />,
              tooltip: 'Delete Event',
              onClick: (event, rowData) => {
                projectFirestore.collection("events").doc(rowData.id).delete();
                alert("DELETED");
                setInfo([]);
                Fetchdata();
              }
            },
          ]}
        />
          <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div className="container">
            <div className="row">
                <div className="col-2" />
                <div className="col-8">
                    <form className="myform">
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <Select placeholder="Select City" name="city"/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <Select placeholder="Select Area" name="area"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" required id="eventName" className="form-control" placeholder="Enter Event Name"/>
                        </div>
                        <div className="form-outline mb-4">
                            <textarea required className="form-control" id="eventAddress" rows="4" placeholder="Enter Full Address"></textarea>
                        </div>
                        <div className="form-outline mb-4">
                                <div className="row justify-content-between">
                                    <div className="col-4">
                                        <Space direction="vertical">
                                            <DatePicker name="startDate" size="large"placeholder="Event Date" format="DD-MM-YYYY" />
                                        </Space>
                                    </div>
                                    <div className="col-4">
                                        <Space direction="vertical">   
                                            <TimePicker name ="startTime" size="large"placeholder="Start Time"/>
                                        </Space>
                                    </div>
                                    <div className="col-4">
                                        <Space direction="vertical">   
                                            <TimePicker name="endTime" size="large"  placeholder="End Time"/>
                                        </Space>
                                    </div>
                                </div>
                        </div>
                        <div className="form-outline mb-4 fbt">
                            <button type="submit fbt" className="btn btn-primary">CREATE EVENT</button>
                        </div>
                    </form>
                </div>
                <div className="col-2" />
            </div>
        </div>
          </Modal>
        </div>
        
  );
};

export default Ongoing;