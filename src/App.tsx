import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import React from 'react'
import { Content } from 'antd/es/layout/layout'
import { SideBar } from './component/SideBar'
import { ImageAnalysis } from './component/ImageAnalysis'

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
                            <Route path="/hemo" element={<ImageAnalysis/>}/>
                            <Route path="/melanin" element={<ImageAnalysis/>}/>
                            <Route path="/pore" element={<ImageAnalysis/>}/>
                            <Route path="/wrinkle" element={<ImageAnalysis/>}/>
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
};

export default App;
