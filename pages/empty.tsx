import React from "react";
import { Button, Empty } from "react-vant";
// import "../styles/test.css"
const EmptyPage = () => {
    return (
        <>
            <Empty description="描述文字" />
            <Empty image="error" description="描述文字" />
            <Empty image="network" description="描述文字" />
            <Empty image="search" description="描述文字" />
            <Empty
                className="custom-image"
                image="https://img.yzcdn.cn/vant/custom-empty-image.png"
                description="描述文字"
            />
            <Empty description="描述文字">
                <Button round type="primary" className="bottom-button">按钮</Button>
            </Empty>
        </>
    )
}
export default EmptyPage