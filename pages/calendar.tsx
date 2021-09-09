import React from "react";
import { useState } from 'react';
import { Cell, Calendar } from 'react-vant';
const CalendarPage: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');

    const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = ([start, end]) => {
        setText(`${formatDate(start)} - ${formatDate(end)}`);
        setVisible(false);
    };
    return (
        <>
            <Cell title="选择日期区间" value={text} onClick={() => setVisible(true)} />
            <Calendar type="range" visible={visible} onConfirm={onConfirm} />
        </>
    );
}
export default CalendarPage