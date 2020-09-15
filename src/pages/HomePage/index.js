import React, { useEffect } from "react";

import css from "./index.less";
import images from "./images/8f17419a90.jpg";


export default function HomePage() {
  useEffect(()=>{
    (async ()=>{
      const response=await fetch("/test1");
      const json=await response.json();
      console.log(json);
    })();
  });
  return (
    <div>
      <img className={css["images"]} src={images} width="100%"/>
      <div className={css["home-page"]}>Hello Words</div>
    </div>)
};

HomePage.defaultProps = {

};