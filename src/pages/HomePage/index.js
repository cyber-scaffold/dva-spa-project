import React, { useEffect } from "react";
import { useHistory,useSelector } from "dva";

export default function HomePage() {
  const store=useSelector(({TestPage})=>(TestPage));
  console.log(store);
  const history = useHistory();
  useEffect(() => {
    console.log(history);
  }, []);
  return (
    <div>Hello Words</div>)
};

HomePage.defaultProps = {

};