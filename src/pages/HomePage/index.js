import React, { useEffect } from "react";

import css from "./index.less";
import images from "./images/8f17419a90.jpg";


export default function HomePage() {
  useEffect(()=>{
    (async ()=>{
      const response=await fetch("http://127.0.0.1:8000/test2");
      const json=await response.json();
      console.log(json);
    })();
  });
  return (
    <div>
      <img src={images}/>
      <div className={css["home-page"]}>Hello Words</div>
    </div>)
};

HomePage.defaultProps = {

};