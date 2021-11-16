import React from "react";
import { Progress,Card,Row,Col } from 'antd';
import 'antd/dist/antd.css';
import "./status.css"

const Inventory=()=>{
    return(
        <div className="site-card-border-less-wrapper topMargin">
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="CLOTHES RECEIVED" className="alCentre" bordered={false} style={{ width: 300 }}>
                        <Progress size="large" type="dashboard" format={()=> `${5000}`} percent={100} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="CLOTHES DISBURSED" className="alCentre" bordered={false} style={{ width: 300 }}>
                        <Progress size="large" type="dashboard" format={()=> `${3000}`} percent={65} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="CLOTHES AVAILABLE" className="alCentre" bordered={false} style={{ width: 300 }}>
                        <Progress size="large" type="dashboard" format={()=> `${2000}`} percent={35} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Inventory;