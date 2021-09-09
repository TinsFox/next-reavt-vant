import React from "react";
import { PullRefresh } from "react-vant";
const onRefresh = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });
};
const PullRefreshPage = () => {
    return (
        <PullRefresh successText="刷新成功" onRefresh={onRefresh}>
        <p>下拉刷新</p>
      </PullRefresh>
    )
}
export default PullRefreshPage