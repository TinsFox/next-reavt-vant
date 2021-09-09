import React, { useState } from "react";
import { NumberKeyboard, Field } from "react-vant";
const NumberKeyboardPage = () => {
    const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');

  return (
    <>
      <Field label="双向绑定" isLink value={value} onClick={() => setVisible(true)} />
      <NumberKeyboard
        value={value}
        visible={visible}
        maxlength={6}
        onChange={setValue}
        onBlur={() => {
          setVisible(false);
        }}
      />
    </>
  );
}

export default NumberKeyboardPage