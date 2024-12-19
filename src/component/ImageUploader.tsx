import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';

export const ImageUploader = () => {
    const [fileList, setFileList] = useState([]);

    const handleChange = ({fileList: newFileList}) => {
        console.log("###### NEW FILE LIST", newFileList)
        // setFileList(newFileList);
        const formData = new FormData();
        newFileList.forEach((file) => {
            formData.append('file', file.originFileObj); // Append files to the form data
        });

        console.log("########", formData)

        fetch('http://115.68.67.103:6660/request', {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: formData
        }).then((r) => {
            return r.json()
        }).then((aa) => {
            console.log("#########", aa)
        })
            .catch((e) => {
                console.log("######## ERROR", e)
            })
    }

    return (
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
    );
};
