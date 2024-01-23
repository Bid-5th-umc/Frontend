import React from 'react'
import Mypage from './Mypage';

const MypageBar = () => {

  const mypageData = [
    { id: "/", image: "image/Like.png", name: "Like" },
    { id: "/", image: "image/Mypage.png", name: "Mypage" },
    { id: "/", image: "image/Menu.png", name: "Menu" }
  ];

  return (
    <div className='mypageBar'>
      <Mypage
        PageUrl={mypageData[0].id}
        MypageImage={mypageData[0].image}
        MypageName={mypageData[0].name}
      />
      <Mypage
        PageUrl={mypageData[1].id}
        MypageImage={mypageData[1].image}
        MypageName={mypageData[1].name}
      />
      <Mypage
        PageUrl={mypageData[2].id}
        MypageImage={mypageData[2].image}
        MypageName={mypageData[2].name}
      />
    </div>
  )
}

export default MypageBar