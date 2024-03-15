
import React from 'react';
import slider1 from '../../assets/images/banner/one.png'
import slider2 from '../../assets/images/banner/two.png'
import slider3 from '../../assets/images/banner/three.png'
import slider4 from '../../assets/images/banner/four.png'

import SliderComponent from '../../components/SliderComponent/SliderComponent';
import {  WrappedContainer } from './style';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Button } from 'antd';


const HomePage = () => {


    return (



        <div >
            <SliderComponent arrImages={[slider1, slider2, slider3, slider4]} />
            <WrappedContainer>

            </WrappedContainer>
            <div id='container'>
                
                <div style={{ marginTop: "20px", display: "flex", gap: "20px", flexWrap: "wrap", flex: "4" }}>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />


                </div >
                <div style={{ textAlign: "center", padding: "10px" }}>
                    <Button size="large" style={{
                        fontWeight: "bold",
                        color: "#fff",
                        backgroundColor: "#be9660",
                        padding: "0 50px",
                        cursor: "pointer", 
                        transition: "background-color 0.3s ease", 
                        borderRadius: "20px", 
                        border:"none",
                    }}>
                        Xem thêm
                    </Button>
                </div>

            </div >


        </div >
    );
};

export default HomePage;
