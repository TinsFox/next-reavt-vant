import React, { useRef } from "react";
import { Sticky, Button } from "react-vant";
const StickyPage = () => {
    const container = useRef<HTMLElement>(null);
    return <>
        <Sticky>
            <Button type="primary">基础用法</Button>
        </Sticky>
        <Sticky offsetTop={50}>
            <Button type="info">吸顶距离</Button>
        </Sticky>
        <div ref={container} style={{ height: '150px', backgroundColor: '#fff' }}>
            <Sticky container={container}>
                <Button type="warning" style={{ marginLeft: '215px' }}>
                    指定容器
                </Button>
            </Sticky>
            
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><Sticky position="bottom" offsetBottom={50}>
                <Button type="info">吸底距离</Button>
            </Sticky><br /><br /><br /><br /><br /><br /><br /><br />
    </>
}
export default StickyPage