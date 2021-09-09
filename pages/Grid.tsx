import React from 'react'
import { Grid, Image } from 'react-vant'

export default function GridPage() {
    return (
        <div>
            <Grid>
                <Grid.Item icon="photo-o" text="文字" />
                <Grid.Item icon="photo-o" text="文字" />
                <Grid.Item icon="photo-o" text="文字" />
                <Grid.Item icon="photo-o" text="文字" />
            </Grid>
            <Grid columnNum={3}>
                {Array.from({ length: 6 }, (_, i) => (
                    <Grid.Item key={i} icon="photo-o" text="文字" />
                ))}
            </Grid>
            <Grid border={false} columnNum={3}>
                <Grid.Item>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <Image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                </Grid.Item>
                <Grid.Item>
                    <Image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
                </Grid.Item>
                <Grid.Item>
                    <Image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
                </Grid.Item>
            </Grid>
            <Grid square>
                {Array.from({ length: 8 }, (_, i) => (
                    <Grid.Item key={i} icon="photo-o" text="文字" />
                ))}
            </Grid>
            <Grid gutter={10}>
                {Array.from({ length: 8 }, (_, i) => (
                    <Grid.Item key={i} icon="photo-o" text="文字" />
                ))}
            </Grid>
            <Grid direction="horizontal" columnNum={3}>
                <Grid.Item icon="photo-o" text="文字" />
                <Grid.Item icon="photo-o" text="文字" />
                <Grid.Item icon="photo-o" text="文字" />
            </Grid>
            <Grid columnNum={2}>
                <Grid.Item icon="home-o" text="文字" badge={{ dot: true }} />
                <Grid.Item icon="search" text="文字" badge={{ content: "99+" }} />
            </Grid>
        </div>
    )
}
