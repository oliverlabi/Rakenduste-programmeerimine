import Item from "./Item";

function ItemList(props) {
    function deleteItem(itemID){
        props.onDeleteItem(itemID);
    }

    return (
        <div class="flex-grid">
            {props.items.map(item=> (
                <div class="col">
                    <Item
                    key= {item.id} 
                    id={item.id}
                    name={item.name}
                    price={item.price} 
                    category={item.category} 
                    isAddToCartButton={props.isAddToCartButton}
                    deleteItem={deleteItem}
                    />
                </div>
            ))}
        </div>
    );
}

export default ItemList