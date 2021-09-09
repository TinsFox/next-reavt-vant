import React from "react";
import { Dialog, PasswordInput } from "react-vant";
const onSubmit = (val: string) => {
    Dialog.alert({
        message: val
    })
};
const PasswordInputPage = () => {
    return <div>
        <PasswordInput
            length={4}
            autoFocus
            onSubmit={onSubmit}
        />
    </div>
}
export default PasswordInputPage