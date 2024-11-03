import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import React from 'react'
import { Content } from 'antd/es/layout/layout'
import { SideBar } from './component/SideBar'

function App() {
    return (
        <Router>
            <Layout style={{minHeight: '100vh'}}>
                {/* Sidebar */}
                <SideBar/>

                {/* Main Content Area */}
                <Layout style={{padding: '24px'}}>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: '#fff'
                        }}
                    >
                        <Routes>
                            <Route path="/hemo" element={<div/>}/>
                            <Route path="/melanin" element={<div/>}/>
                            <Route path="/pore" element={<div/>}/>
                            <Route path="/wrinkle" element={<div/>}/>
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
};

export default App;
