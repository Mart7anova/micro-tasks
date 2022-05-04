import {ChangeEvent} from 'react';

type Input5PropsType={
    setTitle: (value:string)=>void
    title:string
}

export const Input5 = (props:Input5PropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return (
        <div>
            <input value={props.title} onChange={onChangeInputHandler}/>
        </div>
    )
}