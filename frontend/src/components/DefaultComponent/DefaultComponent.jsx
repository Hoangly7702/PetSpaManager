import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';

const DefaultComponent = ({ children }) => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            {children}
            <FooterComponent></FooterComponent>
        </div>
    )
        
}

export default DefaultComponent;