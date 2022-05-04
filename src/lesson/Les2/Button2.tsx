type Button2Type={
    name:string
    callBack:()=>void
}

export const Button2 = (props:Button2Type) => {
    const onClockHandler=()=>{
        props.callBack()
    }
    return (
        <>
            <button onClick={onClockHandler}>{props.name}</button>
        </>
    )
}