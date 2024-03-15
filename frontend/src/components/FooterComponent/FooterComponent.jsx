import React from 'react'

import {
    WrappedFooter, WrappedFooterRow, WrappedLogo,
} from './style';
import { Col, Image } from 'antd';

const FooterComponent = () => {

    return (
        <WrappedFooter >
            <WrappedFooterRow id='container' >
                <Col style={{ fontSize: "16px" }} span={6}>
                    <WrappedLogo href="/">BlissFull Pets</WrappedLogo>
                    <p>Nếu Chủ có bất kỳ câu hỏi nào, vui lòng liên hệ LILDAN nhé info@lildanpet.vn</p>
                    <p>Hotline: 0349826133</p>
                    <p>Địa chỉ: 2, Nguyễn Cư Trinh, An Nghiệp, Ninh Kiều, Cần Thơ</p>
                </Col>

                <Col style={{ fontSize: "16px", paddingLeft: "10px" }} span={6}>
                    <h4>Hỗ trợ khách hàng</h4>
                    <p>Chính sách bảo mật</p>
                    <p>Bảo vệ quyền lợi khách hàng</p>

                </Col>
                <Col style={{ fontSize: "16px" }} span={6}>
                    <h4>Phương thức thanh toán</h4>

                    <div style={{ display: "flex", fontSize: "30px", marginTop: "-10px", gap: "10px" }}>
                        <Image width='30px' src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" preview={false} />
                        <Image style={{ marginTop: "-5px" }} width='80px' src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png" preview={false} />

                    </div>

                </Col>
                <Col style={{ fontSize: "16px", paddingLeft: "10px" }} span={6}>
                    <h4>Kết nối với chúng tôi</h4>
                    <div style={{ display: "flex", fontSize: "30px", marginTop: "-10px", gap: "10px" }}>
                        <Image width='30px' src="https://beautyx.vn/static/media/facebook.b29a479ba80fd7d1f60d.png" preview={false} />
                        <Image width='30px' src="https://beautyx.vn/static/media/instagram.79535458a8a6d88f81d4.png" preview={false} />

                        <Image width='30px' src="https://beautyx.vn/static/media/tiktok.1a5eb2c96054a4a3b142.png" preview={false} />
                    </div>

                </Col>
            </WrappedFooterRow>

        </WrappedFooter>
    )
}

export default FooterComponent