import { Button, Input, Radio, Space, Table, Tabs, TabsProps } from "antd";
import { useMemo, useState } from "react";
import { useNavigate } from 'react-router';

import styled from "styled-components";
import { PageRoutes } from "../shared/conf/PageRoutes";

const TeacherRegHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`

const TeacherRegister = () => {

  const [statusTab, SetStatusTab] = useState<'wait' | 'passed' | 'rejected'>('wait');
  const navigate = useNavigate();

  const columns = useMemo(() => {
    const waitColumns = [
      {
        title: '学校',
        dataIndex: 'school',
        key: 'school',
      },
      {
        title: '赛区',
        dataIndex: 'zone',
        key: 'zone',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '联系电话',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: '考生预报名数',
        dataIndex: 'preNum',
        key: 'preNum',
      },
      {
        title: '提交时间',
        dataIndex: 'submitedTime',
        key: 'submitedTime',
      },
      {
        title: '操作',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>审核</a>
            <a onClick={() => navigate(`${PageRoutes.INFOREVIEW}/detail?id=${record.id}`)}>详情</a>
          </Space>
        ),
      },
    ];

    const reviewedColumns = [
      {
        title: '学校',
        dataIndex: 'school',
        key: 'school',
      },
      {
        title: '赛区',
        dataIndex: 'zone',
        key: 'zone',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '联系电话',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: '考生预报名数',
        dataIndex: 'preNum',
        key: 'preNum',
      },
      {
        title: '考生数限制',
        dataIndex: 'numLimit',
        key: 'numLimit',
      },
      {
        title: '审核时间',
        dataIndex: 'reviewTime',
        key: 'reviewTime',
      },
      {
        title: '操作',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>详情</a>
            {statusTab === 'passed' && <a>考生数量</a>}
          </Space>
        ),
      },
    ];

    return statusTab === 'wait' ? waitColumns : reviewedColumns;

  }, [statusTab])

  const dataSource = [
    {
      key: '1',
      id: 10,
      school: '北京大学',
      zone: '北京赛区',
      name: '张三',
      phone: '13800138000',
      preNum: 50,
      submitedTime: '2023-06-01 10:00:00',
    },
    {
      key: '2',
      id: 11,
      school: '清华大学',
      zone: '北京赛区',
      name: '李四',
      phone: '13900139000',
      preNum: 45,
      submitedTime: '2023-06-02 11:30:00',
    }
  ]

  return (
    <>
      <TeacherRegHeader>
        <Radio.Group defaultValue="wait" buttonStyle="solid" value={statusTab} onChange={(e) => SetStatusTab(e.target.value)}>
          <Radio.Button value="wait">待审核(5)</Radio.Button>
          <Radio.Button value="passed">已通过(19)</Radio.Button>
          <Radio.Button value="rejected">被驳回(13)</Radio.Button>

        </Radio.Group>
        {
          statusTab === 'wait' && <Input placeholder="关键字搜索" style={{ width: 300 }} />
        }
        {
          statusTab === 'passed' && <Buttons>
            <Button>下载名单</Button>
            <Button type="primary">上传考生数量</Button>
          </Buttons>
        }
      </TeacherRegHeader>

      <Table
        columns={columns}
        dataSource={dataSource}
      >

      </Table>
    </>
  )
}


const ExamineeFinal = () => {
  return (
    <div>
      报名确认
    </div>
  )
}


const InfoReview = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: 'teacherRegister',
      label: '教师注册',
      children: <TeacherRegister />,
    },
    {
      key: 'examineePre',
      label: '考生初赛报名',
      children: <TeacherRegister />,
    },
    {
      key: 'examineeFinal',
      label: '考生决赛报名',
      children: <ExamineeFinal />,
    },
  ];
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
}

export default InfoReview;