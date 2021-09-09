import React, { useEffect } from "react";
import { Toast } from 'react-vant';

const ToastPage = () => {

    useEffect(() => {
        // Toast('提示内容');
        // Toast.info({ message: '提示内容' });
        // Toast.loading({
        //     message: '加载中...',
        //     forbidClick: true,
        //   });
        // Toast.success('成功文案');
        // Toast.fail('失败文案');
        if (typeof window !== "undefined") {
            let remain = 4;
            const updateConfig = Toast.info({
                message: `还剩 ${remain + 1} 秒`,
                duration: 5000,
                onClose: () => clearInterval(timer),
            });
            const timer = setInterval(() => {
                updateConfig({ message: `还剩 ${remain--} 秒` });
            }, 1000);
        }
    }, [])
    return (
        <>
            <div onClick={() => {
                let remain = 4;
                const updateConfig = Toast.info({
                    message: `还剩 ${remain + 1} 秒`,
                    duration: 5000,
                    onClose: () => clearInterval(timer),
                });
                const timer = setInterval(() => {
                    updateConfig({ message: `还剩 ${remain--} 秒` });
                }, 1000);
            }}>动态更新</div>
        </>
    )
}
export default ToastPage