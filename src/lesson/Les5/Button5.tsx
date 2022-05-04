type FullInputPropsType = {
    callBackButtonHandler: () => void
}

export const Button5 = (props: FullInputPropsType) => {
    const onClickButtonAddHandler = () => {
        props.callBackButtonHandler()
    }
    return (
        <div>
            <button onClick={onClickButtonAddHandler}>+</button>
        </div>
    )
}