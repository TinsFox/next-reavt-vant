import React, { useState } from "react";
import { Rate } from "react-vant";
const RatePage = () => {
    const [value, setValue] = useState(3.5);
    return (<div>
        <Rate defaultValue={3} size={25} color="#ffd21e" voidIcon="star" voidColor="#eee" />
        <Rate defaultValue={3.5} icon="like" voidIcon="like-o" allow-half />
        <Rate defaultValue={3.5} allowHalf />
    </div>)
}
export default RatePage