import {useState} from 'react';

export const Les3 = () => {
    let [a,setA] = useState(1)
    const onClickHandler = () => {
      setA(++a);
    }
    const onClickHandler2 = () => {
      setA(0);
    }
    return (<>
            <h1>Урок 3 - useState</h1>
            <h3>{a}</h3>
            <button onClick={onClickHandler}>add +1</button>
            <button onClick={onClickHandler2}>delete all</button>
        </>
    )
}