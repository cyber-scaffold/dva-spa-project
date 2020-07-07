import css from "./index.module.scss";
import React, { useCallback } from "react";
import { useSelector } from "dva";
import { Button } from "antd";
import feedback from "@/utils/feedback";



export default function HomePage(props) {
  const TestPage = useSelector(({ TestPage }) => (TestPage));
  console.log(TestPage);
  const handleClick = useCallback(async () => {
    const result = await feedback.testDialog.open();
    feedback.testDialog.close();
    console.log(result);
  });
  return (
    <div className={css.HomePage}>
      <Button type="primary" onClick={handleClick}>
        测试弹框
       </Button>
    </div>)
};
