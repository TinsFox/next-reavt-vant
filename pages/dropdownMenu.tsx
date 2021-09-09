import React, { useState } from "react";
import { DropdownMenu } from "react-vant";
const option1 = [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ];
  const option2 = [
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ];
const DropdownMenuPage=()=>{
    const [value, setValue] = useState();
  return (
    <DropdownMenu direction="up" value={value} onChange={(v) => setValue(v)}>
      <DropdownMenu.Item name="value1" options={option1} />
      <DropdownMenu.Item name="value2" options={option2} />
    </DropdownMenu>
  );
}
export default DropdownMenuPage