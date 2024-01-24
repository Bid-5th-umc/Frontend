import React from "react";
import "./Join.css";
import EmailContainer from "./EmailContainer";
import AccountContainer from "./AccountContainer";
import InputContainer from "./InputContainer";
import JoinButton from "./JoinButton";
import PWContainer from "./PWContainer";
import NicnameContainer from "./NicnameContainer";
import ProfileSetting from "./ProfileSetting";
import NextLine from "./NextLine";

const Join = () => {
  return (
    <div className="Join">
      <img src="image/join-line.png" className="join-line" alt="join-line" />
      <ProfileSetting/>
      <EmailContainer/>
      <PWContainer/>
      <NextLine/>
      <NicnameContainer/>
      <InputContainer
        what="이름"
        text="수령인의 이름을 입력하세요."
      />
      <InputContainer what="전화번호" text="- 없이 입력"/>
      <AccountContainer/>
      <JoinButton/>
    </div>
  );
};

export default Join;
