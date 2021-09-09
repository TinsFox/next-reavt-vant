import React, { useState } from "react";
import { Stepper } from "react-vant";
const StepperPage = () => {
    const [value, setValue] = useState(1)
    return (<>
        <Stepper value={value} onChange={val => setValue(val)} />
        <Stepper value={value} step="2" onChange={val => setValue(val)}/>
        <Stepper value={value} theme="round" buttonSize="22" disableInput />
    </>)
}
export default StepperPage