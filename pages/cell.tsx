import type { NextPage } from 'next';
import React from "react";
import { Cell } from 'react-vant';
const CellPage: NextPage = () => {
    return (
        <>
            <div>基础用法</div>
            <Cell.Group>
                <Cell title="单元格" value="内容" />
                <Cell title="单元格" value="内容" label="描述信息" />
            </Cell.Group>
            <div>单元格大小</div>
            <Cell title="单元格" value="内容" size="large" />
            <Cell title="单元格" value="内容" label="描述信息" size="large" />
            <div>展示图标</div>
            <Cell title="单元格" icon="location-o" />
            <div>只设置 value</div>
            <Cell value="内容" />
            <div>展示箭头</div>
            <Cell title="单元格" isLink />
            <Cell title="单元格" isLink value="内容" />
            <Cell title="单元格" isLink arrowDirection="down" value="内容" />
            <div>分组标题</div>
            <Cell.Group title="分组1">
                <Cell title="单元格" value="内容" />
            </Cell.Group>
            <Cell.Group title="分组2">
                <Cell title="单元格" value="内容" />
            </Cell.Group>
            <div>
                卡片类型
            </div>
            <Cell.Group inset>
                <Cell title="单元格" value="内容" />
                <Cell title="单元格" value="内容" />
            </Cell.Group>
            <div>
                自定义内容
            </div>
            <Cell title="单元格" icon="shop-o">
                <div>自定义内容</div>
            </Cell>
            <div>垂直居中</div>
            <Cell center title="单元格" value="内容" label="描述信息" />
        </>
    )
}
export default CellPage