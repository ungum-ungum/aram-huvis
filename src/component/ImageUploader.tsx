import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';

export const ImageUploader = () => {
    const [fileList, setFileList] = useState([]);

    const handleChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

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
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>{'Upload Image'}</div>
                </div>
            )}
        </Upload>
    );
};
