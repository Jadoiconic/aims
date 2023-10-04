import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilAlignCenter, cilLockLocked, cilUser } from "@coreui/icons";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../../client";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [userError, setUserError] = useState("");
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [currnetUser, setCurrentUser] = useState(null);
  const [role] = useState('superAdmin')

  const Redirect = ({ to }) => {
    return navigation(to);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        setUserError("Incorect Email or Password");
      }

      if (data.user) {
        // console.log(data);
        setCurrentUser(data.user);
        dispatch({ type: "set",})
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUpUser = async () => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error(error);
      return { user: null, error };
    }

    if (user) {
      const { data, error: roleError } = await supabase
        .from('user_roles')
        .upsert([{ user_id: user.id, role }]);
      
      if (roleError) {
        console.error(roleError);
      }
    }

    return { user, error: null };
  }

  if (loading) return <div className="d-flex justify-content-center align-items-center" style={{width:'100%',height:'100vh',backgroundColor:'#eee'}}><span className="spinner-border text-muted"> </span></div>;
  return (
    <>
      {currnetUser !== null ? (
        <Redirect to="/dashboard" />
      ) : (
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
                          placeholder="email"
                          autoComplete="username"
                          onChange={(e) => {
                            e.preventDefault();
                            setEmail(e.target.value);
                          }}
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
                          onChange={(e) => {
                            e.preventDefault();
                            setPassword(e.target.value);
                          }}
                        />
                      </CInputGroup>
                      {userError && (
                        <div className="alert alert-danger">{userError}</div>
                      )}
                      <CRow>
                        <CCol xs={6}>
                          <CButton
                            color="primary"
                            className="px-4"
                            onClick={handleLogin}
                          >
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="text-right">
                          <CButton color="link"  onClick={signUpUser} className="px-0">
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
      )}
    </>
  );
};

export default Login;
