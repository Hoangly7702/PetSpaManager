import React from 'react'
import { WrapperCategory, WrapperContent, WrapperLableText, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavBarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return <WrapperTextValue>{option}</WrapperTextValue>
                })

            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{display:"flex",gap:"4px"}}>
                            <Rate style={{fontSize:"12px"}} disabled defaultValue={option} />
                        <span>{`từ ${option} sao`}</span>
                        </div>
                    )
                })
                case 'price':
                    return options.map((option) => {
                        return (
                            <div style={{borderRadius:"10px",backgroundColor:"#ccc", width:"150px",padding:"2px 5px"}}>
                            {option}
                            </div>
                        )
                    })      

            default:
return {}
        }
    }
return (
    <WrapperCategory >
        <WrapperLableText>Danh mục loại dịch vụ</WrapperLableText>
        <WrapperContent>
            {renderContent('text', ['All', 'Meo', 'Cho'])}
            {renderContent('checkbox', [
                { value: 'a', label: "A" },
                { value: 'b', label: "B" }
            ])}

        </WrapperContent>
        <WrapperContent>
            {renderContent('star',[3, 4, 5])}
        </WrapperContent>
        <WrapperContent>
            {renderContent('price',['Dưới 100.000','100.000-200.000','Trên 200.000'])}
        </WrapperContent>    
    </WrapperCategory>

)
}

export default NavBarComponent