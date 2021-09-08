import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';
const StylePage = () => {
    const [show, setShow] = useState(true);
    return (<div>
        <div className="rv-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>

        <div className="rv-multi-ellipsis--l2">
            这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略
        </div>

        <div className="rv-multi-ellipsis--l3">
            这是一段最多显示三行的文字，多余的内容会被省略这是一
            段最多显示两行的文字，多余的内容会被省略这是一段最多显示两
            行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略这是
            一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略
            这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略
        </div>
        <div className="rv-hairline--top"></div>

        <div className="rv-hairline--bottom"></div>

        <div className="rv-hairline--left"></div>

        <div className="rv-hairline--right"></div>


        <div className="rv-hairline--top-bottom"></div>

        <div className="rv-hairline--surround"></div>
        <CSSTransition in={show} timeout={500} classNames="rv-fade" unmountOnExit>
            <div>Fade</div>
        </CSSTransition>
    </div>)
}
export default StylePage