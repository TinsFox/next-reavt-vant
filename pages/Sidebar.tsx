import React, { useState } from 'react'
import { Sidebar } from 'react-vant';

export default function SidebarPage() {
    const [active, setActive] = useState(0);
    return (
      <Sidebar value={active} onChange={setActive}>
        <Sidebar.Item title="标签名称" />
        <Sidebar.Item title="标签名称" />
        <Sidebar.Item title="标签名称" />
      </Sidebar>
    );
}
