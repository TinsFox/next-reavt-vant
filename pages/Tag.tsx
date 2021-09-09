import React, { useState } from 'react'
import { Tag } from 'react-vant'

export default function TagPage() {
    const [show,setShow]= useState(true)
    return (
        <div>
            <Tag type="primary">标签</Tag>
            <Tag type="success">标签</Tag>
            <Tag type="danger">标签</Tag>
            <Tag type="warning">标签</Tag>
            <Tag plain type="primary">
                标签
            </Tag>
            <Tag round type="primary">
                标签
            </Tag>
            <Tag mark type="primary">
                标签
            </Tag>
            <Tag show={show} closeable size="medium" type="primary" onClose={() => setShow(false)}>
                标签
            </Tag><Tag type="primary" size="mini">标签</Tag>
            <Tag type="primary">标签</Tag>
            <Tag type="primary" size="medium">标签</Tag>
            <Tag type="primary" size="large">标签</Tag>
            <Tag color="#7232dd">标签</Tag>
            <Tag color="#ffe1e1" text-color="#ad0000">标签</Tag>
            <Tag color="#7232dd" plain>标签</Tag>
        </div>
    )
}
