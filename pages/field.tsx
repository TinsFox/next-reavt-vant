import React, { useState } from "react";
import { Cell, Field } from 'react-vant';
const FieldPage = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [tel, setTel] = useState("");
    const [digit, setDigit] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPasswrod] = useState("");
    return <div>
        <Cell.Group>
            <Field value={value1} type="text" label="文本" placeholder="请输入用户名" onChange={setValue1} />
        </Cell.Group>
        <Field value={value2} label="文本" onChange={setValue2} />
        <Field value={tel} type="tel" label="手机号" onChange={setTel} />
        <Field value={digit} type="digit" label="整数" onChange={setDigit} />
        <Field value={number} type="number" label="数字" onChange={setNumber} />
        <Field value={password} type="password" label="密码" onChange={setPasswrod} />
        <div>{value1}</div>
        <div>{value2}</div>
        <div>{tel}</div>
        <div>{digit}</div>
        <div>{number}</div>
        <div>{password}</div>
    </div>
}

export default FieldPage