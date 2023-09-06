import React from "react";
import { Button, Result } from "antd";

const SuccessfullyAuthor: React.FC = () => (
  <div style={{ margin: "20% 40%", display: "block", width: "100%" }}>
    <Result
      status="success"
      title="Successfully posted a news !"
      subTitle="You have Successfully posted a news and thank you for work ."
      extra={[
        <Button
          type="primary"
          key="console"
          onClick={() => (window.location.href = "newslist")}
        >
          Go to news list
        </Button>,
        <Button key="buy" onClick={() => (window.location.href = "postnews")}>
          Post News
        </Button>,
      ]}
    />
  </div>
);

export default SuccessfullyAuthor;
