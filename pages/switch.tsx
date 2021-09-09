import React, { useState } from "react";
import { Cell, Dialog, Switch } from "react-vant";
const SwitchPage = () => {
    const [value, setValue] = useState(false)
    return <>
        <Switch defaultChecked />
        <Switch defaultChecked disabled />
        <Switch defaultChecked loading />
        <Switch defaultChecked size="24px" />
        <Switch
            checked={value}
            onChange={(checked) => {
                Dialog.confirm({
                    title: '提醒',
                    message: '是否切换开关？',
                }).then(() => {
                    setValue(checked);
                });
            }}
        />
        <Cell
            center
            title="标题"
            rightIcon={
                <Switch size={24} defaultChecked onChange={(checked) => console.log(`switch to ${checked}`)} />
            }
        />
    </>
}
export default SwitchPage
