import React from "react";
import { NavBar, Toast } from 'react-vant';
import { useRouter } from 'next/router'

const TabBarListArray: string[] = ['/', '/cart', '/mine', '/consult']

const Layout: React.FC = ({ children }) => {
    const Route = useRouter()
    const { route } = Route
    const LeftArrowShow = TabBarListArray.includes(route)
    if (!TabBarListArray.includes(route)) {
        return (
            <>
                <NavBar
                    title="标题"
                    leftArrow={!LeftArrowShow}
                    onClickLeft={() => Route.back()}
                    onClickRight={() => Toast.info('按钮')}
                />
                <div  style={{margin:"10px"}}>{children}</div>
            </>
        )
    } else {
        return (
            <div  style={{margin:"10px"}}>{children}</div>
        )
    }
}

export default Layout