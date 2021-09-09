import React from "react";
import { NoticeBar, Swipe } from "react-vant";
const NoticeBarPage = () => {
    return (
        <>
            <NoticeBar leftIcon="speaker-s" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
            <NoticeBar scrollable text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
            <NoticeBar wrapable text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
            <NoticeBar mode="closeable">技术是开发它的人的共同灵魂。</NoticeBar>
            <NoticeBar mode="link">技术是开发它的人的共同灵魂。</NoticeBar>
            <NoticeBar color="#1989fa" background="#ecf9ff" leftIcon="info">
                技术是开发它的人的共同灵魂。
            </NoticeBar>
            <NoticeBar leftIcon="info">
                <Swipe autoplay={3000} vertical className="notice-swipe">
                    <Swipe.Item>内容 1</Swipe.Item>
                    <Swipe.Item>内容 2</Swipe.Item>
                    <Swipe.Item>内容 3</Swipe.Item>
                </Swipe>
            </NoticeBar>
        </>
    )
}
export default NoticeBarPage