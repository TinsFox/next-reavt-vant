import React, { useState } from "react";
import { Steps } from "react-vant";
const StepsPage = () => {
    const [active, setActive] = useState(0);
    return (
        <>
            <Steps active={active}>
                <Steps.Item>买家下单</Steps.Item>
                <Steps.Item>商家接单</Steps.Item>
                <Steps.Item>买家提货</Steps.Item>
                <Steps.Item>交易完成</Steps.Item>
            </Steps>
            <Steps active={active} activeIcon="success" activeColor="#38f">
                <Steps.Item>买家下单</Steps.Item>
                <Steps.Item>商家接单</Steps.Item>
                <Steps.Item>买家提货</Steps.Item>
                <Steps.Item>交易完成</Steps.Item>
            </Steps>
            <Steps direction="vertical" active={0}>
                <Steps.Item>
                    <h3>【城市】物流状态1</h3>
                    <p>2016-07-12 12:40</p>
                </Steps.Item>
                <Steps.Item>
                    <h3>【城市】物流状态2</h3>
                    <p>2016-07-11 10:00</p>
                </Steps.Item>
                <Steps.Item>
                    <h3>快件已发货</h3>
                    <p>2016-07-10 09:30</p>
                </Steps.Item>
            </Steps>
        </>
    )
}
export default StepsPage