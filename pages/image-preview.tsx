import React, { useState } from "react";
import { Button, ImagePreview, Toast } from "react-vant";
const ImagePreviewPage = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button onClick={() => {
                ImagePreview.open({
                    images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
                    onClose() {
                      Toast('关闭');
                    },
                  });
            }}>函数调用</Button>
            <Button onClick={() => setVisible(true)}>组件调用</Button>

            <ImagePreview
                visible={visible}
                onClose={() => setVisible(false)}
                images={['https://img.yzcdn.cn/vant/apple-1.jpg']}
            />
        </>
    )
}
export default ImagePreviewPage