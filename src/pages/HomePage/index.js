import React, { useEffect } from "react";
import { useHistory } from "dva";

export default function HomePage() {
  const history = useHistory();
  useEffect(() => {
    console.log(history);
  }, []);
  return (
    <div>Hello Words</div>)
}


HomePage.defaultProps = {

};