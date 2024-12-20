import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { VStack } from './Stack'

interface Props {
    title: string
    onImageUploadSuccess: () => void
}

export const ImageUploader = (props: Props) => {
    const {title, onImageUploadSuccess} = props
    const [fileList, setFileList] = useState([]);

    const handleChange = ({fileList: newFileList}) => {
        console.log("###### NEW FILE LIST", newFileList)
        // setFileList(newFileList);
        const formData = new FormData();
        newFileList.forEach((file) => {
            formData.append('file', file.originFileObj); // Append files to the form data
        });

        console.log("########", formData)

        fetch(`http://115.68.67.103:6660/${title}/request`, {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: formData
        }).then((r) => {
            return r.json()
        }).then((aa) => {
            onImageUploadSuccess()
            message.success('이미지를 성공적으로 업로드했습니다')
        })
            .catch((e) => {
                console.log("######## ERROR", e)
            })
    }

    return (
        <VStack>
            <Upload
                accept="image/*"               // Accepts only image files
                listType="picture-card"         // Display as picture card
                fileList={fileList}             // Current list of files
                onChange={handleChange}         // Update file list on change
                beforeUpload={() => false}      // Prevent automatic upload
            >
                {fileList.length >= 8 ? null : (
                    <div>
                        <PlusOutlined/>
                        <div style={{marginTop: 8}}>{'이미지 업로드'}</div>
                    </div>
                )}
            </Upload>
            <a href="/demo-data.zip" download>
                ...
            </a>
        </VStack>
    )
        ;
};
