import {useState} from 'react';

type FilterType='all'|'dollar'|'ruble'

export const Les4=()=>{
    const [money, setMoney] =  useState([
            {banknote: 'dollar', nominal:100, number:'a1234567890'},
            {banknote: 'dollar', nominal:500, number:'w5465795235'},
            {banknote: 'ruble', nominal:100, number:'r4561576215'},
            {banknote: 'dollar', nominal:50, number:'h12353866590'},
            {banknote: 'ruble', nominal:200, number:'l1254248212'},
            {banknote: 'ruble', nominal:150, number:'q4588567890'},
            {banknote: 'ruble', nominal:250, number:'m1234528210'},
            {banknote: 'dollar', nominal:300, number:'b1451652179'},
        ]
    )

    const [filter,setFilter] = useState<FilterType>('all')
    let filterMoney = money
    if (filter === 'ruble') {filterMoney= money.filter(el=>el.banknote === 'ruble')}
    if (filter === 'dollar') {filterMoney= money.filter(el=>el.banknote  === 'dollar')}

    let onClickHandler=(nameButton:FilterType)=>{
        setFilter(nameButton)
    }

    return(
        <>
            <h1>Урок 4 - Filter</h1>
            <ul>
                {filterMoney.map((el,index)=>
                    <li key={index}>
                        <span>{el.banknote}  </span>
                        <span>{el.nominal}  </span>
                        <span>{el.number}  </span>
                    </li>
                )}
            </ul>

            <button  onClick={()=>onClickHandler('all')}>all</button>
            <button onClick={()=>onClickHandler('ruble')}>rubles</button>
            <button onClick={()=>onClickHandler('dollar')}>dollars</button>

        </>
    )
}