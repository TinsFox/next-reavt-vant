import type { NextPage } from 'next'
import { useState } from 'react';
import { Checkbox, Toast } from 'react-vant';
const CheckboxPage: NextPage = () => {
    const [value, setValue] = useState(false);
    return (
        <div>
            <Checkbox defaultChecked onChange={(val) => console.log(val)}>
                复选框
            </Checkbox>
            <Checkbox defaultChecked disabled>
                复选框
            </Checkbox>
            <Checkbox defaultChecked shape="square">
                复选框
            </Checkbox>
            <Checkbox defaultChecked checkedColor="#ee0a24">
                复选框
            </Checkbox>
            <Checkbox defaultChecked iconSize={24}>
                复选框
            </Checkbox>
            <Checkbox defaultChecked labelDisabled>
                复选框
            </Checkbox>
            <Checkbox
                checked={value}
                onChange={(val) => {
                    Toast.loading({ forbidClick: true, duration: 0 });
                    setTimeout(() => {
                        Toast.clear();
                        setValue(val);
                    }, 500);
                }}
            >
                复选框
            </Checkbox>
        </div>
    )
}

export default CheckboxPage