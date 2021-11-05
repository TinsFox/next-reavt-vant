import React, { useState } from "react";
import { ConfigProvider, DropdownMenu } from "react-vant";
const option1 = [
  { text: "全部商品", value: 0 },
  { text: "新款商品", value: 1 },
  { text: "活动商品", value: 2 },
];
const option2 = [
  { text: "默认排序", value: "a" },
  { text: "好评排序", value: "b" },
  { text: "销量排序", value: "c" },
];
const DropdownMenuPage = () => {
  const [value, setValue] = useState<Record<string, string | number>>();
  const option1 = [
    { text: "商品", value: 0 },
    { text: "店铺", value: 1 },
  ];
  const themeVars = {
    dropdownMenuHeight: "30px",
    dropdownMenuBackgroundColor: "#F7F8FA",
    dropdownMenuBoxShadow: "none",
  };
  return (
    // <DropdownMenu direction="up" value={value} onChange={setValue}>
    //   <DropdownMenu.Item name="value1" options={option1} />
    //   <DropdownMenu.Item name="value2" options={option2} />
    // </DropdownMenu>
    <ConfigProvider themeVars={themeVars}>
      <DropdownMenu
        value={value}
        onChange={setValue}
        style={{ marginLeft: "10px" }}
      >
        <DropdownMenu.Item
          name="value1"
          options={option1}
          placeholder={"商品"}
        />
      </DropdownMenu>
    </ConfigProvider>
  );
};
export default DropdownMenuPage;
