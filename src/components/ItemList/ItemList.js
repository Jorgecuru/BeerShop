import { memo } from 'react'
import Item from "../Item/Item.js"
import './ItemList.css'
const ItemList = ({ products }) => {
    return (
        <div className='ListGroup' onClick={() => console.log('hice click en itemlist')}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>    
    )
    
}
export default memo(ItemList)