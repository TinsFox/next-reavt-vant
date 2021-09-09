import React, { useRef } from "react";
import { Toast, Popover, Button, Grid } from "react-vant";
import { PopoverInstance } from "react-vant/lib/popover/PropsType";
import { ToastProps } from "react-vant/lib/toast/PropsType";
// const actions = [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }];
const actions = [
    { text: '选项一', icon: 'add-o' },
    { text: '选项二', icon: 'music-o' },
    { text: '选项三', icon: 'more-o' },
];
const PopoverPage = () => {
    const onSelect = (item: { text: string | Omit<ToastProps, "type">; }) => Toast.info(item.text);
    const popover = useRef<PopoverInstance>(null);
    const popover1 = useRef<PopoverInstance>(null);
    return (
        <>
            <Popover
                placement="bottom-start"
                actions={actions}
                onSelect={onSelect}
                reference={<Button type="primary">浅色风格</Button>}
            />
            <Popover
                theme="dark"
                actions={actions}
                onSelect={onSelect}
                reference={<Button type="primary">浅色风格</Button>}
            />
            <Popover
                actions={actions}
                onSelect={onSelect}
                reference={<Button type="primary">浅色风格</Button>}
            />
            <Popover ref={popover} placement="top-start" reference={<Button type="primary">自定义内容</Button>}>
                <Grid square border={false} columnNum={3} style={{ width: 240 }}>
                    {Array.from({ length: 6 }, (_, i) => (
                        <Grid.Item onClick={() => popover.current?.hide()} key={i} icon="photo-o" text="文字" />
                    ))}
                </Grid>
            </Popover>
        </>

    );
}
export default PopoverPage