import React, { useState } from "react";
import { Flex, Skeleton, Switch, Typography } from "react-vant";
const SkeletonPage = () => {
    const [loading, setLoading] = useState(true);
    return (
        <>
            <Skeleton title row={4} />
            <Skeleton avatar />
            <Skeleton rowHeight={10} />
            <Switch checked={loading} onChange={setLoading} size={24} />
            <Skeleton avatar loading={loading}>
                <Flex className="demo-preview">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="12" src="https://img.yzcdn.cn/vant/logo.png" />
                    <div className="demo-content">
                        <Typography.Title>关于 Vant</Typography.Title>
                        <Typography.Text type="secondary">
                            Vant 是一套轻量、可靠的移动端 Vue
                            组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
                        </Typography.Text>
                    </div>
                </Flex>
            </Skeleton>
        </>
    )
}
export default SkeletonPage