import {useState} from 'react';
import {FullInput} from './FullInput';
import {Button5} from './Button5';
import {Input5} from './Input5';

export const Les5 = () => {
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'},
        ]
    )
    const addMessage = (title: string) => {
        setMessage([{message:title},...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    let [title, setTitle] = useState<string>('')

    return (
        <div>
            <FullInput addMessage={addMessage}/>

            <Input5 setTitle={setTitle} title={title}/>
            <Button5 callBackButtonHandler={callBackButtonHandler}/>

            {message.map((m, index) =>
                <div key={index}>{m.message}</div>
            )}
        </div>
    )
}
