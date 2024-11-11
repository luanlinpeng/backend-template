import { Button, Input, message } from 'antd';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';


const TeacherReviewPage = styled.div`
  padding: 20px;
`

const DetailBox = styled.div`
  padding: 20px;
  border: 1px solid #9999998d;
  border-radius: 10px;
`
const ReviewBox = styled.div`
  padding: 20px;
 
`

const ButtonsBox = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`

const { TextArea } = Input;

const TeacherRegisterDetail = () => {

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const [value, setValue] = useState('');

  const handleNoPass = () => {
    if (value) {
      message.success('驳回成功');
    } else {
      message.error('请输入驳回理由');
    }
  }

  return (
    <>
      <TeacherReviewPage>
        <DetailBox>
          {id}
        </DetailBox>
        <ReviewBox>
          <p style={{ marginBottom: 10, fontSize: 14, fontWeight: 600 }}>请填写审核意见</p>
          <TextArea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="请输入审核意见"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
          <ButtonsBox>
            <Button type="primary">通过</Button>
            <Button color="danger" variant="solid" onClick={handleNoPass}>驳回</Button>
          </ButtonsBox>
        </ReviewBox>

      </TeacherReviewPage>
    </>
  )
}

export default TeacherRegisterDetail;