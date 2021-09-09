import React from "react";
import { Picker, Toast } from 'react-vant';

const columns = ['南京', '苏州', '常州', '淮安', '扬州', '南通', '宿迁', '泰州', '无锡'];
const PickerPage = () => {
    return <div>
        <Picker
            title="标题"
            onChange={(value, index: number) => console.log(value)}
            columns={[
                {
                    text: '江苏',
                    children: [
                        {
                            text: '苏州',
                            children: [{ text: '姑苏区' }, { text: '吴中区' }],
                        },
                        {
                            text: '扬州',
                            children: [{ text: '广陵区' }, { text: '邗江区' }],
                        },
                    ],
                },
                {
                    text: '浙江',
                    children: [
                        {
                            text: '杭州',
                            children: [{ text: '西湖区' }, { text: '余杭区' }],
                        },
                        {
                            text: '温州',
                            children: [{ text: '鹿城区' }, { text: '瓯海区' }],
                        },
                    ],
                },
            ]}
        />
    </div>
}

export default PickerPage