import React from "react";
import type { NextPage } from "next"
import { Icon } from 'react-vant';
const IconPage: NextPage = () => {
    return (
        <>
            <div>基础用法</div>
            <Icon name="chat-o" />
            <Icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />

            <Icon name="chat-o" badge={{ dot: true }} />
            <Icon name="chat-o" badge={{ content: "99+" }} />

            <Icon name="cart-o" color="#1989fa" />
            <Icon name="fire-o" color="#ee0a24" />

            <Icon name="chat-o" size="40" />
            <Icon name="chat-o" size="3rem" />
        </>
    )
}
export default IconPage