import {Button2} from './Button2';
import {useState} from 'react';

type peopleType = {
    subscriber: string
    age: number
    gender: string
}
type filterPeople ='all'|'men'|'women'

export const Les2_dz = () => {
    const [people, setPeople] = useState([
            {subscriber: 'Olga', age: 21, gender: 'women'},
            {subscriber: 'Ivan', age: 31, gender: 'men'},
            {subscriber: 'Ira', age: 17, gender: 'women'},
            {subscriber: 'Koly', age: 25, gender: 'men'},
            {subscriber: 'Nikita', age: 32, gender: 'men'}
        ]
    )

    const [filter,setFilter]=useState<filterPeople>('all')
    let newListPeople = people
    if(filter === 'women') {newListPeople = people.filter(el=>el.gender === 'women')}
    if(filter === 'men') {newListPeople = people.filter(el=>el.gender === 'men')}

       const buttonCallBack = (buttonName:filterPeople) => {
           setFilter(buttonName)
       }

    return (
        <>
            <h4>Универсальная кнопка - DZ</h4>
            <ul>
                {newListPeople.map((el, index) =>
                    <li key={index}>
                        <span>{el.subscriber}   </span>
                        <span>({el.gender})  -  </span>
                        <span>age: {el.age}</span>
                    </li>
                )}
            </ul>
            <Button2 name={"Show all"} callBack={()=>buttonCallBack('all')}/>
            <Button2 name={"Show women"} callBack={()=>buttonCallBack('women')}/>
            <Button2 name={"Show men"} callBack={()=>buttonCallBack('men')}/>
        </>
    )
}