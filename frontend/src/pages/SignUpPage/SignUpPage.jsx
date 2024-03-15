import React, { useState } from 'react'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { WrappedContainerLeft, WrappedContainerRight, WrappedTextLight } from './style'
import imageBanner from '../../assets/images/signin-up/logosigninip.png'
import { Image } from 'antd'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'

const SignUpPage = () => {
  const {isShowPassword, setisShowPassword} = useState(false)

  return (
    <div style={{ display: "flex",  alignItem: "center", justifyContent: "center", background: "#ccc", height: "100vh" }}>
      <div style={{display: "flex", width: "900px", height: "500px", borderRadius: "6px", background: "#fff", margin:"auto" }}>
      <WrappedContainerRight>
          <Image src={imageBanner} preview={false}  />
        </WrappedContainerRight>
        <WrappedContainerLeft >
        <h1>Xin chào,</h1>
        <p>Nhập email và tạo mật khẩu để đăng ký</p>
        <InputForm placeholder="abc@gmail.com" style={{marginBottom:"10px"}} />
        <div style={{position:'relative'}}>
          <span
          style={{
            zIndex:10,
            position:"absolute",
            fontSize:"20px",
            top:"7px",
            right:"10px"
          }}
          >
            {isShowPassword ? (<EyeFilled />) : (<EyeInvisibleFilled />)}
          </span>
        </div>
        <InputForm placeholder="Mật khẩu" style={{marginBottom:"10px"}} type={isShowPassword ? "text" : "password"}/>
        <div style={{position:'relative'}}>
          <span
          style={{
            zIndex:10,
            position:"absolute",
            fontSize:"20px",
            top:"7px",
            right:"10px"
          }}
          >
            {isShowPassword ? (<EyeFilled />) : (<EyeInvisibleFilled />)}
          </span>
        </div>
        <InputForm placeholder="Xác nhận mật khẩu" type={isShowPassword ? "text" : "password"}/>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: "#be9660",
              height: "50px",
              width: "100%",
              border: "none",
              borderRadius: "5px",
              margin: "26px 0px 10px "

            }}
            textButton={'Đăng ký'}
            styleTextButton={{
              color: "#fff",
              alignItem: "center",
              fontSize: "20px",
              fontWeight: "500"
            }}
          >
          </ButtonComponent>
          <WrappedTextLight>Quên mật khẩu?</WrappedTextLight>
          <p>Bạn đã có tài khoản? <a style={{textDecoration:"none"}} href="/sign-in"><WrappedTextLight>Đăng nhập</WrappedTextLight></a></p>
        </WrappedContainerLeft>
        
      </div>
    </div>
  )
}

export default SignUpPage