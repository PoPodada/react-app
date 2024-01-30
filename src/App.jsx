import { useEffect, useState } from "react";
import  ColorfulMessage from "./components/Colorfullmessage";

export const App = ()=>{
  console.log("--app--")
  const [num,setNum] = useState(0);
  const [isShowFace,setIsShowFace] = useState(true);
  const onClickCountUp = () =>{
    setNum((prev)=>prev +1);
    setNum (num +1);
  }
  const onClickToggle = () =>{
    setIsShowFace(!isShowFace);
  }
  useEffect(()=>{
    if(num >0){
      if(num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      }else{
        isShowFace && setIsShowFace(false)
      }
    }
    
  },[]);
  // num
  

  return(
    <>
    <h1 style={{ color:"blue"}}>konnnitiha</h1>
    <ColorfulMessage color = "blue">kljalfkasjfa</ColorfulMessage>
    <ColorfulMessage color = "red">aiueo</ColorfulMessage>
    
    <button onClick={onClickCountUp}>カウントアップ</button>
    <p>{num}</p>
    <button onClick={onClickToggle}>on/off</button>

    {isShowFace && <p>何を四天王</p>}
    </>
  );
};


