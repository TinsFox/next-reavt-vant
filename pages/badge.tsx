import React from "react";
import { Badge } from "react-vant";
const BadgePage = () => {
    return (
        <div>
            <Badge content="5">
            <div className="child" />
        </Badge>
            <Badge content="10" max={2}>
                <div className="child" />
            </Badge>
            <Badge content="Hot">
                <div className="child" />
            </Badge>
            <Badge dot>
                <div className="child" />
            </Badge></div>
    )
}
export default BadgePage