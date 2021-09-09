import React from "react";
import { SwipeCell, Button, Cell, Flex, Typography,Image } from "react-vant";
const SwipeCellPage = () => {
    return (
        <>
            <SwipeCell
                leftAction={
                    <Button square type="primary">
                        选择
                    </Button>
                }
                rightAction={
                    <>
                        <Button square type="danger">
                            删除
                        </Button>
                        <Button square type="primary">
                            收藏
                        </Button>
                    </>
                }
            >
                <Cell title="单元格" value="内容" />
            </SwipeCell>
            <SwipeCell
  rightAction={
    <Button style={{ height: '100%' }} square type="danger">
      删除
    </Button>
  }
>
  <Flex className="demo-card" align="stretch">
    <Image src="https://img.yzcdn.cn/vant/ipad.jpeg" className="demo-card__img" alt="23"/>
    <Flex direction="column" justify="between" className="demo-card__content">
      <div>
        <Typography.Title level={5}>商品标题</Typography.Title>
        <Typography.Text type="secondary">这里是商品描述</Typography.Text>
      </div>
      <Flex justify="between" align="center">
        <Typography.Text strong size="lg">
          ¥2.00
        </Typography.Text>
        <Typography.Text size="sm" type="secondary">
          x2
        </Typography.Text>
      </Flex>
    </Flex>
  </Flex>
</SwipeCell>
        </>
    )
}
export default SwipeCellPage