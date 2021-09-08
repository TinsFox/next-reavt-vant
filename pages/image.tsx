import React from "react";
import type { NextPage } from "next"
import { Image,Loading } from 'react-vant';
const ImagePage: NextPage = () => {
    return (
        <>
            <Image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <Image width="10rem" height="10rem" fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <Image round width="10rem" height="10rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <Image
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                loadingIcon={<Loading type="spinner" />}
            />
        </>
    )
}
export default ImagePage