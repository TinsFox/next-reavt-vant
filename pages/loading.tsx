import React from "react";
import { Loading } from "react-vant";
const LoadingPage = () => {
    return (
        <>
            <Loading />
            <Loading type="spinner" />
            <Loading type="ball" />
            <Loading color="#1989fa" />

            <Loading type="spinner" color="#1989fa" />
            <Loading size="24" />

            <Loading type="spinner" size="24px" />
            <Loading size="24px">加载中...</Loading>
            <Loading size="24px" vertical>
                加载中...
            </Loading>
        </>

    )
}
export default LoadingPage