import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useRoutes, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Spacer } from './Spacer'

const { Sider, Content } = Layout;

export const SideBar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation()
    console.log("##", pathname)
    return (
        <Sider width={200} className="site-layout-background">
            <Spacer height={60}/>
            <img
                style={{ width: 200 }}
                src={'https://www.aramhuvis.com/wp-content/uploads/2024/11/aram-logo_white.png'}
            />
            <Spacer height={20}/>
            <Menu
                theme={'dark'}
                mode="inline"
                defaultSelectedKeys={[pathname]}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="/hemo" onClick={() => navigate('/hemo')}>
                    Hemo
                </Menu.Item>
                <Menu.Item key="/pore" onClick={() => navigate('/pore')}>
                    Pore
                </Menu.Item>
                <Menu.Item key="/wrinkle " onClick={() => navigate('/wrinkle')}>
                    Wrinkle
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

// const MenuContainer = styled.div({
//     '.ant-menu-title-content': {
//         paddingLeft: 16,
//     },
//     '.ant-badge-dot': {
//         boxShadow: 'none',
//     },
//     '.ant-menu-dark .ant-menu-submenu .ant-badge': {
//         color: '#ffffff',
//         opacity: 0.65,
//     },
//     '.ant-menu-dark .ant-menu-item .ant-badge': {
//         color: '#ffffff',
//         opacity: 0.65,
//     },
//     '.ant-menu-dark .ant-menu-item-selected .ant-badge': {
//         color: '#ffffff',
//         opacity: 1,
//     },
//     'a:hover': {
//         textDecoration: 'none',
//     },
// })

