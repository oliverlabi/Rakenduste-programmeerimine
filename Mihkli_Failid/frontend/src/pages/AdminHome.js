import ItemList from '../components/ItemList';
import { useState, useEffect } from 'react';

function AdminHome(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/items").then(res => { //võtab kauem aega, skript liigub edasi ehk asünkroonseks. vaja laadimist
            return res.json();
        }).then(data => {
            console.log(data);
            setIsLoading(false);
            setLoadedItems(data);
        });
        
    },[])

    function makeDeleteRequest(itemID){
        fetch("http://localhost:8080/delete-item/" + itemID, 
            { method: "DELETE" }
        ).then(res => { //võtab kauem aega, skript liigub edasi ehk asünkroonseks. vaja laadimist
            return res.json();
        }).then(data => {
            setLoadedItems(data);
        });
    }

    if (isLoading) {
        return (<div>Laeb...</div>);
    }

    return (
        <div>
            <h2>Admin vaade</h2>
            <ItemList onDeleteItem={makeDeleteRequest} isAddToCartButton={false} items={loadedItems} />
            <br/>
        </div>
    )
}

export default AdminHome;