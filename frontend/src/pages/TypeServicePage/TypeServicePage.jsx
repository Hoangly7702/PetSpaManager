import React from 'react';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Col, Pagination, Row } from 'antd';

const TypeServicePage = () => {
    const onChange = () => { }
    return (
        <div id='container'>
            <Row>
                <Col span={5}>
                    <NavBarComponent />
                </Col>
                <Col style={{ display: "flex", gap: "20px", flexWrap: "wrap" }} span={19}>
                    <CardComponent style={{ width: 500 }} />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />

                    <Pagination showQuickJumper defaultCurrent={2} total={100} onChange={onChange} 
                    style={{
                        margin:"1rem",
                        textAlign:"center"
                    }}
                    />


                </Col>

                

            </Row>


        </div>
    )

}

export default TypeServicePage;