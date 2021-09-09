import React from "react";
import { Collapse } from "react-vant";
const initExpanded = ['1'];
const CollapsePage = () => {
    return (
        <>
            <Collapse initExpanded={initExpanded}>
                <Collapse.Item title="标题1" name="1">
                    内容
                </Collapse.Item>
                <Collapse.Item title="标题2" name="2">
                    内容
                </Collapse.Item>
                <Collapse.Item title="标题3" name="3">
                    内容
                </Collapse.Item>
            </Collapse>
            <Collapse initExpanded="1" accordion>
                <Collapse.Item title="标题1" name="1">
                    内容
                </Collapse.Item>
                <Collapse.Item title="标题2" name="2">
                    内容
                </Collapse.Item>
                <Collapse.Item title="标题3" name="3">
                    内容
                </Collapse.Item>
            </Collapse>
        </>

    )
}
export default CollapsePage