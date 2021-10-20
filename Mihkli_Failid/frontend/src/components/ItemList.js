import Item from "./Item";

function ItemList(props) {
    return (
        <div class="flex-grid">
            {props.items.map(item=> (
                <div class="col">
                    <Item
                    key= {item.id} 
                    name={item.name}
                    price={item.price} 
                    category={item.category} />
                </div>
            ))}
        </div>
    );
}

export default ItemList