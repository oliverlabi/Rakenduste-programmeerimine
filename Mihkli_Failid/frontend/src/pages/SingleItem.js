import { useState, useEffect } from 'react';
import Item from '../components/Item';

function SingleItem(){
    const [item, setItem] = useState(null);

    useEffect(()=>{
    const itemID = window.location.href.split("/item/")[1];
    fetch("http://localhost:8080/view-item/" + itemID)
    .then(response => {
        return response.json();
        })
    .then(data => {
        console.log(data);
        setItem(data);
        })
    },[])
    

    if(!item){
        return "Loading...";
    }

    return (<div> <Item
        id={item.id}
        name={item.name}
        price={item.price} 
        category={item.category} 
        isAddToCartButton={true} 
        isSingleItemView={true}/>
        </div>)
}

export default SingleItem;