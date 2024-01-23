import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import LoginLogo from './LoginLogo';
import Xbutton from './Xbutton';

const Login = ({ onClose }) => {
  const navigate = useNavigate();

  const handleOverlayClick = () => {
    onClose();
  };

  const handleJoinButtonClick = () => {
    navigate('/join'); // '/join' 페이지로 이동
  };

  return (
    <>
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <Xbutton className="Xbutton" />
          <LoginLogo className="Login-Logo" />

          <input className="IdInput" type="text" placeholder="전화번호, 사용자이름 또는 이메일" />
          <input className="PwInput" type="password" placeholder="비밀번호" />
          <button className="LoginButton">
            <span>로그인</span>
          </button>
          <button className="KakaoButton">
            <img src='image/kakao-logo.png' alt='kakao-logo' className="KakaoImage" />
            카카오로 로그인
          </button>

          <div className="OrLine">
            <img src='image/login-gray-line.png' alt='login-gray-line' className="login-gray-line1" />
            <span className='or'>또는</span>
            <img src='image/login-gray-line.png' alt='login-gray-line' className="login-gray-line2" />
          </div>

          <div className="JoinText">
            <span>계정이 없으신가요?</span>
            <button className="JoinButton" onClick={handleJoinButtonClick}>
              가입하기
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;