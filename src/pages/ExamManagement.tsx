import { SearchProps } from "antd/es/input";
import { Button, Form, Input, Modal, Popconfirm, Select, Space, Table } from 'antd';
import styled from "styled-components";
import { useState } from "react";
import { PageRoutes } from "../shared/conf/PageRoutes";
import { useNavigate } from "react-router";

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

const ExamManagement = () => {
  const navigate = useNavigate();


  const handleChangeAdmin = (item: string) => {
    console.log(item)

  }
  const handleDelete = (item: string) => {
    console.log(item)
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
          <a onClick={() => handleChangeAdmin(record.key)}>编辑</a>
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
      <ButtonBox>
        <NumSpan>共{dataSource.length}条数据</NumSpan> <Button type="primary" onClick={() => navigate(`${PageRoutes.EXAMMANGE}/addExam`)}>添加考试</Button>
      </ButtonBox>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
        />
      </div>
    </div>
  )
}

export default ExamManagement;