import {Button2} from './Button2';

export const Les2 = () => {
    const MyFirstSubscriber = () => {
        console.log('Hello I\'m Ivan')
    }
    const MySecondSubscriber = () => {
        console.log('Hello I\'m Vasya')
    }
    const onClickHandler = (name:string) => {
        console.log(name)
    }
    const foo1 = () => {
        console.log(100500)
    }
    const foo2 = (num:number) => {
      console.log(num)
    }
    
    const buttonCallBack1 = (subscriber:string, age:number) => {
      console.log(subscriber, age)
    }
    const buttonCallBack2 = (subscriber:string, age:number) => {
        console.log(subscriber, age)
    }
    const buttonCallBack3 = () => {
        console.log("I'm stupid button")
    }
    return (
        <>
            <h1>Урок 2 - Button</h1>
            <button onClick={(event) => {console.log('Hello')}}>MyYouTubeChannel</button>

            <button onClick={MyFirstSubscriber}>MyYouTubeChannel-1</button>
            <button onClick={MySecondSubscriber}>MyYouTubeChannel-2</button>

            <button onClick={(event)=>onClickHandler("Nina")}>MyYouTubeChannel-3</button>
            <button onClick={(event)=>onClickHandler("Kiril")}>MyYouTubeChannel-4</button>

            <p>если в функцию ничего не нужно передавать, то без скобок.</p><p>если что-то нужно передать, то скобки 2</p>

            <button onClick={foo1}>b1</button>
            <button onClick={()=>foo2(100500)}>b2</button>

            <h4>Универсальная кнопка</h4>
            <Button2 name={"Bug1"} callBack={()=>buttonCallBack1('Oleg', 21)}/>
            <Button2 name={"Bug2"} callBack={()=>buttonCallBack2('Ira', 18)}/>
            <Button2 name={"Dumb"} callBack={buttonCallBack3}/>
        </>
    )
}