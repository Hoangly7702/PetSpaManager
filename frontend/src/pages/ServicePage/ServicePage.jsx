import { Col, Pagination, Row } from 'antd';
import React from 'react';
import CardComponent from '../../components/CardComponent/CardComponent';
import NavBarComponent from '../../components/NavBarComponents/NavBarComponents';


const ServicePage = () => {

    const onChange = () => { }

    return (
        <div id='container' >
            <Row>
            {/* , borderLeft:"2px Dashed #008374" */}
                <Col style={{borderRight:"2px Dashed #a77d44",backgroundColor:"#fffcf7"}} span={6}>
                    <NavBarComponent/>
                </Col>
                <Col style={{paddingLeft:"15px"}} span={18}>
                    <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }} >
                        <CardComponent style={{ width: 500 }} />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </div>

                    


                </Col>
                <Pagination defaultCurrent={1} total={50} onChange={onChange}
                        style={{
                            margin: "auto",
                            paddingTop: "30px",
                            textAlign: "center"
                        }}
                    />
            </Row>


        </div>
    )

}

export default ServicePage;