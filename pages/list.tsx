import React, { useState } from "react";
import { Cell, List } from "react-vant";
// const list=[1,2,3,4,5,6,7,8,9,10]
async function getData(throwError?: undefined) {
    return new Promise<number[]>((resolve, reject) => {
      setTimeout(() => {
        if (throwError) {
          reject(new Error('error'));
        }
        resolve(Array.from({ length: 10 }, (_, i) => i));
      }, 1000);
    });
  }
const ListPage = () => {
    const [finished, setFinished] = useState<boolean>(false);
    const [list, setList] = useState<Array<number>>([]);
    const onLoad = async () => {
        const data = await getData();
        setList((v) => [...v, ...data]);
        if (list.length >= 30) {
          setFinished(true);
        }
      };
    return (
        <>
            <List finished={finished} onLoad={onLoad}>
                {list.length
                    ? list.map((item) => {
                        return <Cell key={item} title={item} />;
                    })
                    : null}
            </List></>
    )
}
export default ListPage