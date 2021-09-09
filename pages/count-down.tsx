import React, { useRef } from "react";
import { Button, CountDown, Flex, Toast } from "react-vant";
const CountDownPage = () => {
    const ref = useRef(null)
    return (
        <>
            <CountDown time={30 * 60 * 60 * 1000} />
            <CountDown
                time={30 * 60 * 60 * 1000}
                format="DD 天 HH 时 mm 分 ss 秒"
            />
            <CountDown
                time={30 * 60 * 60 * 1000}
                millisecond
                format="HH:mm:ss:SS"
            />
            <CountDown
                time={30 * 60 * 60 * 1000}
                millisecond
                format="HH:mm:ss:SS"
            >
                {(timeData) => (
                    <>
                        <span className="block">{timeData.hours}</span>
                        <span className="colon">:</span>
                        <span className="block">{timeData.minutes}</span>
                        <span className="colon">:</span>
                        <span className="block">{timeData.seconds}</span>
                    </>
                )}
            </CountDown>
            <CountDown
                ref={ref}
                time={3000}
                millisecond
                format="ss:SSS"
                autoStart={false}
                onFinish={() => Toast.info('倒计时结束')}
            />
            <Flex>
                <Flex.Item onClick={() => ref.current.start()} span={8}>
                    <Button icon="play-circle-o">开始</Button>
                </Flex.Item>
                <Flex.Item onClick={() => ref.current.pause()} span={8}>
                    <Button icon="pause-circle-o">暂停</Button>
                </Flex.Item>
                <Flex.Item onClick={() => ref.current.reset()} span={8}>
                    <Button icon="replay">重置</Button>
                </Flex.Item>
            </Flex>
        </>
    )
}
export default CountDownPage