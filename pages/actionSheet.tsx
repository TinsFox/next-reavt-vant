import React, { useState } from "react";
import { Cell, ActionSheet } from "react-vant";
const actions = [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }];

const ActionSheetPage = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <Cell isLink onClick={() => setVisible(true)} title="基础用法" />
            <ActionSheet visible={visible} onCancel={() => setVisible(false)} actions={actions} onSelect={(item, index) => {
                console.log(item, index);
                setVisible(false)
            }} /></>
    )
}
export default ActionSheetPage