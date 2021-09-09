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
  { id: 9, name: "Cascader 级联选择器", href: "cascader", color: color.GRAY },
  { id: 10, name: "Checkbox 复选框", href: "checkbox", color: color.GRAY },
  { id: 11, name: "Calendar 日历", href: "calendar", color: color.GRAY },
  { id: 12, name: "Field 输入框", href: "field", color: color.GRAY },
  { id: 13, name: "DatetimePicker 时间选择", href: "datetime-picker", color: color.GRAY },
  { id: 14, name: "NumberKeyboard 数字键盘", href: "number-keyboard", color: color.GRAY },
  { id: 15, name: "PasswordInput 密码输入框", href: "password-input", color: color.GRAY },
  { id: 16, name: "Picker 选择器", href: "picker", color: color.GRAY },
  { id: 17, name: "Radio 单选框", href: "radio", color: color.GRAY },
  { id: 18, name: "Rate 评分", href: "rate", color: color.GRAY },
  { id: 19, name: "Search 搜索", href: "search", color: color.GRAY },
  { id: 20, name: "Slider 滑块", href: "slider", color: color.GRAY },
  { id: 21, name: "Stepper 步进器", href: "stepper", color: color.GRAY },
  { id: 22, name: "Switch 开关", href: "switch", color: color.GRAY },
  { id: 23, name: "Uploader 文件上传", href: "uploader", color: color.GRAY },
  { id: 24, name: "ActionSheet 动作面板", href: "actionSheet", color: color.GRAY },
  { id: 25, name: "Dialog 弹出框", href: "dialog", color: color.GRAY },
  { id: 26, name: "DropdownMenu 下拉菜单", href: "dropdownMenu", color: color.GRAY },
  { id: 27, name: "Loading 加载", href: "loading", color: color.GRAY },
  { id: 28, name: "Notify 消息提示", href: "notify", color: color.GRAY },
  { id: 29, name: "Overlay 遮罩层", href: "overlay", color: color.GRAY },
  { id: 30, name: "PullRefresh 下拉刷新", href: "pullRefresh", color: color.GRAY },
  { id: 31, name: "ShareSheet 分享面板", href: "shareSheet", color: color.GRAY },
  { id: 32, name: "SwipeCell 滑动单元格", href: "swipeCell", color: color.GRAY },
  { id: 33, name: "Badge 徽标", href: "badge", color: color.GRAY },
  { id: 34, name: "Collapse 折叠面板", href: "collapse", color: color.GRAY },
  { id: 35, name: "CountDown 倒计时", href: "count-down", color: color.GRAY },
  { id: 36, name: "Divider 分割线", href: "divider", color: color.GRAY },
  { id: 37, name: "Empty 空状态", href: "empty", color: color.GRAY },
  { id: 38, name: "ImagePreview 图片预览", href: "image-preview", color: color.GRAY },
  { id: 39, name: "List 列表", href: "list", color: color.GRAY },
  { id: 40, name: "Skeleton 骨架屏", href: "skeleton", color: color.GRAY },
  { id: 41, name: "Steps 步骤条", href: "steps", color: color.GRAY },
  { id: 42, name: "NoticeBar 通知栏", href: "NoticeBar", color: color.GRAY },
  { id: 43, name: "Popover 气泡弹出框", href: "Popover", color: color.GRAY },
  { id: 44, name: "Sticky 粘性布局", href: "Sticky", color: color.GRAY },
  { id: 45, name: "Swipe 轮播", href: "Swipe", color: color.GRAY },
  { id: 46, name: "Tag 标签", href: "Tag", color: color.GRAY },
  { id: 47, name: "Grid 宫格", href: "Grid", color: color.GRAY },
  { id: 48, name: "IndexBar 索引栏", href: "IndexBar", color: color.GRAY },
  { id: 49, name: "Sidebar 侧边导航", href: "Sidebar", color: color.GRAY },
  { id: 50, name: "Tabs 标签页", href: "Tabs", color: color.GRAY },
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
