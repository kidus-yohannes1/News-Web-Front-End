import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "../assets/styles/Login.css";
import { postRequest } from "../hooks/newsHook";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (values: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("password", password);
    const cookies = new Cookies();

    var requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:4000/users/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.success == true && result.data.role == "admin") {
          cookies.remove("token", { path: "/" });
          cookies.remove("name", { path: "/" });
          cookies.set("token", result.data.token, { path: "/" });
          cookies.set("name", result.data.userName, { path: "/" });
          window.location.href = `/admin`;
        }
        if (result.success == true && result.data.role == "author") {
          cookies.remove("token", { path: "/" });
          cookies.remove("name", { path: "/" });
          cookies.set("token", result.data.token, { path: "/" });
          cookies.set("name", result.data.userName, { path: "/" });
          window.location.href = `/author`;
        } else {
          alert(result.message);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item name="Email" rules={[{ required: true, type: "email" }]}>
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>
  );
}

export default Login;
