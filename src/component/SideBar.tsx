import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useRoutes, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Sider, Content } = Layout;

export const SideBar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation()
    console.log("##", pathname)
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={[pathname]}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="/hemo" onClick={() => navigate('/hemo')}>
                    Hemo
                </Menu.Item>
                <Menu.Item key="/melanin" onClick={() => navigate('/melanin')}>
                    Melanin
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
