import ItemList from '../components/ItemList';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home(){
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

    

    if (isLoading) {
        return (<div>Laeb...</div>);
    }

    return (
        <div>
            <h1>Esileht</h1>
            <p><h2>Esemete vaade</h2></p>
            <ItemList items={loadedItems} />
            <br/>
            <Link to="add-item">
                <button>Lisa uus ese</button>
            </Link>
        </div>
    )
}

export default Home;