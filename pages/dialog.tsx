import React from "react";
import { Dialog } from "react-vant";
const DialogPage = () => {
    return (
        <div onClick={() => {
            Dialog.confirm({
                title: '标题',
                message: '弹窗内容',
            })
                .then((res) => {
                    console.log(res);
                    // on confirm
                })
                .catch((err) => {
                    console.log('catch',err);
                    
                    // on cancel
                });
        }}>基础用法</div>
    )
}
export default DialogPage