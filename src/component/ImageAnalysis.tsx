import { ImageUploader } from './ImageUploader'
import { Col, Row } from 'antd'
import { VStack } from './Stack'
import { useLocation } from 'react-router-dom'
import { Spacer } from './Spacer'

export const ImageAnalysis = () => {
    const { pathname } = useLocation()
    console.log("##", pathname)
    const title = pathname.replace('/', '')
    return (
        <VStack>
            <div style={{ fontSize: 24 }}>{title}</div>
            <Spacer height={24}/>
            <Row gutter={8}>
                <Col span={4}>
                    <ImageUploader/>
                </Col>

                <Col span={8}>
                    <VStack maxWidth={400} backgroundColor={'#F3F3F6'} borderRadius={24} paddingBlock={16} paddingInline={16}>
                        <img src={'https://i.ibb.co/zF1y0NJ/2024-11-03-5-21-41.png'}/>
                    </VStack>
                </Col>
            </Row>
        </VStack>


    )
}
