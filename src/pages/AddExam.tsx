import { Button, DatePicker, Form, Input, Radio, Select } from "antd";
import { useNavigate } from "react-router";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
`
const ExamBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  cursor: pointer;
  height: 100px;
  background-color: #f0f0f0;
`
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`

const AddExam = () => {

  const navigate = useNavigate();
  const onFinish = (values: unknown) => {
    console.log('ddd', values);
  }
  const examClick = () => {
    navigate('/editExam')
  }


  return (
    <>
      <Title>创建考试</Title>

      <FormWrapper >
        <Form
          name="addZone"
          onFinish={onFinish}
          layout="vertical"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          style={{ width: 500 }}
        >
          <Form.Item
            name="zoneName"
            label="赛区名称"
            rules={[{ required: true, message: '请输入赛区名称' }]}
          >
            <Input style={{ width: 300 }} />
          </Form.Item>
          <Form.Item
            name="registrationPeriod"
            label="考试报名时间"
            rules={[{ required: true, message: '请选择考试报名时间' }]}
          >
            <DatePicker.RangePicker />
          </Form.Item>

          <Form.Item
            name="resultReleaseTime"
            label="成绩发布时间"
            rules={[{ required: true, message: '请选择成绩发布时间' }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="isPublic"
            label="是否公开显示"
            rules={[{ required: true, message: '请选择是否公开显示' }]}
          >
            <Radio.Group>
              <Radio value={true}>是</Radio>
              <Radio value={false}>否</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="examType"
            label="考试形式"
            rules={[{ required: true, message: '请选择考试形式' }]}
          >
            <Radio.Group>
              <Radio value="online">线上</Radio>
              <Radio value="offline">线下</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="examRound"
            label="考试场次"
            rules={[{ required: true, message: '请选择考试场次' }]}
          >
            <Radio.Group>
              <Radio value="preliminary">预赛</Radio>
              <Radio value="final">决赛</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="试题内容"
          >
            <ExamBox onClick={examClick}>
              试题内容（请点击进行编辑）
            </ExamBox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button type="primary" htmlType="submit">
                确认
              </Button>
            </div>
          </Form.Item>
        </Form>
      </FormWrapper>
    </>

  )
}


export default AddExam;