// import { Input } from 'antd'
import React, { useState } from 'react'
import { WrappedInputStyle } from './style';

const InputForm = (props) => {
    const { placeholder = 'Nhập số điện thoại ',...rests } = props;
    const {valueInput, setValueInput} = useState('')
    return (
        <WrappedInputStyle placeholder={placeholder} valueInput={valueInput}{...rests} size='large'/>
    )
}

export default InputForm