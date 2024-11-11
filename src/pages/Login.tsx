import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
  width: 100vw;
`;

const Main = styled.div`
  background-color: #fff;
  width: 358px;
  height: 488px;
  border-radius: 15px;
  padding: 0 50px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin: 30px 0;
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    // 这里添加登录逻辑
    localStorage.setItem('token', '123456');
    navigate('/');
  };

  return (
    <LoginContainer>
      <Main>
        <Title>登录</Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名！' }]}
          >
            <Input placeholder="用户名" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码！' }]}
          >
            <Input.Password placeholder="密码" size="large" />
          </Form.Item>

          <Form.Item style={{ marginTop: '40px' }}>
            <Button type="primary" htmlType="submit" size="large" style={{ width: '100%' }}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Main>

    </LoginContainer>
  );
};

export default Login;
