import React, { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Button, Menu, Popconfirm, Tooltip, } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { logout } from '../api/api';


const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

const Sider = styled.div`
  overflow: auto;
  height: 100vh;
  width: 250px;
  padding-top: 10px;
  background-color: #fff;
  position: sticky;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #99999961;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease; /* 添加过渡效果 */
`;

const PortraitImg = styled.img`
  border-radius: 50%;
`

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px 18px;
`

const Content = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const LayoutContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #f5f5f5;
`
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

const items: MenuItem[] = [
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

const defaultCurrent: MenuItem = {
  key: 'examRoomManagement',
  label: '考场管理',
  icon: <AppstoreOutlined />,
};

const PageLayout: React.FC = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState<MenuItem>(defaultCurrent);
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false); // 新增状态

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
      setCurrent(matchedItem);
    } else {
      // 如果没有匹配的路由，设置为默认值
      setCurrent(defaultCurrent);
    }

    if (matchedItem) {
      setCurrent(matchedItem);
    } else {
      // 如果没有匹配的路由，设置为默认值
      setCurrent(defaultCurrent);
    }

  }, [location.pathname])

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  };
  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <LayoutContent >
        <Sider style={{ width: collapsed ? '70px' : '250px' }}> {/* 根据状态调整宽度 */}
          <div>
            <Title>
              {!collapsed && <span>CESO管理系统</span>}
              <Button onClick={toggleSider} style={{ marginLeft: 'auto' }} icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} />
            </Title>
            <Menu
              onClick={onClick}
              style={{ width: '100%', visibility: collapsed ? 'hidden' : 'visible' }}
              defaultSelectedKeys={['examRoomManagement']}
              defaultOpenKeys={['userManagement']}
              mode="inline"
              items={items}
              selectedKeys={[current.key]}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
            {!collapsed &&
              <PortraitImg style={{ width: 30, height: 30, borderRadius: '50%' }} src="/src/assets/images/defaultProtrait.jpg" />}
            <Popconfirm
              title="确认退出登录？"
              onConfirm={() => {
                logout().then((res) => {
                  if (res.code === 200) {
                    navigate('/login');
                  }
                });
              }}
              okText="确认"
              cancelText="取消"
            >
              <LogoutOutlined style={{ fontSize: 20, cursor: 'pointer' }} />
            </Popconfirm>
          </div>
        </Sider>
        <Main>
          <Breadcrumb style={{ marginBottom: '13px' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>{current.label}</Breadcrumb.Item>
          </Breadcrumb>
          <Content>
            <Outlet />
          </Content>
        </Main>
      </LayoutContent>
    </Layout>
  );
};

export default PageLayout;