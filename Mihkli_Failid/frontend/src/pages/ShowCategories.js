import CategoryList from "../components/CategoryList";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ShowCategories(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCategories, setLoadedCategories] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/category").then(res => { //võtab kauem aega, skript liigub edasi ehk asünkroonseks. vaja laadimist
                return res.json();
            }).then(data => {
                console.log(data);
                setIsLoading(false);
                setLoadedCategories(data);
            });
    },[])

    if (isLoading) {
        return (<div>Laeb...</div>);
    }

    return (
        <div>
            <h2>Kategooriate vaade</h2>
            <p>Kategooriad:</p>
            <CategoryList categories={loadedCategories} />
            <br/>
            <Link to="add-category">
                <button>Lisa uus kategooria</button>
            </Link>
        </div>
    )
}

export default ShowCategories;