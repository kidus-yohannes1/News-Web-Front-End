import React from "react";
import { Button, Result } from "antd";

const Successfully: React.FC = () => (
  <div style={{ margin: "20% 30%", display: "block", width: "100%" }}>
    <Result
      status="success"
      title="Successfully posted a feed back !"
      subTitle="You have Successfully posted a feed back and thank you for your feed Back"
      extra={[
        <Button
          type="primary"
          key="console"
          onClick={() => (window.location.href = "feedBacksList")}
        >
          Go feedBackList
        </Button>,
        <Button
          key="buy"
          onClick={() => (window.location.href = "postFeedBack")}
        >
          feedBack Again
        </Button>,
      ]}
    />
  </div>
);

export default Successfully;
