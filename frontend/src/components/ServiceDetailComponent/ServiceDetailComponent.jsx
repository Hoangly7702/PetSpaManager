import { Col, Image, Row } from 'antd'
import React from 'react'
import imageservice from '../../assets/images/service/catmong.webp';
import ImageSmallService from '../../assets/images/service/catmongboss.jpeg';
import { WrappedPriceService, WrappedPriceTextService, WrappedStyleCol, WrappedStyleCollmage, WrappedStyleImageSmall, WrappedStyleNameService, WrappedStyleTextSell } from './style';
import { ClockCircleOutlined, StarFilled } from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent';


const ServiceDetailComponent = () => {
    return (
        <div >
            <Row>
                <Col span={10}>
                    <Image src={imageservice} alt="Service Image" preview={false} />
                    <Row>
                        <WrappedStyleCollmage span={6}>
                            <WrappedStyleImageSmall src={ImageSmallService} alt="Image Small" preview={false} />
                        </WrappedStyleCollmage>
                        <WrappedStyleCollmage span={6}>
                            <WrappedStyleImageSmall src={ImageSmallService} alt="Image Small" preview={false} />
                        </WrappedStyleCollmage>
                        <WrappedStyleCollmage span={6}>
                            <WrappedStyleImageSmall src={ImageSmallService} alt="Image Small" preview={false} />
                        </WrappedStyleCollmage>
                        <WrappedStyleCollmage span={6}>
                            <WrappedStyleImageSmall src={ImageSmallService} alt="Image Small" preview={false} />
                        </WrappedStyleCollmage>

                    </Row>
                </Col>
                <WrappedStyleCol span={14}>

                    <div>
                        <WrappedStyleNameService>Spa - Dịch vụ Cắt - Mài móng</WrappedStyleNameService>
                        <StarFilled style={{ fontSize: "20px", color: "#ffc400" }} />
                        <StarFilled style={{ fontSize: "20px", color: "#ffc400" }} />
                        <StarFilled style={{ fontSize: "20px", color: "#ffc400" }} />
                        <StarFilled style={{ fontSize: "20px", color: "#ffc400" }} />
                        <StarFilled style={{ fontSize: "20px", color: "#ffc400" }} />

                        <WrappedStyleTextSell> | 77 đánh giá | 202 người mua</WrappedStyleTextSell>

                    </div>
                    <WrappedPriceService>
                        <WrappedPriceTextService>100.000</WrappedPriceTextService>
                    </WrappedPriceService>
                    <WrappedStyleTextSell><ClockCircleOutlined />1 lần | 30 phút</WrappedStyleTextSell>
                    <div>
                        <ButtonComponent
                            bordered={false}
                            size={40}
                            styleButton={{
                                background: "#be9660",
                                height: "60px",
                                width: "200px",
                                border: "none",
                                borderRadius: "5px",
                                marginTop: "20px"

                            }}
                            textButton={'Đặt hẹn'}
                            styleTextButton={{
                                color: "#fff",
                                alignItem: "center",
                                fontSize: "30px",
                                fontWeight: "500"
                            }}
                        >

                        </ButtonComponent>
                    </div>
                </WrappedStyleCol>
            </Row>
        </div>
    )
}

export default ServiceDetailComponent