import { Button, Input } from 'antd';
import React from 'react';

import {
    SearchOutlined 
} from '@ant-design/icons';


import styled from 'styled-components';

// Styled component cho Input
const CustomInput = styled(Input)`
    border-radius: 0;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border:"none";

`;

// Styled component cho Button
const CustomButton = styled(Button)`
    border-radius: 0;
    width:60px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #000000;
    color: #ffffff;
    border:"none";
    
`;



const ButtonInputSearch = (props) => {

    const {size, placeholder, textbutton} = props

    return (
        <div style={{display:'flex'}}>
            <CustomInput 
            size={size} 
            placeholder={placeholder} 
            
            />
            <CustomButton 
            size={size} 
            
            icon={<SearchOutlined/>} 
            >
                {textbutton} 
            </CustomButton>
        </div>
    )
        
}

export default ButtonInputSearch;