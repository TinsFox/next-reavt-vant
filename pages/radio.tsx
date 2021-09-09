import React from "react";
import { Cell, Radio } from "react-vant";
const RadioPage = () => {
    return <div>
        <Radio.Group defaultValue="1">
            <Radio name="1">单选框 1</Radio>
            <Radio name="2">单选框 2</Radio>
        </Radio.Group>
        <Radio.Group defaultValue="1" direction="horizontal">
            <Radio name="1">单选框 1</Radio>
            <Radio name="2">单选框 2</Radio>
        </Radio.Group>
        <Radio.Group value="1">
            {/* TODO type error */}
            <Cell.Group>
                <Cell title="单选框1" icon="shop-o" rightIconSlot={() => <Radio name="1" />} />{' '}
                <Cell title="单选框2" icon="shop-o" rightIconSlot={() => <Radio name="2" />} />
            </Cell.Group>
        </Radio.Group>
    </div>
}
export default RadioPage