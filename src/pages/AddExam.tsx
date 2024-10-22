import { Button, Form, Input, Select } from "antd";


const AddExam = () => {

  const onFinish = (values: unknown) => {
    console.log('ddd', values);
  }


  return (
    <div>
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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="primary" htmlType="submit">
              确认
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}


export default AddExam;