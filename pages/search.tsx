import React, { useState } from "react";
import { Search, Toast } from "react-vant";
const SearchPage = () => {
    const [value, setValue] = useState('');

    const onSearch = (val) => Toast.info(val);
    const onCancel = () => Toast.info('取消');
    return (<>
        <Search value={value} onChange={setValue} placeholder="请输入搜索关键词" />
        <Search
            value={value}
            onChange={setValue}
            onSearch={onSearch}
            onCancel={onCancel}
            showAction
            actionText={<div onClick={onSearch}>搜索</div>}
            placeholder="请输入搜索关键词"
        />
        <Search placeholder="请输入搜索关键词" disabled />
        <Search shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
        <Search
            showAction
            label="地址"
            placeholder="请输入搜索关键词"
            actionText={<div onClick={onSearch}>搜索</div>}
            onSearch={onSearch}
        />
    </>)
}
export default SearchPage