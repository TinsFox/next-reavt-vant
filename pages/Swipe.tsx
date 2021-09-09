import React from "react";
import { Swipe, Toast } from "react-vant";
const images = [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
    'https://img.yzcdn.cn/vant/apple-3.jpg',
    'https://img.yzcdn.cn/vant/apple-4.jpg',
];
const onChange = (index: number) => Toast(`当前 Swipe 索引：${index}`);
export default function SwipePage() {
    return (
        <div>
            <Swipe autoplay={3000} vertical style={{ height: '200px' }} className="demo-swipe--vertical">
  <Swipe.Item>1</Swipe.Item>
  <Swipe.Item>2</Swipe.Item>
  <Swipe.Item>3</Swipe.Item>
  <Swipe.Item>4</Swipe.Item>
</Swipe>
            <Swipe className="my-swipe" autoplay={3000} onChange={onChange}>
                <Swipe.Item>1</Swipe.Item>
                <Swipe.Item>2</Swipe.Item>
                <Swipe.Item>3</Swipe.Item>
                <Swipe.Item>4</Swipe.Item>
            </Swipe>
            <Swipe
                className="my-swipe"
                autoplay={3000}
                pagination={{
                    renderBullet: (index, className) => {
                        return `<span class="custom-pagination--bullet ${className}"></span>`;
                    },
                }}
            >
                <Swipe.Item>1</Swipe.Item>
                <Swipe.Item>2</Swipe.Item>
                <Swipe.Item>3</Swipe.Item>
                <Swipe.Item>4</Swipe.Item>
            </Swipe>
            <Swipe autoplay={3000} lazy  className="my-swipe">
                {images.map((item) => (
                    <Swipe.Item key={item}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="swiper-lazy" src={item} alt="" />
                    </Swipe.Item>
                ))}
            </Swipe>
        </div>
    )
}
