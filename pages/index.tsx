import type { NextPage } from 'next'
import { NavBar } from 'react-vant';
enum color {
  RED = '#ff603f',
  BLUE = '#2879ff',
  GREEN = '#00c853',
  WHITE = '#fff',
  GRAY = '#c9c9c9',
  GRAY_DARK = '#969799'
}
interface ComponentItem {
  id: number
  name: string
  href: string
  color: color
}

const ComponentsList: Array<ComponentItem> = [
  { id: 1, name: "Button按钮", href: "/button", color: color.RED },
  { id: 2, name: "Typography 文本", href: "/typography", color: color.BLUE },
  { id: 3, name: "Cell 单元格", href: "cell", color: color.GREEN },
  { id: 4, name: "Icon 图标", href: "icon", color: color.GRAY },
  { id: 5, name: "Image 图片", href: "image", color: color.GRAY },
  { id: 6, name: "Popup 弹出层", href: "popup", color: color.GRAY },
  { id: 7, name: "内置样式", href: "style", color: color.GRAY },
  { id: 8, name: "Toast 轻提示", href: "toast", color: color.GRAY },

]
import Link from "next/link"
import React from 'react';
const Home: NextPage = () => {
  return (
    <div>
      <NavBar title="react-vant" />
      <div style={{ margin: "10px" }}>
        {
          ComponentsList.map(item => {
            return (<React.Fragment key={item.id}>
              {/* eslint-disable-next-line @next/next/link-passhref */}
              <Link href={item.href}>
                <div style={{ textAlign: "center", background: `${item.color}`, padding: "10px", color: "#fff", margin: "2px" }}>
                  {item.name}
                </div>
              </Link>
            </React.Fragment>)
          })
        }
      </div>

    </div>
  )
}

export default Home
