import { Link } from "react-router-dom";

function Item(props){
    function handleDelete(itemID){
        props.deleteItem(itemID);
    }

    return (
        <div>
            { props.isSingleItemView ? 
            <div>
                <div className="itemName">{props.name}</div>
                
            </div> : 
            <Link to={`item/${props.id}`}>
                <div className="itemName">{props.name}</div>
            </Link> }
            <div className="itemPrice">{props.price}</div>
            <div className="itemCategory">{props.category}</div>
            { props.isAddToCartButton ? <button>Lisa ostukorvi</button> : 
                    <div>
                    <button onClick={()=>handleDelete(props.id)}>X</button>

                    <Link to={`edit-item/${props.id}`}>
                        <button>Muuda toode</button>
                    </Link>
                    
                    </div> }
        </div>
    )
}

export default Item;