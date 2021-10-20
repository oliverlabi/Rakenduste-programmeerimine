function Item(props){
    return (
        <div>
            <div className="itemName"><b>{props.name}</b></div>
            <div className="itemPrice">Hind: {props.price}</div>
            <div className="itemCategory">{props.category}</div>
        </div>
    )
}

export default Item;