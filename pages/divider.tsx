import React from "react";
import { Divider } from "react-vant";
const DividerPage = () => {
    return (
        <>
            <Divider />
            <Divider>文字</Divider>
            <Divider content-position="left">文字</Divider>
            <Divider content-position="right">文字</Divider>
            <Divider dashed>文字</Divider>
            <Divider style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }}>文字</Divider>
        </>
    )
}
export default DividerPage