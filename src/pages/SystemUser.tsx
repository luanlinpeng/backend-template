import { Button, Form, Input, Modal, Popconfirm, Radio, Space, Table } from "antd";
import { useState } from "react";
import styled from "styled-components";

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  border-bottom: 1px solid #9999998d;
  padding-bottom: 10px;
  margin-bottom: 20px;
`
const NumSpan = styled.span`
  font-size: 15px;
  color: #999
`

const SystemUser = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDelete = (str: string) => { }

  const onFinish = (values: unknown) => {
    console.log('ddd', values);
    setIsModalVisible(false);
  }

  const columns = [
    {
      title: '账号',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>编辑</a>
          <a>重置密码</a>
          <Popconfirm
            title="确定要删除吗？"
            onConfirm={() => handleDelete(record.key)}
            okText="确定"
            cancelText="取消"
          >
            <a>删除</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const dataSource = [
    {
      key: '1',
      account: 'admin001',
      name: '张三',
      role: '系统管理员',
    },
    {
      key: '2',
      account: 'teacher001',
      name: '李四',
      role: '教师',
    },
    {
      key: '3',
      account: 'student001',
      name: '王五',
      role: '学生',
    },
    {
      key: '4',
      account: 'judge001',
      name: '赵六',
      role: '评委',
    },
    {
      key: '5',
      account: 'organizer001',
      name: '钱七',
      role: '组织者',
    }

  ]


  return (
    <>
      <ButtonBox>
        <NumSpan>共{dataSource.length}条数据</NumSpan> <Button type="primary" onClick={() => setIsModalVisible(true)}>新增用户</Button>
      </ButtonBox>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
        />
      </div>
      <Modal
        open={isModalVisible}
        title={"新增用户"}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form
          name="addZone"
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            name="name"
            label="姓名"
            rules={[{ required: true, message: '请输入姓名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="role"
            label="角色"
            rules={[{ required: true, message: '请选择赛区角色' }]}
          >
            <Radio.Group>
              <Radio value={'sysAdmin'}>系统管理员</Radio>
              <Radio value={'zoneAdmin'}>赛区管理员</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={() => setIsModalVisible(false)}>
                取消
              </Button>
              <Button type="primary" htmlType="submit">
                确认
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default SystemUser;