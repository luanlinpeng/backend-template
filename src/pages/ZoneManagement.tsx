import { SearchProps } from "antd/es/input";
import { Button, Form, Input, Modal, Popconfirm, Select, Space, Table } from 'antd';
import styled from "styled-components";
import { useState } from "react";

const { Search } = Input;

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

const ZoneManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

  const handleChangeAdmin = (item: string) => {
    console.log(item)

  }
  const handleDelete = (item: string) => {
    console.log(item)
  }

  const onFinish = (values: unknown) => {
    console.log('ddd', values);
    setIsModalVisible(false);

  }

  const columns = [
    {
      title: '赛区',
      dataIndex: 'zone',
      key: 'zone',
    },
    {
      title: '赛区管理员',
      dataIndex: 'admin',
      key: 'admin',
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleChangeAdmin(record.key)}>更换管理员</a>
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
      zone: '北京赛区',
      admin: '张三',
      updateTime: '2023-06-01 10:00:00',
    },
    {
      key: '2',
      zone: '上海赛区',
      admin: '李四',
      updateTime: '2023-06-02 11:00:00',
    },
  ]

  return (
    <div>
      <Search placeholder="输入赛区、指导教师" size="large" onSearch={onSearch} style={{ width: '30%' }} />
      <ButtonBox>
        <NumSpan>共{dataSource.length}条数据</NumSpan> <Button type="primary" onClick={() => setIsModalVisible(true)}>添加赛区</Button>
      </ButtonBox>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
        />
      </div>
      <Modal
        open={isModalVisible}
        title={"添加赛区"}
        footer={null}
      >
        <Form
          name="addZone"
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            name="zoneName"
            label="赛区名称"
            rules={[{ required: true, message: '请输入赛区名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="adminName"
            label="赛区负责人"
            rules={[{ required: true, message: '请选择赛区管理员' }]}
          >
            <Select
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
              ]}
            />
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
    </div>
  )
}

export default ZoneManagement;