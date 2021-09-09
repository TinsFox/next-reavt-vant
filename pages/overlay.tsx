import React, { useState } from "react";
import { Button, OverLay } from "react-vant";
const OverlayPage = () => {
    const [show, setShow] = useState(false);
    const [showEmbedded, setShowEmbedded] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setShow(true)}>显示遮罩层</Button>
            <Button type="primary" onClick={() => setShowEmbedded(true)}>嵌入内容</Button>
            <OverLay visible={show} onClick={() => setShow(false)} />
            <OverLay visible={showEmbedded} onClick={() => setShowEmbedded(false)}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%"
                }}>
                    <div style={{
                        width: "120px",
                        height: "120px",
                        backgroundColor: "#fff",
                        borderRadius: "4px"
                    }} />
                </div>
            </OverLay>
        </>
    )
}
export default OverlayPage