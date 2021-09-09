import React, { useState } from "react";
import { Button, Flex, Icon, Notify } from "react-vant";
const NotifyPage=()=>{
    const [visible, setVisible] = useState(false);
    return (
      <>
        <Button onClick={() => setVisible(true)}>打开Notify</Button>
        <Notify visible={visible} type="success">
          <Flex style={{ width: '100%' }} align="center" justify="between">
            <div />
            <div>
              <Icon name="bell" style={{ marginRight: 4 }} />
              <span>通知内容</span>
            </div>
            <Icon name="close" onClick={() => setVisible(false)} />
          </Flex>
        </Notify>
      </>
    );
}
export default NotifyPage