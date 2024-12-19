import { ImageUploader } from './ImageUploader'
import { Button, Col, Row, Table } from 'antd'
import { VStack } from './Stack'
import { useLocation } from 'react-router-dom'
import { Spacer } from './Spacer'
import { useEffect, useState } from 'react'

interface ImageAnalysis {
    _id: string
    image_id: string
    analysis_id: string
    original_image_url: string
    analysis_image_url: string
}

export const ImageAnalysis = () => {
    const { pathname } = useLocation()
    const title = pathname.replace('/', '')
    const [images, setImages] = useState<Array<ImageAnalysis>>([])
    console.log("###### IMAGES", images)
    useEffect(() => {
        fetchImages()
    }, []);

    const fetchImages = () => {
        fetch(`http://115.68.67.103:6660/${title}/images`)
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                const res = responseJson.images as unknown as Array<ImageAnalysis>
                setImages(res)
            })
            .catch((e) => {
                console.log("######## EE", e)
            })
    }

    return (
        <VStack>
            <div style={{ fontSize: 24 }}>{title}</div>
            <Spacer height={24}/>
            <Row gutter={8}>
                <div style={{ marginLeft: 'auto'}}>
                    <ImageUploader onImageUploadSuccess={() => {
                        fetchImages()
                    }}/>
                </div>
            </Row>
            <Spacer height={16}/>
            <Table
                columns={[
                    {
                        title: 'image_id',
                        key: 'image_id',
                        dataIndex: 'image_id',
                        width: 60,
                        render: (id) => (
                            <div>{id}</div>
                        ),
                    },
                    {
                        title: 'analysis_id',
                        key: 'analysis_id',
                        dataIndex: 'analysis_id',
                        width: 60,
                        render: (id) => (
                            <div>{id}</div>
                        ),
                    },
                    {
                        title: '원본 이미지',
                        key: 'original_image_url',
                        dataIndex: 'original_image_url',
                        width: 60,
                        render: (imageUrl) => (
                            <img src={imageUrl} width={300}/>
                        ),
                    },
                    {
                        title: '분석 이미지',
                        key: 'analysis_image_url',
                        dataIndex: 'analysis_image_url',
                        width: 60,
                        render: (value, record, any) => {
                            console.log("#######", value, record, any)
                            if (!record.analysis_image_url || !record.analysis_id) {
                                return <div style={{ fontSize: 24 }}>{'분석중입니다...'}</div>
                            }
                            return <img src={record.analysis_image_url} width={300}/>
                        },
                    }
                ]}
                dataSource={images}
            />
        </VStack>


    )
}
