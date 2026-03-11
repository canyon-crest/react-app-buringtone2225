import { useState } from 'react'
import './Card.css'
function ShopCard({name, description}){
    const [count, setCount] = useState(0);

    return(
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <button onClick={() => setCount(count+1)}>Add {name} to cart</button>
            <p> Total {name} purchased: {count}</p>
            </div>
    )
}
export default Card