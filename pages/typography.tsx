import React from "react";
import type { NextPage } from 'next'

import { Typography } from 'react-vant';
const TypographyPage: NextPage = () => {
    return (
        <div>
            <div>基础用法</div>
            <Typography.Text>这是一条文本</Typography.Text>
            <Typography.Title>这是一条标题</Typography.Title>
            <Typography.Link>这是一条链接</Typography.Link>
            <div>类型</div>
            <Typography.Text type="danger">这是一条文本</Typography.Text>
            <Typography.Text type="primary">这是一条文本</Typography.Text>
            <Typography.Text type="warning">这是一条文本</Typography.Text>
            <Typography.Text type="secondary">这是一条文本</Typography.Text>
        </div>
    )
}

export default TypographyPage