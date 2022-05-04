type HeaderType={
    car: Array<carType>
}
type carType = {
    id: number
    manufacturer: string
    model: string
}

export const Les1=(props:HeaderType)=>{
    return(
        <>
            <h1>Урок 1 - PropsType + MAP</h1>
            <ul>
                {props.car.map((car) => {
                    return (//key=id используется для идентификации элемента
                        <li key={car.id}>Car: {car.manufacturer}
                            <span> model: {car.model}</span>
                        </li>
                    )
                })}
            </ul>
            <table>
                <tr>
                    {props.car.map((car, index) =>//здесь используется index для key
                        <td key={index}>{car.manufacturer}
                            <td>{car.model}</td>
                        </td>
                    )}
                </tr>
            </table>
        </>
    )
}