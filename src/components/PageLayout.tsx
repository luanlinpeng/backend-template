import React, { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';


const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: space-between;

`

const Sider = styled.div`
  overflow: auto;
  height: 100vh;
  width: 300px;
  position: sticky;
  top: 0;
  bottom: 0;
`;

const PortraitImg = styled.img`
  border-radius: 50%;
`

const Content = styled.div`
  flex: 1;
  padding: 10px;
`

const items: any[] = [
  {
    key: 'zoneManagement',
    label: '赛区管理',
    icon: <AppstoreOutlined />,
  },
  {
    key: 'examineeManagement',
    label: '考生管理',
    icon: <AppstoreOutlined />,
  },
  {
    key: 'examRoomManagement',
    label: '考场管理',
    icon: <AppstoreOutlined />,
  },
  {
    key: 'userManagement',
    label: '用户管理',
    icon: <AppstoreOutlined />,
    children: [
      { key: 'infoReview', label: '信息审核', },
      { key: 'systemUser', label: '系统用户' },
    ],
  },
  {
    key: 'examManagement',
    label: '考试管理',
    icon: <AppstoreOutlined />,
  },
  {
    key: 'achievementManagement',
    label: '成绩管理',
    icon: <AppstoreOutlined />,
  },
  {
    key: 'setUp',
    label: '设置',
    icon: <AppstoreOutlined />,
  },
];

const PageLayout: React.FC = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('examRoomManagement');
  const location = useLocation();

  useEffect(() => {
    // 获取一级路由
    const primaryPath = location.pathname.split('/')[1];
    console.log('primaryPath', primaryPath);
    // 设置当前选中的菜单项
    // 将items打平
    const flattenedItems = items.reduce((acc, item) => {
      if (item.children) {
        return [...acc, item, ...item.children];
      }
      return [...acc, item];
    }, []);

    // 找到key与primaryPath匹配的项
    const matchedItem = flattenedItems.find(item => item.key === primaryPath);
    if (matchedItem) {
      setCurrent(matchedItem.key);
    } else {
      // 如果没有匹配的路由，设置为默认值
      setCurrent('zoneManagement');
    }

    if (matchedItem) {
      setCurrent(matchedItem.key);
    } else {
      // 如果没有匹配的路由，设置为默认值
      setCurrent('zoneManagement');
    }

  }, [location.pathname])

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  };


  return (
    <Layout>
      <Sider>
        <Menu
          onClick={onClick}
          style={{ width: 300 }}
          defaultSelectedKeys={['examRoomManagement']}
          defaultOpenKeys={['userManagement']}
          mode="inline"
          items={items}
          selectedKeys={[current]}
        />
        <div>
          <PortraitImg src="" />
        </div>
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default PageLayout;