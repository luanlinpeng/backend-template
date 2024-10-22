import { Button } from 'antd';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageNotFoundContainer = styled.div`
  max-width: 520px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
`;

const PageNotFoundTextContainer = styled.div`
  position: relative;
  height: 240px;
`;

const NumberContainer = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 252px;
  font-weight: 900;
  margin: 0px;
  color: #262626;
  text-transform: uppercase;
  letter-spacing: -40px;
  margin-left: -20px;
`;

const Number = styled.span`
  text-shadow: -8px 0px 0px #fff;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: #000;
  margin-top: 0px;
  margin-bottom: 25px;
`;

export const NoPageFound = ({
  path = '/',
  tip = '返回首页',
}: {
  path?: string;
  tip?: string;
}) => {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate(path);
  };

  return (
    <MainContainer>
      <PageNotFoundContainer>
        <PageNotFoundTextContainer>
          <NumberContainer>
            <Number>4</Number>
            <Number>0</Number>
            <Number>4</Number>
          </NumberContainer>
        </PageNotFoundTextContainer>
        <SubTitle>未找到您请求的页面，</SubTitle>
        <Button onClick={goToHomepage}>{tip}</Button>
      </PageNotFoundContainer>
    </MainContainer>
  );
};
