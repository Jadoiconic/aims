import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilAlignCenter, cilLockLocked, cilUser } from "@coreui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from '../../../../client';


const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const [userError,setUserError] = useState('')
  const navigation = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      if(error){
        setUserError("Incorect Email or Password")
      }

      if(data.user){
        console.log(data)
        navigation('/dashboard')
      }
    } catch (error) {
      console.log(error.message)
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account 
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                      type="email"
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(e) => {e.preventDefault(); setEmail(e.target.value)}}
                        />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => {e.preventDefault(); setPassword(e.target.value)}}
                      />
                    </CInputGroup>
                    {userError && <div className="alert alert-danger">{userError}</div>}
                    <CRow>
                      <CCol xs={6}>
                          <CButton color="primary" className="px-4" onClick={handleLogin}>
                            Login
                          </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton  color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
