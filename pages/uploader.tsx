import React, { useState } from "react";
import { Uploader } from "react-vant";
const UploaderPage = () => {
    const [demo, setDemo] = useState([
        {
            url: 'https://img.yzcdn.cn/vant/leaf.jpg',
            status: 'uploading',
            message: '上传中...',
        },
        {
            url: 'https://img.yzcdn.cn/vant/tree.jpg',
            status: 'failed',
            message: '上传失败',
        },
    ]);

    const afterRead = (file, { index }) => {
        file.status = 'uploading';
        file.message = '上传中...';
        const newDemo = demo.slice(0);
        newDemo[index] = file;
        setDemo(newDemo);

        setTimeout(() => {
            file.status = 'failed';
            file.message = '上传失败';

            setDemo((v) => {
                const nv = v.slice(0);
                nv[index] = file;
                return nv;
            });
        }, 1000);
    };
    return (
        <>
            <Uploader afterRead={(file) => console.log(file)} />
            <Uploader value={demo} afterRead={afterRead} onChange={(v) => setDemo(v)} />;
        </>
    )
}
export default UploaderPage