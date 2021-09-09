import React, { useState } from "react";
import { Toast, Slider } from "react-vant";
const SliderPage=()=>{
    const [value, setValue] = useState(10);
    const onChangeAfter = (v) => Toast.info(`当前值：${v}`);
    return <Slider value={value} onChange={setValue} onChangeAfter={onChangeAfter} />;
}
export default SliderPage
