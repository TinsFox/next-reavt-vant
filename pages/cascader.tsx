import React from 'react';
import { Field, Popup, Cascader, useSetState } from 'react-vant';

// 选项列表，children 代表子选项，支持多级嵌套
const options = [
    {
        text: '浙江省',
        value: '330000',
        children: [{ text: '杭州市', value: '330100' }],
    },
    {
        text: '江苏省',
        value: '320000',
        children: [{ text: '南京市', value: '320100' }],
    },
];

const CascaderPage = () => {
    const [state, set] = useSetState({
        v1: true,
        t1: '',
        v2: false,
        t2: '',
        v3: false,
        t3: '',
        v4: false,
        t4: '',
      });
    return (
        <>
            <Popup visible={state.v1} round position="bottom" onClose={() => set({ v1: false })}>
                <Cascader
                    title="请选择所在地区"
                    options={options}
                    onClose={() => set({ v1: false })}
                    onFinish={({ selectedOptions }) => {
                        set({ v1: false, t1: selectedOptions.map((option: { text: any; }) => option.text).join('/') });
                    }}
                />
            </Popup>
            <div>{state.t1}</div>
        </>
    );
};
export default CascaderPage