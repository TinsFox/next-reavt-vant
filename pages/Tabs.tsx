import React from 'react'
import { Tabs, Toast } from 'react-vant'

export default function TabsPage() {
    return (
        <>
            <Tabs active="active">
                <Tabs.TabPane title="标签 1">内容 1</Tabs.TabPane>
                <Tabs.TabPane title="标签 2">内容 2</Tabs.TabPane>
                <Tabs.TabPane title="标签 3">内容 3</Tabs.TabPane>
                <Tabs.TabPane title="标签 4">内容 4</Tabs.TabPane>
            </Tabs>
            <Tabs active="b">
                <Tabs.TabPane title="标签 1" name="a">
                    内容 1
                </Tabs.TabPane>
                <Tabs.TabPane title="标签 2" name="b">
                    内容 2
                </Tabs.TabPane>
                <Tabs.TabPane title="标签 3" name="c">
                    内容 3
                </Tabs.TabPane>
            </Tabs>
            <Tabs>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <Tabs.TabPane key={item} title={`标签${item}`}>
                        内容 {item}
                    </Tabs.TabPane>
                ))}
            </Tabs>
            <Tabs>
                <Tabs.TabPane title="标签1">内容1</Tabs.TabPane>
                <Tabs.TabPane title="标签2" disabled>
                    内容2
                </Tabs.TabPane>
                <Tabs.TabPane title="标签3">内容3</Tabs.TabPane>
            </Tabs>
            <Tabs type="card">
                <Tabs.TabPane title="标签 1">内容 1</Tabs.TabPane>
                <Tabs.TabPane title="标签 2">内容 2</Tabs.TabPane>
                <Tabs.TabPane title="标签 3">内容 3</Tabs.TabPane>
            </Tabs>
            <Tabs onClick={(name, title) => Toast(title)}>
                <Tabs.TabPane title="标签1">内容1</Tabs.TabPane>
                <Tabs.TabPane title="标签2">内容2</Tabs.TabPane>
            </Tabs>
            <Tabs active={2} sticky>
                {[1, 2, 3, 4].map((item) => (
                    <Tabs.TabPane key={item} title={`标签${item}`}>
                        <div style={{ height: '50vh' }}>内容 {item}</div>
                    </Tabs.TabPane>
                ))}
            </Tabs>
            <Tabs sticky scrollspy>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <Tabs.TabPane key={item} title={`标签${item}`}>
                        内容 {item}
                    </Tabs.TabPane>
                ))}
            </Tabs>
        </>
    )
}
