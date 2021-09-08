import type { NextPage } from 'next'
import React, { useState } from 'react';
import { Popup } from 'react-vant'
import { Cell } from 'react-vant';
const PopupPage: NextPage = () => {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <>
            基础用法
            <Cell title="展示弹出层" isLink onClick={() => setShowPopup(true)} />
            <Popup
                visible={showPopup}
                closeable
                title="标题"
                descrition="这是一段很长很长的描述"
                style={{ height: '30%' }}
                position="bottom"
                round
            />
        </>)
}
export default PopupPage