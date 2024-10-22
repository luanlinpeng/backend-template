import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled(Form)`
  width: 300px;
  padding: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('登录信息:', values);
    // 这里添加登录逻辑
  };

  return (
    <LoginContainer>
      <LoginForm
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名！' }]}
        >
          <Input placeholder="用户名" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码！' }]}
        >
          <Input.Password placeholder="密码" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            登录
          </Button>
        </Form.Item>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
