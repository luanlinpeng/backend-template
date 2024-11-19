import { Button, Form, Popconfirm, Select, Space, Table } from "antd";
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
const RightBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`


const ExamineeManagement = () => {


  const onFinish = (values: unknown) => {
    console.log('ddd', values);
  }

  const handleDelete = (str: string) => {

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
          <a>查看考生名单</a>
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
    <>
      <div>
        <Form
          name="addZone"
          onFinish={onFinish}
          layout="inline"
          style={{ display: 'flex', flexDirection: 'row', gap: 20, justifyContent: 'flex-start' }}
        >
          <Form.Item
            name="name"
          >
            <Select
              placeholder={"姓名"}
              style={{ width: 150 }}
              options={[
                { value: 'a', label: 'a' },
                { value: 'b', label: 'b' },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="idNumber"
          >
            <Select
              placeholder={"身份证号"}
              style={{ width: 150 }}
              options={[
                { value: 'a', label: 'a' },
                { value: 'b', label: 'b' },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="ticketNumber"
          >
            <Select
              placeholder={"准考证号"}
              style={{ width: 150 }}
              options={[
                { value: 'a', label: 'a' },
                { value: 'b', label: 'b' },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="examinationRoom"
          >
            <Select
              placeholder={"考场"}
              style={{ width: 150 }}
              options={[
                { value: 'a', label: 'a' },
                { value: 'b', label: 'b' },
              ]}
            />
          </Form.Item>
        </Form>
        <ButtonBox>
          <NumSpan>共{dataSource.length}条数据</NumSpan>
          <RightBtns>
            <Button>下载名单</Button>
            <Button type="primary">上传考场分配名单</Button>
          </RightBtns>

        </ButtonBox>
        <div>
          <Table
            columns={columns}
            dataSource={dataSource}
          />
        </div>
      </div>
    </>
  )
}

export default ExamineeManagement;