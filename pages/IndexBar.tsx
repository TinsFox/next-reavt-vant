import React from 'react'
import { Cell, IndexBar } from 'react-vant'
const indexList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export default function IndexBarPage() {
    return (
        <div>
            <IndexBar indexList={indexList}>
                <IndexBar.Anchor index="A" />
                <Cell title="文本" />
                <Cell title="文本" />
                <Cell title="文本" />
                <IndexBar.Anchor index="B" />
                <Cell title="文本" />
                <Cell title="文本" />
                <Cell title="文本" />
            </IndexBar>
        </div>
    )
}
