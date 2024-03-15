import React from 'react'
import { WrapperCategory, WrapperContent, WrapperTextValue } from './style'
import { Rate } from 'antd'

const NavBarComponents = () => {

    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return <WrapperTextValue>{option}</WrapperTextValue>
                })


            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ display: "flex", gap: "10px" }}>
                            <Rate style={{ fontSize: "18px" }} disabled defaultValue={option} />
                            <span style={{ fontSize: "18px" }}  >{`từ ${option} sao`}</span>
                        </div>
                    )
                })
           

            default:
                return {}
        }
    }
    return (
        <WrapperCategory >
            {/* <WrapperLableText>Danh mục loại dịch vụ</WrapperLableText> */}
            <WrapperContent>
                {renderContent('text', ['Tất cả dịch vụ', 'Dành cho Mèo', 'Dành cho Boss', 'Dịch vụ lẻ'])}


            </WrapperContent>
            {/* <WrapperContent>
                {renderContent('star', [3, 4, 5])}
            </WrapperContent> */}
            <WrapperContent>
                
            </WrapperContent>
        </WrapperCategory>

    )
}

export default NavBarComponents